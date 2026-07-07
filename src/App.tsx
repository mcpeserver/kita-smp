/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from './components/Header';
import Hero from './components/Hero';
import QuickInfo from './components/QuickInfo';
import ServerAddress from './components/ServerAddress';
import Features from './components/Features';
import ServerRules from './components/ServerRules';
import GroupRules from './components/GroupRules';
import StaffSection from './components/StaffSection';
import SocialMedia from './components/SocialMedia';
import CTAPurchasing from './components/CTAPurchasing';
import Footer from './components/Footer';

// Import images as ES modules so Vite can compile and bundle them with hashes
import logoUrl from './assets/images/kita_smp_logo_1783444949864.jpg';
import bgUrl from './assets/images/kita_smp_bg_1783444966507.jpg';

export default function App() {

  return (
    <div className="relative min-h-screen bg-bg text-body-text font-sans antialiased selection:bg-primary selection:text-white noise-overlay">
      
      {/* Decorative Global Background Ambient Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/5 blur-[150px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />
      </div>

      {/* Semantic Layout */}
      <Header logoUrl={logoUrl} />

      <main className="relative z-10">
        {/* Cinematic Entrance */}
        <Hero logoUrl={logoUrl} bgUrl={bgUrl} />
        
        {/* Quick Facts Section */}
        <QuickInfo />
        
        {/* Section Divider */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* Server Address and Crossplay Connection Info */}
        <ServerAddress />

        {/* Section Divider */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* Highlighted Key Server Features */}
        <Features />

        {/* Section Divider */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* Server Rules Timeline */}
        <ServerRules />

        {/* Section Divider */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* Social Communication Rules Grid */}
        <GroupRules />

        {/* Section Divider */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* Professional Staff Team Members */}
        <StaffSection />

        {/* Section Divider */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* Dynamic Social Media Links */}
        <SocialMedia />

        {/* Section Divider */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* Premium VIP Sales CTA */}
        <CTAPurchasing />
      </main>

      {/* Structured Footer */}
      <Footer logoUrl={logoUrl} />
      
    </div>
  );
}
