import React from 'react';
import PageHeader from '../components/PageHeader/PageHeader';

function SponsorPage() {
  return (
    <div>
      <PageHeader 
        title="SPONSORS"
        subtitle="Explore the vibrant spectrum of cultural celebrations"
        showBackButton={true}
        backPath="/"
        titleDelay={0.2}
        showStars={true}
      />
    </div>
  );
}

export default SponsorPage;