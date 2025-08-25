# University Pages Update Guide

## What has been implemented:

✅ **LPU** - Updated to use reusable EnquireCard component
✅ **Amity** - Updated to use reusable EnquireCard component  
✅ **Manipal** - Updated to use reusable EnquireCard component
✅ **NMIMS** - Updated to use reusable EnquireCard component
✅ **Sharda** - Updated to use reusable EnquireCard component
✅ **DY Patil** - Updated to use reusable EnquireCard component
✅ **Jain** - Updated to use reusable EnquireCard component

## What still needs to be updated:

❌ **Chandigarh University** - `src/app/chandigarh/page.jsx`
❌ **VGU** - `src/app/vgu/page.jsx`
❌ **UU** - `src/app/uu/page.jsx`
❌ **UPES** - `src/app/upes/page.jsx`
❌ **Shoolini** - `src/app/shoolini/page.jsx`
❌ **OP Jindal** - `src/app/opjindal/page.jsx`
❌ **SMU** - `src/app/smu/page.jsx`

## How to update each remaining university page:

### Step 1: Replace the local EnquireCard component
Remove the local `const EnquireCard = ...` component definition and add this import:

```jsx
import EnquireCard from '@/components/EnquireCard';
```

### Step 2: Update the EnquireCard usage
Find where `EnquireCard` is used in the JSX and add the `universityName` prop:

```jsx
// Before:
<EnquireCard key={index} {...item} />

// After:
<EnquireCard key={index} {...item} universityName="University Name Online" />
```

### Step 3: Use appropriate university names:
- **Chandigarh**: `"Chandigarh University Online"`
- **VGU**: `"Vivekananda Global University Online"`
- **UU**: `"UPES Online"`
- **UPES**: `"UPES Online"`
- **Shoolini**: `"Shoolini University Online"`
- **OP Jindal**: `"OP Jindal University"`
- **SMU**: `"SMU Online"`

## Benefits of this update:

1. **Consistent UI**: All university pages now have the same enquiry form dialog
2. **Better UX**: Users get the "Get Started with Unifost" enquiry form when clicking "Enquire Now"
3. **Maintainable**: Single component to maintain instead of multiple copies
4. **Professional**: Consistent enquiry form across all university pages

## Testing:

After updating each page, test that:
1. The "Enquire Now" button opens the enquiry form dialog
2. The form shows the correct university name
3. The form shows the correct course name
4. The form can be submitted successfully
5. The dialog closes after submission
