

// Highlight Item Interface
export interface HighlightItem {
    icon: any;
    text: string;
    subtitle: string;
}

// Service Card Interface
export interface ServiceCard {
    id: string;
    title: string;
    subtitle: string;
    icon: any;
    color: string;
    badge?: string;
    ctaButton: string;
    features: string[];
    highlights: HighlightItem[];
}

// Multiple Services Array Type
export type ServiceCards = ServiceCard[];

// Props for Service Card Component
export interface ServiceCardProps {
    service: ServiceCard;
    onCtaClick?: (serviceId: string) => void;
}

// Props for Highlight Item Component
export interface HighlightItemProps {
    highlight: HighlightItem;
}

// Props for Features List Component
export interface FeaturesListProps {
    features: string[];
    maxDisplay?: number;
}

// Props for Service List Component
export interface ServiceListProps {
    services: ServiceCards;
    selectedService?: string;
    onServiceSelect?: (serviceId: string) => void;
}

// Service Category Types
export type ServiceCategory =
    | 'video-counseling'
    | 'in-person'
    | 'chat-support'
    | 'career-guidance';

// Filter Options




// Booking/Scheduling Types
export interface BookingDetails {
    serviceId: string;
    serviceName: string;
    userName: string;
    userEmail: string;
    userPhone: string;
    preferredDate?: Date;
    preferredTime?: string;
    notes?: string;
}

// Modal/Dialog Props
export interface ServiceModalProps {
    isOpen: boolean;
    service: ServiceCard | null;
    onClose: () => void;
    onBook?: (serviceId: string) => void;
}