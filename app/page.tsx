'use client';

import { Suspense } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '@/components/sections/HeroSection';
import ProgramOverview from '@/components/sections/ProgramOverview';
import CareerOpportunities from '@/components/sections/CareerOpportunities';
import AdmissionProcess from '@/components/sections/AdmissionProcess';
import RegistrationForm from '@/components/sections/RegistrationForm';
import Footer from '@/components/sections/Footer';
import { ThemeToggle } from '@/components/theme-toggle';
import { Loader2 } from 'lucide-react';

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-background">
    <div className="text-center">
      <Loader2 className="w-12 h-12 animate-spin text-primary mx-auto mb-4" />
      <p className="text-muted-foreground text-lg">Đang tải...</p>
    </div>
  </div>
);

// Section wrapper with loading state
const SectionWrapper = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <Suspense fallback={<LoadingSpinner />}>
    <motion.div
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  </Suspense>
);

export default function HomePage() {
  // Hero section data
  const heroData = {
    title: "Tài chính - Ngân hàng CLC",
    subtitle: "Chương trình Chất lượng cao với chuẩn quốc tế",
    description: "Đào tạo chuyên gia tài chính ngân hàng với kiến thức vững vàng, kỹ năng thực tế và tư duy sáng tạo, đáp ứng nhu cầu của thị trường lao động trong và ngoài nước.",
    videoUrl: "/api/placeholder/800/450",
    backgroundImage: "/api/placeholder/1920/1080",
    ctaText: "Đăng ký tư vấn ngay",
    secondaryCtaText: "Tìm hiểu chương trình",
    trustBadges: [
      {
        id: "1",
        name: "Top 10 chương trình CLC",
        imageUrl: "/api/placeholder/60/60",
        alt: "Top 10 chương trình CLC - Được xếp hạng cao nhất Việt Nam"
      },
      {
        id: "2",
        name: "Chuẩn quốc tế",
        imageUrl: "/api/placeholder/60/60",
        alt: "Chuẩn quốc tế - Liên kết với 50+ trường đại học"
      },
      {
        id: "3",
        name: "95% có việc làm",
        imageUrl: "/api/placeholder/60/60",
        alt: "95% có việc làm - Sau 6 tháng tốt nghiệp"
      },
      {
        id: "4",
        name: "Mức lương cao",
        imageUrl: "/api/placeholder/60/60",
        alt: "Mức lương cao - 15-25 triệu VNĐ khởi điểm"
      }
    ],
    statistics: [
      {
        number: "5000+",
        label: "Sinh viên tốt nghiệp",
        description: "Đang làm việc tại các tập đoàn lớn"
      },
      {
        number: "50+",
        label: "Đối tác quốc tế",
        description: "Trường đại học và doanh nghiệp"
      },
      {
        number: "95%",
        label: "Tỷ lệ có việc làm",
        description: "Trong vòng 6 tháng sau tốt nghiệp"
      }
    ],
    keyBenefits: [
      "Học phí ưu đãi với nhiều học bổng",
      "Thực tập tại các ngân hàng lớn",
      "Cơ hội du học và trao đổi quốc tế",
      "Hỗ trợ việc làm sau tốt nghiệp"
    ]
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Theme Toggle - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      {/* Hero Section */}
      <SectionWrapper>
        <HeroSection
          title={heroData.title}
          subtitle={heroData.subtitle}
          videoUrl={heroData.videoUrl}
          backgroundImage={heroData.backgroundImage}
          ctaText={heroData.ctaText}
          trustBadges={heroData.trustBadges}
        />
      </SectionWrapper>

      {/* Program Overview Section */}
      <SectionWrapper id="program-overview">
        <ProgramOverview />
      </SectionWrapper>

      {/* Career Opportunities Section */}
      <SectionWrapper>
        <CareerOpportunities />
      </SectionWrapper>

      {/* Admission Process Section */}
      <SectionWrapper>
        <AdmissionProcess />
      </SectionWrapper>

      {/* Registration Form Section */}
      <SectionWrapper id="registration-form">
        <RegistrationForm />
      </SectionWrapper>

      {/* Footer Section */}
      <SectionWrapper>
        <Footer />
      </SectionWrapper>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent z-50 origin-left"
        style={{
          scaleX: 0
        }}
        whileInView={{
          scaleX: 1
        }}
        transition={{
          duration: 0.3
        }}
      />

      {/* Back to Top Button */}
      <motion.button
        className="fixed bottom-20 right-6 w-12 h-12 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </main>
  );
}
