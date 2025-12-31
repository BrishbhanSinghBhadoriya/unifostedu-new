import React from 'react';
import Link from 'next/link';
import { FaChevronRight, FaHome } from 'react-icons/fa';
type BreadcrumbProps = {
  items: { name: string; url: string }[];
  showHome?: boolean;
};

const Breadcrumb = ({ items, showHome = true }: BreadcrumbProps) => {
  // Generate structured data for breadcrumbs
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      ...(showHome ? [{
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://unifostedu.com"
      }] : []),
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": showHome ? index + 2 : index + 1,
        "name": item.name,
        "item": item.url
      }))
    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      
      {/* Visual Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6" aria-label="Breadcrumb">
        {showHome && (
          <>
            <Link 
              href="/" 
              className="flex items-center hover:text-[#00ffe0] transition-colors duration-200"
            >
              <FaHome className="w-4 h-4 mr-1" />
              Home
            </Link>
            <FaChevronRight className="w-3 h-3 text-gray-400" />
          </>
        )}
        
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && <FaChevronRight className="w-3 h-3 text-gray-400" />}
            {index === items.length - 1 ? (
              <span className="text-[#001e3c] font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link 
                href={item.url}
                className="hover:text-[#00ffe0] transition-colors duration-200"
              >
                {item.name}
              </Link>
            )}
          </React.Fragment>
        ))}
      </nav>
    </>
  );
};

export default Breadcrumb;
