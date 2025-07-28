'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Youtube, 
  Linkedin,
  Instagram,
  ArrowUp,
  GraduationCap,
  Users,
  Award,
  Globe,
  FileText,
  Calendar,
  Heart
} from 'lucide-react';
import ScrollAnimation from '@/components/common/ScrollAnimation';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    {
      title: "Chương trình đào tạo",
      links: [
        { name: "Tài chính - Ngân hàng CLC", href: "#program-overview" },
        { name: "Cấu trúc chương trình", href: "#curriculum" },
        { name: "Đội ngũ giảng viên", href: "#faculty" },
        { name: "Cơ sở vật chất", href: "#facilities" }
      ]
    },
    {
      title: "Tuyển sinh",
      links: [
        { name: "Quy trình tuyển sinh", href: "#admission-process" },
        { name: "Phương thức xét tuyển", href: "#admission-methods" },
        { name: "Học bổng", href: "#scholarships" },
        { name: "Lịch tuyển sinh", href: "#important-dates" }
      ]
    },
    {
      title: "Sinh viên",
      links: [
        { name: "Cơ hội nghề nghiệp", href: "#career-opportunities" },
        { name: "Câu chuyện thành công", href: "#success-stories" },
        { name: "Hoạt động sinh viên", href: "#student-activities" },
        { name: "Hỗ trợ sinh viên", href: "#student-support" }
      ]
    },
    {
      title: "Hỗ trợ",
      links: [
        { name: "Tư vấn trực tuyến", href: "#registration-form" },
        { name: "Câu hỏi thường gặp", href: "#faq" },
        { name: "Tải tài liệu", href: "#downloads" },
        { name: "Liên hệ", href: "#contact" }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Địa chỉ",
      content: "Số 1, Đại Cồ Việt, Hai Bà Trưng, Hà Nội",
      subContent: "Tòa nhà A, Tầng 2, Phòng 201-205"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Điện thoại",
      content: "(024) 3869 2222",
      subContent: "Hotline: 0123 456 789"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "tuyensinh@university.edu.vn",
      subContent: "info@university.edu.vn"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 6: 8:00 - 17:00",
      subContent: "Thứ 7: 8:00 - 12:00"
    }
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com/university",
      color: "hover:text-blue-600",
      followers: "50K"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      href: "https://youtube.com/university",
      color: "hover:text-red-600",
      followers: "25K"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/university",
      color: "hover:text-blue-700",
      followers: "15K"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/university",
      color: "hover:text-pink-600",
      followers: "30K"
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: "Top 10",
      description: "Chương trình CLC tốt nhất Việt Nam"
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "5000+",
      description: "Sinh viên đã tốt nghiệp"
    },
    {
      icon: <Globe className="w-6 h-6 text-green-500" />,
      title: "50+",
      description: "Đối tác quốc tế"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-purple-500" />,
      title: "95%",
      description: "Tỷ lệ có việc làm sau tốt nghiệp"
    }
  ];

  const importantLinks = [
    { name: "Quy chế đào tạo", href: "#regulations" },
    { name: "Chính sách bảo mật", href: "#privacy" },
    { name: "Điều khoản sử dụng", href: "#terms" },
    { name: "Sitemap", href: "#sitemap" }
  ];

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 pt-16 pb-8">
          {/* Top Section */}
          <ScrollAnimation animation="slideUp">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
              {/* University Info */}
              <div className="lg:col-span-1">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">University</h3>
                      <p className="text-sm text-gray-400">Excellence in Education</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Chương trình Tài chính - Ngân hàng CLC với chất lượng đào tạo quốc tế, 
                    trang bị kiến thức và kỹ năng thực tế cho sinh viên.
                  </p>
                </div>

                {/* Achievements */}
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center p-3 bg-gray-800 rounded-lg"
                    >
                      <div className="flex justify-center mb-2">
                        {achievement.icon}
                      </div>
                      <div className="text-lg font-bold text-white">{achievement.title}</div>
                      <div className="text-xs text-gray-400">{achievement.description}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              {quickLinks.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h4 className="text-lg font-semibold mb-4 text-white">
                    {section.title}
                  </h4>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={linkIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05) }}
                        viewport={{ once: true }}
                      >
                        <a
                          href={link.href}
                          className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block py-1"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.querySelector(link.href);
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }}
                        >
                          {link.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ScrollAnimation>

          <Separator className="bg-gray-700 mb-8" />

          {/* Contact Information */}
          <ScrollAnimation animation="slideUp" delay={400}>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-8">Thông tin liên hệ</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6 bg-gray-800 rounded-lg hover:bg-gray-750 transition-colors duration-200"
                  >
                    <div className="flex justify-center mb-3 text-blue-400">
                      {info.icon}
                    </div>
                    <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                    <p className="text-gray-300 text-sm mb-1">{info.content}</p>
                    <p className="text-gray-400 text-xs">{info.subContent}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          <Separator className="bg-gray-700 mb-8" />

          {/* Social Media & Newsletter */}
          <ScrollAnimation animation="slideUp" delay={600}>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-6">Kết nối với chúng tôi</h3>
              <div className="flex justify-center gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 ${social.color} transition-all duration-200 hover:bg-gray-700 group`}
                  >
                    {social.icon}
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
              
              {/* Newsletter Signup */}
              <div className="max-w-md mx-auto">
                <h4 className="text-lg font-semibold mb-4">Đăng ký nhận thông tin mới nhất</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                  <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Nhận thông tin về tuyển sinh, sự kiện và tin tức mới nhất
                </p>
              </div>
            </div>
          </ScrollAnimation>

          <Separator className="bg-gray-700 mb-8" />

          {/* Bottom Section */}
          <ScrollAnimation animation="slideUp" delay={800}>
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  © 2024 University. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-1">
                  Made with <Heart className="w-3 h-3 inline text-red-500" /> for education
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                {importantLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white text-xs transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="border-gray-600 text-gray-400">
                  <Globe className="w-3 h-3 mr-1" />
                  Tiếng Việt
                </Badge>
                <Button
                  onClick={scrollToTop}
                  size="sm"
                  className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white"
                >
                  <ArrowUp className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Floating Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={() => {
              const formSection = document.getElementById('registration-form');
              formSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-full w-14 h-14"
          >
            <FileText className="w-6 h-6" />
          </Button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;