/**
 * CRM Lead Integration Utility
 * This utility handles sending lead data to the external CRM.
 */

export async function syncLeadToCRM(formData) {
  const API_URL = process.env.NEXT_PUBLIC_CRM_API_URL || "https://your-crm-domain.com/api/leads/public";

  // Validation: Check if name and phone are present
  if (!formData.name || (!formData.phone && !formData.mobile)) {
    console.error("CRM Sync Validation Failed: Name and Phone are mandatory.");
    return { success: false, message: "Name and Phone are mandatory." };
  }

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        phone: formData.phone || formData.mobile,
        email: formData.email || "",
        source: "website",
        city: formData.city || formData.location || "",
        notes: formData.notes || formData.message || `New lead from website form. University: ${formData.university || 'N/A'}, Course: ${formData.course || 'N/A'}`
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log("Lead synced to CRM. ID:", result.id);
      return { success: true, id: result.id };
    } else {
      console.error("CRM Sync Failed:", result.message);
      return { success: false, message: result.message };
    }
  } catch (error) {
    console.error("CRM Network Error:", error);
    return { success: false, message: error.message };
  }
}
