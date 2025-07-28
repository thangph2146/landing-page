'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Briefcase, 
  TrendingUp, 
  DollarSign, 
  Building, 
  Users, 
  Globe,
  ArrowRight,
  Star,
  Target
} from 'lucide-react';
import ScrollAnimation from '@/components/common/ScrollAnimation';
import { useCountUp } from '@/lib/hooks/useScrollAnimation';

const CareerOpportunities = () => {
  const { ref: salaryRef, count: avgSalary } = useCountUp(15, 2000, 8);
  const { ref: growthRef, count: growthRate } = useCountUp(25);
  const { ref: positionsRef, count: openPositions } = useCountUp(500);

  const careerPaths = [
    {
      title: "Chuyên viên Tài chính Doanh nghiệp",
      description: "Phân tích tài chính, lập kế hoạch ngân sách, quản lý dòng tiền",
      averageSalary: "12-20 triệu VNĐ",
      growthRate: "15-20%",
      companies: ["Vingroup", "FPT", "Viettel", "BIDV"],
      skills: ["Excel", "Financial Modeling", "SAP", "Power BI"],
      icon: <Building className="w-6 h-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Chuyên viên Ngân hàng",
      description: "Tư vấn khách hàng, quản lý tín dụng, phát triển sản phẩm ngân hàng",
      averageSalary: "10-18 triệu VNĐ",
      growthRate: "12-18%",
      companies: ["Vietcombank", "Techcombank", "VPBank", "ACB"],
      skills: ["CRM", "Risk Management", "Banking Products", "Customer Service"],
      icon: <DollarSign className="w-6 h-6" />,
      color: "bg-green-500"
    },
    {
      title: "Chuyên viên Đầu tư & Chứng khoán",
      description: "Phân tích thị trường, tư vấn đầu tư, quản lý danh mục",
      averageSalary: "15-25 triệu VNĐ",
      growthRate: "20-30%",
      companies: ["SSI", "VPS", "HSC", "VNDirect"],
      skills: ["Bloomberg", "Technical Analysis", "Portfolio Management", "Research"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "bg-orange-500"
    },
    {
      title: "Chuyên viên Bảo hiểm",
      description: "Phát triển sản phẩm bảo hiểm, quản lý rủi ro, tư vấn khách hàng",
      averageSalary: "8-15 triệu VNĐ",
      growthRate: "10-15%",
      companies: ["Bảo Việt", "Prudential", "AIA", "Manulife"],
      skills: ["Insurance Products", "Risk Assessment", "Sales", "Actuarial"],
      icon: <Target className="w-6 h-6" />,
      color: "bg-purple-500"
    },
    {
      title: "Chuyên viên FinTech",
      description: "Phát triển giải pháp tài chính số, phân tích dữ liệu, blockchain",
      averageSalary: "18-30 triệu VNĐ",
      growthRate: "25-40%",
      companies: ["MoMo", "VNPay", "Timo", "Techcombank"],
      skills: ["Python", "Data Analysis", "Blockchain", "API Integration"],
      icon: <Globe className="w-6 h-6" />,
      color: "bg-indigo-500"
    },
    {
      title: "Chuyên viên Kiểm toán",
      description: "Kiểm toán tài chính, đánh giá rủi ro, tuân thủ quy định",
      averageSalary: "10-16 triệu VNĐ",
      growthRate: "8-12%",
      companies: ["PwC", "EY", "KPMG", "Deloitte"],
      skills: ["Audit Standards", "Risk Assessment", "Compliance", "Financial Reporting"],
      icon: <Users className="w-6 h-6" />,
      color: "bg-red-500"
    }
  ];

  const topEmployers = [
    {
      name: "Vietcombank",
      logo: "/api/placeholder/120/60",
      industry: "Ngân hàng",
      positions: 45,
      description: "Ngân hàng thương mại hàng đầu Việt Nam"
    },
    {
      name: "Techcombank",
      logo: "/api/placeholder/120/60",
      industry: "Ngân hàng số",
      positions: 38,
      description: "Ngân hàng số tiên phong tại Việt Nam"
    },
    {
      name: "SSI",
      logo: "/api/placeholder/120/60",
      industry: "Chứng khoán",
      positions: 25,
      description: "Công ty chứng khoán hàng đầu"
    },
    {
      name: "PwC Vietnam",
      logo: "/api/placeholder/120/60",
      industry: "Tư vấn",
      positions: 20,
      description: "Công ty tư vấn Big 4 toàn cầu"
    },
    {
      name: "MoMo",
      logo: "/api/placeholder/120/60",
      industry: "FinTech",
      positions: 30,
      description: "Ví điện tử hàng đầu Việt Nam"
    },
    {
      name: "Vingroup",
      logo: "/api/placeholder/120/60",
      industry: "Tập đoàn",
      positions: 35,
      description: "Tập đoàn kinh tế tư nhân lớn nhất"
    }
  ];

  const successStories = [
    {
      name: "Nguyễn Minh Anh",
      position: "Senior Financial Analyst",
      company: "Vingroup",
      graduationYear: 2020,
      story: "Sau khi tốt nghiệp, tôi được nhận vào Vingroup với mức lương khởi điểm 15 triệu. Hiện tại đã thăng tiến lên vị trí Senior với mức lương 25 triệu.",
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Trần Văn Hùng",
      position: "Investment Advisor",
      company: "SSI",
      graduationYear: 2019,
      story: "Kiến thức về phân tích tài chính và đầu tư từ chương trình CLC giúp tôi nhanh chóng thích nghi với công việc tại SSI.",
      avatar: "/api/placeholder/80/80"
    },
    {
      name: "Lê Thị Mai",
      position: "Product Manager",
      company: "Techcombank",
      graduationYear: 2021,
      story: "Việc học tiếng Anh trong chương trình giúp tôi tự tin giao tiếp với các đối tác quốc tế và phát triển sản phẩm ngân hàng số.",
      avatar: "/api/placeholder/80/80"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Briefcase className="w-4 h-4 mr-2" />
              Cơ hội nghề nghiệp
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tương lai sự nghiệp rộng mở
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Với nền tảng kiến thức vững chắc và kỹ năng thực tế, sinh viên tốt nghiệp 
              có thể làm việc tại nhiều lĩnh vực khác nhau trong ngành tài chính ngân hàng
            </p>
          </div>
        </ScrollAnimation>

        {/* Career Statistics */}
        <ScrollAnimation animation="slideUp" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div ref={salaryRef} className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {avgSalary}-20
              </div>
              <div className="text-gray-700 font-medium">Triệu VNĐ/tháng</div>
              <div className="text-sm text-gray-600 mt-1">Mức lương trung bình</div>
            </div>
            <div ref={growthRef} className="text-center bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                {growthRate}%
              </div>
              <div className="text-gray-700 font-medium">Tăng trưởng nghề nghiệp</div>
              <div className="text-sm text-gray-600 mt-1">Hàng năm</div>
            </div>
            <div ref={positionsRef} className="text-center bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                {openPositions}+
              </div>
              <div className="text-gray-700 font-medium">Vị trí tuyển dụng</div>
              <div className="text-sm text-gray-600 mt-1">Mỗi tháng</div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Career Paths */}
        <ScrollAnimation animation="slideUp" delay={400}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Các con đường sự nghiệp
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {careerPaths.map((career, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-3">
                        <div className={`w-12 h-12 ${career.color} rounded-lg flex items-center justify-center text-white`}>
                          {career.icon}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg leading-tight">{career.title}</CardTitle>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {career.description}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm text-gray-500">Mức lương</div>
                            <div className="font-semibold text-green-600">{career.averageSalary}</div>
                          </div>
                          <div>
                            <div className="text-sm text-gray-500">Tăng trưởng</div>
                            <div className="font-semibold text-blue-600">{career.growthRate}</div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-500 mb-2">Kỹ năng cần thiết</div>
                          <div className="flex flex-wrap gap-1">
                            {career.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-500 mb-2">Công ty tiêu biểu</div>
                          <div className="text-sm text-gray-700">
                            {career.companies.join(", ")}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Top Employers */}
        <ScrollAnimation animation="slideUp" delay={600}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Nhà tuyển dụng hàng đầu
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topEmployers.map((employer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={employer.logo}
                          alt={employer.name}
                          className="w-16 h-8 object-contain"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{employer.name}</h4>
                          <Badge variant="outline" className="text-xs">{employer.industry}</Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{employer.positions}</div>
                          <div className="text-xs text-gray-500">vị trí</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{employer.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Success Stories */}
        <ScrollAnimation animation="slideUp" delay={800}>
          <div>
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Câu chuyện thành công
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src={story.avatar}
                          alt={story.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{story.name}</h4>
                          <div className="text-sm text-gray-600">{story.position}</div>
                          <div className="text-sm font-medium text-blue-600">{story.company}</div>
                          <Badge variant="outline" className="text-xs mt-1">
                            Khóa {story.graduationYear}
                          </Badge>
                        </div>
                      </div>
                      <blockquote className="text-sm text-gray-700 italic leading-relaxed">
                        "{story.story}"
                      </blockquote>
                      <div className="flex items-center mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* CTA Section */}
        <ScrollAnimation animation="slideUp" delay={1000}>
          <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Sẵn sàng bắt đầu sự nghiệp của bạn?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Đăng ký tư vấn để tìm hiểu thêm về chương trình và cơ hội nghề nghiệp
            </p>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
              onClick={() => {
                const formSection = document.getElementById('registration-form');
                formSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Đăng ký tư vấn ngay
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default CareerOpportunities;