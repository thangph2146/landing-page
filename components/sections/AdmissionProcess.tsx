'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Users, 
  GraduationCap,
  ArrowRight,
  Download,
  Phone,
  Mail,
  MapPin,
  Star,
  Award
} from 'lucide-react';
import ScrollAnimation from '@/components/common/ScrollAnimation';
import { useCountUp } from '@/lib/hooks/useScrollAnimation';

const AdmissionProcess = () => {
  const { ref: applicantsRef, count: totalApplicants } = useCountUp(2500);
  const { ref: acceptanceRef, count: acceptanceRate } = useCountUp(85);
  const { ref: scholarshipRef, count: scholarshipRate } = useCountUp(40);

  const admissionSteps = [
    {
      step: 1,
      title: "Nộp hồ sơ trực tuyến",
      description: "Điền đầy đủ thông tin và nộp hồ sơ qua hệ thống online",
      duration: "5-10 phút",
      requirements: [
        'Bằng tốt nghiệp THPT hoặc tương đương',
        'Bảng điểm THPT (bản chính hoặc bản sao công chứng)',
        'Chứng chỉ tiếng Anh (nếu có)',
        'Giấy khai sinh',
        'Ảnh 3x4 (4 tấm)'
      ],
      icon: <FileText className="w-6 h-6" />,
      color: "bg-blue-500",
      status: "active"
    },
    {
      step: 2,
      title: "Xét tuyển hồ sơ",
      description: "Trường xem xét hồ sơ và thông báo kết quả sơ bộ",
      duration: "3-5 ngày làm việc",
      requirements: [
        'Điểm trung bình THPT từ 6.5 trở lên',
        'Ưu tiên thí sinh có điểm Toán, Văn, Anh cao',
        'Xem xét hoạt động ngoại khóa',
        'Chứng chỉ, giải thưởng (nếu có)'
      ],
      icon: <CheckCircle className="w-6 h-6" />,
      color: "bg-green-500",
      status: "pending"
    },
    {
      step: 3,
      title: "Phỏng vấn trực tiếp",
      description: "Phỏng vấn với ban tuyển sinh để đánh giá năng lực",
      duration: "30-45 phút",
      requirements: [
        'Kiến thức cơ bản về Toán, Tiếng Anh',
        'Khả năng giao tiếp và tư duy logic',
        'Động cơ học tập và định hướng nghề nghiệp',
        'Kỹ năng thuyết trình (nếu có)'
      ],
      icon: <Users className="w-6 h-6" />,
      color: "bg-orange-500",
      status: "upcoming"
    },
    {
      step: 4,
      title: "Công bố kết quả",
      description: "Thông báo kết quả trúng tuyển và hướng dẫn nhập học",
      duration: "2-3 ngày sau phỏng vấn",
      requirements: [
        'Nhận thông báo qua email/SMS',
        'Xác nhận nhập học trong 7 ngày',
        'Nộp học phí và hoàn thiện thủ tục',
        'Tham gia định hướng tân sinh viên'
      ],
      icon: <GraduationCap className="w-6 h-6" />,
      color: "bg-purple-500",
      status: "future"
    }
  ];

  const admissionMethods = [
    {
      method: 'Xét tuyển học bạ',
      description: 'Xét tuyển dựa trên điểm trung bình học bạ THPT',
      requirements: 'Điểm TB ≥ 6.5, ưu tiên Toán, Văn, Anh',
      quota: '60%',
      deadline: '30/08/2024',
      icon: <FileText className='w-5 h-5' />,
      popular: true
    },
    {
      method: 'Xét tuyển kết hợp',
      description: 'Kết hợp điểm học bạ và chứng chỉ tiếng Anh',
      requirements: 'Điểm TB ≥ 6.0 + IELTS ≥ 5.5 hoặc TOEIC ≥ 550',
      quota: '25%',
      deadline: '15/09/2024',
      icon: <Award className='w-5 h-5' />,
      popular: false
    },
    {
      method: 'Xét tuyển tài năng',
      description: 'Dành cho thí sinh có thành tích đặc biệt',
      requirements: 'Giải thưởng học sinh giỏi, Olympic, cuộc thi quốc gia',
      quota: '10%',
      deadline: '31/07/2024',
      icon: <Star className='w-5 h-5' />,
      popular: false
    },
    {
      method: 'Xét tuyển riêng',
      description: 'Thi riêng của trường với đề thi tự soạn',
      requirements: 'Thi 3 môn: Toán, Văn, Anh (thang điểm 10)',
      quota: '5%',
      deadline: '20/09/2024',
      icon: <CheckCircle className='w-5 h-5' />,
      popular: false
    }
  ];

  const importantDates = [
    {
      date: '15/06 - 30/08',
      event: 'Đăng ký xét tuyển học bạ',
      status: 'active',
      description: 'Thời gian nộp hồ sơ xét tuyển học bạ THPT'
    },
    {
      date: '01/09 - 15/09',
      event: 'Phỏng vấn trực tiếp',
      status: 'upcoming',
      description: 'Lịch phỏng vấn cho các thí sinh đạt yêu cầu'
    },
    {
      date: '20/09',
      event: 'Công bố kết quả',
      status: 'future',
      description: 'Thông báo danh sách trúng tuyển chính thức'
    },
    {
      date: '25/09 - 05/10',
      event: 'Xác nhận nhập học',
      status: 'future',
      description: 'Thời gian xác nhận nhập học và nộp học phí'
    },
    {
      date: '15/10',
      event: 'Khai giảng năm học',
      status: 'future',
      description: 'Lễ khai giảng và định hướng tân sinh viên'
    }
  ];

  const scholarshipPrograms = [
    {
      name: 'Học bổng Xuất sắc',
      amount: '100% học phí',
      criteria: 'Điểm TB ≥ 9.0 và có thành tích đặc biệt',
      quantity: '5 suất',
      color: "bg-yellow-500"
    },
    {
      name: 'Học bổng Khuyến khích',
      amount: '50% học phí',
      criteria: 'Điểm TB ≥ 8.5 hoặc có chứng chỉ tiếng Anh cao',
      quantity: '15 suất',
      color: "bg-blue-500"
    },
    {
      name: 'Học bổng Hỗ trợ',
      amount: '30% học phí',
      criteria: 'Hoàn cảnh khó khăn, học lực khá trở lên',
      quantity: '25 suất',
      color: "bg-green-500"
    },
    {
      name: 'Học bổng Tài năng',
      amount: '70% học phí',
      criteria: 'Giải thưởng Olympic, cuộc thi quốc gia',
      quantity: '8 suất',
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              Tuyển sinh 2024
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quy trình tuyển sinh
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Quy trình tuyển sinh minh bạch, công bằng với nhiều phương thức xét tuyển 
              phù hợp với từng đối tượng thí sinh
            </p>
          </div>
        </ScrollAnimation>

        {/* Admission Statistics */}
        <ScrollAnimation animation="slideUp" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div ref={applicantsRef} className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                {totalApplicants}+
              </div>
              <div className="text-gray-700 font-medium">Thí sinh đăng ký</div>
              <div className="text-sm text-gray-600 mt-1">Năm 2023</div>
            </div>
            <div ref={acceptanceRef} className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                {acceptanceRate}%
              </div>
              <div className="text-gray-700 font-medium">Tỷ lệ trúng tuyển</div>
              <div className="text-sm text-gray-600 mt-1">Cao nhất khối kinh tế</div>
            </div>
            <div ref={scholarshipRef} className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                {scholarshipRate}%
              </div>
              <div className="text-gray-700 font-medium">Nhận học bổng</div>
              <div className="text-sm text-gray-600 mt-1">Các loại học bổng</div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Admission Steps */}
        <ScrollAnimation animation="slideUp" delay={400}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              4 bước đơn giản để trở thành sinh viên CLC
            </h3>
            <div className="space-y-8">
              {admissionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`flex items-start gap-6 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                    <div className="flex-1">
                      <Card className="h-full hover:shadow-xl transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                              {step.step}
                            </div>
                            <div className="flex-1">
                              <CardTitle className="text-xl">{step.title}</CardTitle>
                              <div className="flex items-center gap-2 mt-1">
                                <Clock className="w-4 h-4 text-gray-500" />
                                <span className="text-sm text-gray-600">{step.duration}</span>
                              </div>
                            </div>
                            <div className={`w-12 h-12 ${step.color} rounded-lg flex items-center justify-center text-white`}>
                              {step.icon}
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </CardHeader>
                        <CardContent>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Yêu cầu cần thiết:</h4>
                            <ul className="space-y-2">
                              {step.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-gray-700">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    
                    {/* Progress Line */}
                    {index < admissionSteps.length - 1 && (
                      <div className="hidden md:flex flex-col items-center">
                        <div className={`w-1 h-20 ${step.color} opacity-30`}></div>
                        <ArrowRight className="w-6 h-6 text-gray-400 transform rotate-90" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Admission Methods */}
        <ScrollAnimation animation="slideUp" delay={600}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Phương thức xét tuyển
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {admissionMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`h-full hover:shadow-lg transition-shadow duration-300 ${method.popular ? 'ring-2 ring-blue-500' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <div className='flex items-center gap-3'>
                          <div className='w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600'>
                            {method.icon}
                          </div>
                          <CardTitle className='text-lg'>{method.method}</CardTitle>
                        </div>
                        {method.popular && (
                          <Badge className='bg-blue-500 text-white'>
                            Phổ biến
                          </Badge>
                        )}
                      </div>
                      <p className='text-gray-600 text-sm leading-relaxed'>{method.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className='space-y-3'>
                        <div>
                          <div className='text-sm text-gray-500 mb-1'>Yêu cầu</div>
                          <div className='text-sm text-gray-700'>{method.requirements}</div>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                          <div>
                            <div className='text-sm text-gray-500'>Chỉ tiêu</div>
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            <div className='font-semibold text-blue-600'>{method.quota}</div>
                          </div>
                          <div>
                            <div className='text-sm text-gray-500'>Han nop</div>
                            <div className='font-semibold text-red-600'>{method.deadline}</div>
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

        {/* Important Dates Timeline */}
        <ScrollAnimation animation="slideUp" delay={800}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Lịch trình quan trọng
            </h3>
            <div className="max-w-4xl mx-auto">
              {importantDates.map((date, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-6 mb-8 last:mb-0"
                >
                  <div className={`w-4 h-4 rounded-full flex-shrink-0 ${
                    date.status === 'active' ? 'bg-green-500' :
                    date.status === 'upcoming' ? 'bg-blue-500' : 'bg-gray-300'
                  }`}></div>
                  <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{date.event}</h4>
                      <Badge variant={date.status === 'active' ? 'default' : 'outline'}>
                        {date.date}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600">{date.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Scholarship Programs */}
        <ScrollAnimation animation="slideUp" delay={1000}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Chương trình học bổng
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {scholarshipPrograms.map((scholarship, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className={`w-16 h-16 ${scholarship.color} rounded-full mx-auto mb-4 flex items-center justify-center text-white`}>
                        <Award className="w-8 h-8" />
                      </div>
                      <CardTitle className="text-lg">{scholarship.name}</CardTitle>
                      <div className="text-2xl font-bold text-blue-600">{scholarship.amount}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 mb-4">{scholarship.criteria}</p>
                      <Badge variant="outline" className="text-xs">
                        {scholarship.quantity}
                      </Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>

        {/* Contact and Support */}
        <ScrollAnimation animation="slideUp" delay={1200}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">
              Cần hỗ trợ tư vấn tuyển sinh?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Đội ngũ tư vấn viên sẵn sàng hỗ trợ bạn 24/7
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" />
                <span>0123 456 789</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Mail className="w-5 h-5" />
                <span>tuyensinh@university.edu.vn</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Phòng 101, Tòa A</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
                onClick={() => {
                  const formSection = document.getElementById('registration-form');
                  formSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Đăng ký tư vấn
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold"
              >
                Tải brochure
                <Download className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default AdmissionProcess;