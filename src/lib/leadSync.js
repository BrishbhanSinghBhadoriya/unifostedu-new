import axios from 'axios';

/**
 * Comprehensive Lead Sync System
 * Handles multiple CRM integrations with fallback mechanisms
 */

export class LeadSyncManager {
  constructor() {
    this.crmEndpoints = [
      {
        name: 'Primary CRM',
        url: process.env.CRM_API_URL,
        enabled: !!process.env.CRM_API_URL,
        timeout: 15000
      },
      {
        name: 'NeoDove',
        url: process.env.NEODOVE_API_URL || "https://25515469-e21f-48a6-93fb-91446641fcda.neodove.com/integration/custom/4fa16adb-e429-4417-a5ba-fc6f77e3fea3/leads",
        enabled: true,
        timeout: 10000
      }
    ];
  }

  /**
   * Normalize lead data for different CRM systems
   */
  normalizeLeadData(leadData, source = 'website') {
    const baseData = {
      name: leadData.name,
      phone: leadData.mobile || leadData.phone,
      email: leadData.email || `lead_${Date.now()}@unifost.com`,
      source: source,
      city: leadData.location || leadData.city || 'Unknown',
      notes: `University: ${leadData.university || 'N/A'}, Course: ${leadData.course || 'N/A'}`,
      leadSource: 'Unifost Website',
      status: 'new',
      timestamp: new Date().toISOString()
    };

    return {
      primaryCRM: {
        ...baseData,
        leadType: 'enquiry',
        priority: 'medium'
      },
      neoDove: {
        name: baseData.name,
        mobile: baseData.phone,
        email: baseData.email,
        location: baseData.city,
        university: leadData.university || 'General Inquiry',
        course: leadData.course || 'General'
      }
    };
  }

  /**
   * Send lead to a specific CRM endpoint
   */
  async sendToCRM(endpoint, leadData, source = 'website') {
    if (!endpoint.enabled || !endpoint.url) {
      console.log(`[LeadSync] ${endpoint.name} is disabled or URL not configured`);
      return { success: false, reason: 'disabled' };
    }

    try {
      const normalizedData = this.normalizeLeadData(leadData, source);
      const payload = endpoint.name === 'NeoDove' ? normalizedData.neoDove : normalizedData.primaryCRM;

      console.log(`[LeadSync] Sending to ${endpoint.name}:`, payload);

      const response = await axios.post(
        endpoint.url,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': `Unifost-${endpoint.name}/1.0`
          },
          timeout: endpoint.timeout
        }
      );

      console.log(`[LeadSync] ${endpoint.name} success:`, response.status, response.data);
      return { 
        success: true, 
        endpoint: endpoint.name,
        status: response.status,
        data: response.data 
      };

    } catch (error) {
      console.error(`[LeadSync] ${endpoint.name} error:`, error.response?.data || error.message);
      return { 
        success: false, 
        endpoint: endpoint.name,
        error: error.response?.data || error.message,
        status: error.response?.status
      };
    }
  }

  /**
   * Send lead to all configured CRM systems
   */
  async syncLead(leadData, source = 'website') {
    console.log('[LeadSync] Starting lead sync for:', leadData.name, leadData.mobile);

    const results = await Promise.allSettled(
      this.crmEndpoints.map(endpoint => this.sendToCRM(endpoint, leadData, source))
    );

    const syncResults = results.map((result, index) => ({
      endpoint: this.crmEndpoints[index].name,
      ...result.value
    }));

    const successCount = syncResults.filter(r => r.success).length;
    const totalEnabled = this.crmEndpoints.filter(e => e.enabled).length;

    console.log(`[LeadSync] Sync complete: ${successCount}/${totalEnabled} successful`);

    return {
      success: successCount > 0,
      totalEndpoints: totalEnabled,
      successCount,
      results: syncResults
    };
  }

  /**
   * Get sync status and configuration
   */
  getStatus() {
    return {
      endpoints: this.crmEndpoints.map(e => ({
        name: e.name,
        enabled: e.enabled,
        configured: !!e.url
      })),
      totalEnabled: this.crmEndpoints.filter(e => e.enabled).length
    };
  }
}

// Export singleton instance
export const leadSyncManager = new LeadSyncManager();