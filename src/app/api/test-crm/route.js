import { NextResponse } from 'next/server';
import { leadSyncManager } from '@/lib/leadSync';

export async function GET() {
  try {
    console.log('[TEST CRM] Testing CRM connectivity...');
    
    // Get system status
    const status = leadSyncManager.getStatus();
    console.log('[TEST CRM] System status:', status);

    // Test with a sample lead
    const testLead = {
      name: "Test Lead - " + new Date().toISOString(),
      mobile: "9876543210",
      email: "test@unifost.com",
      location: "Test City",
      university: "Test University",
      course: "Test Course"
    };

    console.log('[TEST CRM] Testing with lead:', testLead);

    const syncResult = await leadSyncManager.syncLead(testLead, 'api_test');

    return NextResponse.json({ 
      success: syncResult.success, 
      message: syncResult.success ? 'CRM connectivity test successful' : 'Some CRM endpoints failed',
      systemStatus: status,
      syncResult: syncResult
    });

  } catch (error) {
    console.error('[TEST CRM] Error:', error.message);
    
    return NextResponse.json({ 
      success: false, 
      message: 'CRM connectivity test failed',
      error: error.message
    }, { status: 500 });
  }
}

export async function POST() {
  return GET(); // Same test for POST
}