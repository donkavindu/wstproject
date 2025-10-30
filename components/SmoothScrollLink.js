// components/SmoothScrollLink.jsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const SmoothScrollLink = ({ href, children, ...props }) => {
  const router = useRouter();
  
  const handleClick = (e) => {
    e.preventDefault();
    
    // Remove the # from href
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Scroll to the element smoothly
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Update URL without page reload
      window.history.pushState(null, '', href);
    } else {
      // If element not found, navigate normally
      router.push(href);
    }
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default SmoothScrollLink;