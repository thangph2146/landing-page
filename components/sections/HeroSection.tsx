'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Star, Users, Award } from 'lucide-react';
import { HeroSectionProps } from '@/lib/types';
import ScrollAnimation from '@/components/common/ScrollAnimation';

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  videoUrl,
  ctaText,
  trustBadges
}) => {
  const handleCTAClick = () => {
    const formSection = document.getElementById('registration-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVideoPlay = () => {
    // Handle video modal or inline play
    console.log('Play video:', videoUrl);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
      
      {/* Animated Background Shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Trust Badges */}
              <ScrollAnimation animation="slideUp" delay={200}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                    <Award className="w-3 h-3 mr-1" />
                    Chất lượng cao (CLC)
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                    <Star className="w-3 h-3 mr-1" />
                    Tiếng Anh bán phần
                  </Badge>
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                    <Users className="w-3 h-3 mr-1" />
                    4 năm đào tạo
                  </Badge>
                </div>
              </ScrollAnimation>

              {/* Main Headline */}
              <ScrollAnimation animation="slideUp" delay={400}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {title}
                </h1>
              </ScrollAnimation>

              {/* Subtitle */}
              <ScrollAnimation animation="slideUp" delay={600}>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  {subtitle}
                </p>
              </ScrollAnimation>

              {/* Key Benefits */}
              <ScrollAnimation animation="slideUp" delay={800}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="flex items-center justify-center lg:justify-start text-white">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    <span className="text-sm font-medium">Cơ hội việc làm cao</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-white">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    <span className="text-sm font-medium">Thực hành thực tế</span>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start text-white">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                    <span className="text-sm font-medium">Kết nối quốc tế</span>
                  </div>
                </div>
              </ScrollAnimation>

              {/* CTA Buttons */}
              <ScrollAnimation animation="slideUp" delay={1000}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    onClick={handleCTAClick}
                    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    {ctaText}
                  </Button>
                  
                  {videoUrl && (
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={handleVideoPlay}
                      className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Xem video giới thiệu
                    </Button>
                  )}
                </div>
              </ScrollAnimation>

              {/* Trust Indicators */}
              <ScrollAnimation animation="fadeIn" delay={1200}>
                <div className="mt-12 pt-8 border-t border-white/20">
                  <p className="text-blue-200 text-sm mb-4">Ưu điểm nổi bật:</p>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    {trustBadges.map((badge, index) => (
                      <div key={index} className="flex flex-col items-center text-center">
                        {/* <div className="text-2xl mb-2">{badge.icon}</div> */}
                        <div className="text-white text-sm font-medium mb-1">{badge.name}</div>
                        {/* <div className="text-blue-200 text-xs">{badge.description}</div> */}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Content - Video/Image */}
            <div className="relative">
              <ScrollAnimation animation="slideLeft" delay={600}>
                <div className="relative">
                  {/* Main Image/Video Container */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20">
                    <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
                      {videoUrl ? (
                        <div className="relative w-full h-full">
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <Button
                              size="lg"
                              onClick={handleVideoPlay}
                              className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur-sm rounded-full w-20 h-20 p-0"
                            >
                              <Play className="w-8 h-8" />
                            </Button>
                          </div>
                          <img
                            src="/api/placeholder/600/400"
                            alt="Video thumbnail"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="p-12 text-center text-white">
                          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Award className="w-12 h-12" />
                          </div>
                          <h3 className="text-xl font-semibold mb-2">Chương trình CLC</h3>
                          <p className="text-blue-100">Đào tạo chất lượng cao theo tiêu chuẩn quốc tế</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Floating Stats Cards */}
                  <motion.div
                    className="absolute -top-6 -left-6 bg-white rounded-xl p-4 shadow-xl"
                    animate={{
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">95%</div>
                        <div className="text-sm text-gray-600">Tỷ lệ có việc làm</div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl"
                    animate={{
                      y: [0, 10, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5
                    }}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <Star className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">4.8/5</div>
                        <div className="text-sm text-gray-600">Đánh giá sinh viên</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;