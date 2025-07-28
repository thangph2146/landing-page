'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Clock, 
  BookOpen, 
  Globe, 
  Award, 
  Users, 
  TrendingUp,
} from 'lucide-react';
import ScrollAnimation from '@/components/common/ScrollAnimation';
import { useCountUp } from '@/lib/hooks/useScrollAnimation';

const ProgramOverview = () => {
  const { ref: studentsRef, count: studentsCount } = useCountUp(2500);
  const { ref: employmentRef, count: employmentRate } = useCountUp(95);
  const { ref: partnersRef, count: partnersCount } = useCountUp(150);
  const { ref: yearsRef, count: yearsCount } = useCountUp(15);

  const programHighlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Chất lượng cao (CLC)",
      description: "Chương trình đào tạo theo tiêu chuẩn quốc tế với chất lượng cao",
      color: "bg-blue-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Tiếng Anh bán phần",
      description: "50% môn học được giảng dạy bằng tiếng Anh",
      color: "bg-green-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Thực hành thực tế",
      description: "Kết hợp lý thuyết với thực hành tại doanh nghiệp",
      color: "bg-orange-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Kết nối quốc tế",
      description: "Cơ hội trao đổi và học tập tại các trường đối tác",
      color: "bg-purple-500"
    }
  ];

  const curriculumStructure = [
    {
      category: "Kiến thức cơ bản",
      percentage: 25,
      subjects: ["Toán cao cấp", "Triết học", "Pháp luật đại cương", "Ngoại ngữ"],
      color: "bg-blue-500"
    },
    {
      category: "Kiến thức chuyên ngành cơ sở",
      percentage: 30,
      subjects: ["Kinh tế học", "Quản trị học", "Kế toán", "Thống kê"],
      color: "bg-green-500"
    },
    {
      category: "Kiến thức chuyên ngành",
      percentage: 35,
      subjects: ["Tài chính doanh nghiệp", "Ngân hàng", "Bảo hiểm", "Đầu tư"],
      color: "bg-orange-500"
    },
    {
      category: "Thực tập & Đồ án",
      percentage: 10,
      subjects: ["Thực tập doanh nghiệp", "Đồ án tốt nghiệp", "Seminar"],
      color: "bg-purple-500"
    }
  ];

  const timeline = [
    {
      year: "Năm 1",
      title: "Nền tảng cơ bản",
      description: "Xây dựng kiến thức nền tảng về toán học, kinh tế và ngoại ngữ",
      subjects: ["Toán cao cấp", "Kinh tế vi mô", "Tiếng Anh"]
    },
    {
      year: "Năm 2",
      title: "Kiến thức chuyên ngành cơ sở",
      description: "Học các môn chuyên ngành cơ sở về tài chính và ngân hàng",
      subjects: ["Tài chính tiền tệ", "Ngân hàng thương mại", "Kế toán"]
    },
    {
      year: "Năm 3",
      title: "Chuyên sâu & Thực hành",
      description: "Chuyên sâu kiến thức và bắt đầu thực hành tại doanh nghiệp",
      subjects: ["Đầu tư chứng khoán", "Quản trị rủi ro", "Thực tập"]
    },
    {
      year: "Năm 4",
      title: "Hoàn thiện & Tốt nghiệp",
      description: "Hoàn thiện kiến thức và thực hiện đồ án tốt nghiệp",
      subjects: ["Tài chính quốc tế", "Đồ án tốt nghiệp", "Seminar"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Chương trình đào tạo
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tài chính - Ngân hàng CLC
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Chương trình đào tạo chất lượng cao với 50% môn học bằng tiếng Anh, 
              kết hợp lý thuyết và thực hành, chuẩn bị sinh viên cho sự nghiệp thành công
            </p>
          </div>
        </ScrollAnimation>

        {/* Statistics */}
        <ScrollAnimation animation="slideUp" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div ref={studentsRef} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {studentsCount.toLocaleString()}+
              </div>
              <div className="text-gray-600 font-medium">Sinh viên đã tốt nghiệp</div>
            </div>
            <div ref={employmentRef} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                {employmentRate}%
              </div>
              <div className="text-gray-600 font-medium">Tỷ lệ có việc làm</div>
            </div>
            <div ref={partnersRef} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                {partnersCount}+
              </div>
              <div className="text-gray-600 font-medium">Đối tác doanh nghiệp</div>
            </div>
            <div ref={yearsRef} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
                {yearsCount}+
              </div>
              <div className="text-gray-600 font-medium">Năm kinh nghiệm</div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Program Highlights */}
        <ScrollAnimation animation="slideUp" delay={400}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Điểm nổi bật của chương trình
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {programHighlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 ${highlight.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                        {highlight.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Curriculum Structure */}
        <ScrollAnimation animation="slideUp" delay={600}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cấu trúc chương trình học
            </h3>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {curriculumStructure.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-6 rounded-xl shadow-sm border"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.category}
                      </h4>
                      <Badge variant="secondary">{item.percentage}%</Badge>
                    </div>
                    <Progress value={item.percentage} className="mb-3" />
                    <div className="flex flex-wrap gap-2">
                      {item.subjects.map((subject, subIndex) => (
                        <Badge key={subIndex} variant="outline" className="text-xs">
                          {subject}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Thông tin chương trình
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Thời gian đào tạo</div>
                      <div className="text-gray-600">4 năm (8 học kỳ)</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Bằng cấp</div>
                      <div className="text-gray-600">Cử nhân Tài chính - Ngân hàng</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Globe className="w-5 h-5 text-orange-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Ngôn ngữ giảng dạy</div>
                      <div className="text-gray-600">Tiếng Việt & Tiếng Anh</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-purple-600 mr-3" />
                    <div>
                      <div className="font-semibold text-gray-900">Quy mô lớp</div>
                      <div className="text-gray-600">25-30 sinh viên/lớp</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Learning Timeline */}
        <ScrollAnimation animation="slideUp" delay={800}>
          <div>
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Lộ trình học tập 4 năm
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
              
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                      <Card className="hover:shadow-lg transition-shadow duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                              {index + 1}
                            </div>
                            <div>
                              <Badge variant="outline">{item.year}</Badge>
                              <CardTitle className="text-lg mt-1">{item.title}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{item.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {item.subjects.map((subject, subIndex) => (
                              <Badge key={subIndex} variant="secondary" className="text-xs">
                                {subject}
                              </Badge>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10">
                      <div className="w-6 h-6 bg-white border-4 border-blue-500 rounded-full" />
                    </div>
                    
                    <div className="w-1/2" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default ProgramOverview;