'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Calendar,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Gift,
  Star,
  Users,
  Clock
} from 'lucide-react';
import ScrollAnimation from '@/components/common/ScrollAnimation';

// Validation schema
const registrationSchema = z.object({
  fullName: z.string().min(2, 'Họ tên phải có ít nhất 2 ký tự'),
  email: z.string().email('Email không hợp lệ'),
  phone: z.string().regex(/^[0-9]{10,11}$/, 'Số điện thoại phải có 10-11 chữ số'),
  address: z.string().min(5, 'Địa chỉ phải có ít nhất 5 ký tự'),
  school: z.string().min(2, 'Tên trường phải có ít nhất 2 ký tự'),
  graduationYear: z.string().regex(/^20[0-9]{2}$/, 'Năm tốt nghiệp không hợp lệ'),
  gpa: z.string().optional(),
  interests: z.string().optional(),
  consultationType: z.enum(['program', 'admission', 'scholarship', 'career', 'other']),
  preferredTime: z.enum(['morning', 'afternoon', 'evening', 'weekend']),
  notes: z.string().optional()
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      consultationType: 'program',
      preferredTime: 'afternoon'
    }
  });

  const consultationType = watch('consultationType');

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send data to your backend
      console.log('Form data:', data);
      
      setIsSubmitted(true);
      reset();
    } catch (error) {
      setSubmitError('Có lỗi xảy ra khi gửi form. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const consultationTypes = [
    {
      value: 'program',
      label: 'Tư vấn chương trình học',
      description: 'Tìm hiểu về nội dung, cấu trúc chương trình CLC',
      icon: <GraduationCap className="w-5 h-5" />
    },
    {
      value: 'admission',
      label: 'Tư vấn tuyển sinh',
      description: 'Hướng dẫn quy trình, thủ tục xét tuyển',
      icon: <Users className="w-5 h-5" />
    },
    {
      value: 'scholarship',
      label: 'Tư vấn học bổng',
      description: 'Thông tin về các loại học bổng và điều kiện',
      icon: <Gift className="w-5 h-5" />
    },
    {
      value: 'career',
      label: 'Tư vấn nghề nghiệp',
      description: 'Cơ hội việc làm sau tốt nghiệp',
      icon: <Star className="w-5 h-5" />
    },
    {
      value: 'other',
      label: 'Khác',
      description: 'Các vấn đề khác cần tư vấn',
      icon: <AlertCircle className="w-5 h-5" />
    }
  ];

  const timeSlots = [
    { value: 'morning', label: 'Buổi sáng (8:00 - 12:00)', icon: <Clock className="w-4 h-4" /> },
    { value: 'afternoon', label: 'Buổi chiều (13:00 - 17:00)', icon: <Clock className="w-4 h-4" /> },
    { value: 'evening', label: 'Buổi tối (18:00 - 21:00)', icon: <Clock className="w-4 h-4" /> },
    { value: 'weekend', label: 'Cuối tuần', icon: <Calendar className="w-4 h-4" /> }
  ];

  const benefits = [
    {
      title: "Tư vấn 1-1 miễn phí",
      description: "Được tư vấn trực tiếp với chuyên viên giàu kinh nghiệm",
      icon: <Users className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Tài liệu chi tiết",
      description: "Nhận brochure và tài liệu hướng dẫn đầy đủ",
      icon: <GraduationCap className="w-6 h-6 text-green-500" />
    },
    {
      title: "Hỗ trợ 24/7",
      description: "Đội ngũ hỗ trợ sẵn sàng giải đáp mọi thắc mắc",
      icon: <Clock className="w-6 h-6 text-orange-500" />
    },
    {
      title: "Ưu đãi đặc biệt",
      description: "Giảm phí xét hồ sơ và các ưu đãi khác",
      icon: <Gift className="w-6 h-6 text-purple-500" />
    }
  ];

  if (isSubmitted) {
    return (
      <section id="registration-form" className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Đăng ký thành công!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Cảm ơn bạn đã đăng ký tư vấn. Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ tới.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="font-semibold text-gray-900 mb-2">Bước tiếp theo:</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Kiểm tra email để nhận thông tin chi tiết</li>
                    <li>• Chuẩn bị các câu hỏi bạn muốn tư vấn</li>
                    <li>• Chờ cuộc gọi từ tư vấn viên</li>
                  </ul>
                </div>
                <Button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  Đăng ký thêm
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="registration-form" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <ScrollAnimation animation="slideUp">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Send className="w-4 h-4 mr-2" />
              Đăng ký tư vấn
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nhận tư vấn miễn phí
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Để lại thông tin để được tư vấn chi tiết về chương trình học, 
              quy trình tuyển sinh và cơ hội nghề nghiệp
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Benefits Section */}
            <ScrollAnimation animation="slideLeft" delay={200}>
              <div className="lg:col-span-1">
                <Card className="h-full border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      Quyền lợi khi đăng ký
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-4"
                        >
                          <div className="flex-shrink-0">
                            {benefit.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">
                              {benefit.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {benefit.description}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="mt-8 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white text-center">
                      <h4 className="font-semibold mb-2">Ưu đãi đặc biệt</h4>
                      <p className="text-sm opacity-90">
                        Miễn phí 100% phí xét hồ sơ cho 100 bạn đăng ký đầu tiên
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>

            {/* Registration Form */}
            <ScrollAnimation animation="slideRight" delay={400}>
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center">
                      Thông tin đăng ký
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="fullName" className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Họ và tên *
                          </Label>
                          <Input
                            id="fullName"
                            {...register('fullName')}
                            placeholder="Nguyễn Văn A"
                            className={errors.fullName ? 'border-red-500' : ''}
                          />
                          {errors.fullName && (
                            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="email" className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            {...register('email')}
                            placeholder="example@email.com"
                            className={errors.email ? 'border-red-500' : ''}
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="flex items-center gap-2">
                            <Phone className="w-4 h-4" />
                            Số điện thoại *
                          </Label>
                          <Input
                            id="phone"
                            {...register('phone')}
                            placeholder="0123456789"
                            className={errors.phone ? 'border-red-500' : ''}
                          />
                          {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="address" className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            Địa chỉ *
                          </Label>
                          <Input
                            id="address"
                            {...register('address')}
                            placeholder="Thành phố, Tỉnh"
                            className={errors.address ? 'border-red-500' : ''}
                          />
                          {errors.address && (
                            <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
                          )}
                        </div>
                      </div>

                      {/* Academic Information */}
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="school" className="flex items-center gap-2">
                            <GraduationCap className="w-4 h-4" />
                            Trường THPT *
                          </Label>
                          <Input
                            id="school"
                            {...register('school')}
                            placeholder="THPT ABC"
                            className={errors.school ? 'border-red-500' : ''}
                          />
                          {errors.school && (
                            <p className="text-red-500 text-sm mt-1">{errors.school.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="graduationYear" className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            Năm tốt nghiệp *
                          </Label>
                          <Input
                            id="graduationYear"
                            {...register('graduationYear')}
                            placeholder="2024"
                            className={errors.graduationYear ? 'border-red-500' : ''}
                          />
                          {errors.graduationYear && (
                            <p className="text-red-500 text-sm mt-1">{errors.graduationYear.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <Label htmlFor="gpa">
                            Điểm TB (nếu có)
                          </Label>
                          <Input
                            id="gpa"
                            {...register('gpa')}
                            placeholder="8.5"
                          />
                        </div>
                      </div>

                      {/* Consultation Type */}
                      <div>
                        <Label className="text-base font-semibold mb-4 block">
                          Loại tư vấn mong muốn *
                        </Label>
                        <div className="grid md:grid-cols-2 gap-3">
                          {consultationTypes.map((type) => (
                            <label
                              key={type.value}
                              className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-all ${
                                consultationType === type.value
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                value={type.value}
                                {...register('consultationType')}
                                className="mt-1"
                              />
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                  {type.icon}
                                  <span className="font-medium">{type.label}</span>
                                </div>
                                <p className="text-sm text-gray-600">{type.description}</p>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Preferred Time */}
                      <div>
                        <Label className="text-base font-semibold mb-4 block">
                          Thời gian mong muốn được tư vấn *
                        </Label>
                        <div className="grid md:grid-cols-2 gap-3">
                          {timeSlots.map((slot) => (
                            <label
                              key={slot.value}
                              className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-all ${
                                watch('preferredTime') === slot.value
                                  ? 'border-blue-500 bg-blue-50'
                                  : 'border-gray-200 hover:border-gray-300'
                              }`}
                            >
                              <input
                                type="radio"
                                value={slot.value}
                                {...register('preferredTime')}
                              />
                              {slot.icon}
                              <span>{slot.label}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div>
                        <Label htmlFor="interests">
                          Lĩnh vực quan tâm (nếu có)
                        </Label>
                        <Input
                          id="interests"
                          {...register('interests')}
                          placeholder="Ngân hàng, Đầu tư, FinTech..."
                        />
                      </div>

                      <div>
                        <Label htmlFor="notes">
                          Ghi chú thêm
                        </Label>
                        <Textarea
                          id="notes"
                          {...register('notes')}
                          placeholder="Các câu hỏi hoặc thông tin bổ sung..."
                          rows={3}
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        {submitError && (
                          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                            <div className="flex items-center gap-2 text-red-700">
                              <AlertCircle className="w-4 h-4" />
                              <span className="text-sm">{submitError}</span>
                            </div>
                          </div>
                        )}
                        
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 text-lg"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                              Đang gửi...
                            </>
                          ) : (
                            <>
                              <Send className="w-5 h-5 mr-2" />
                              Đăng ký tư vấn miễn phí
                            </>
                          )}
                        </Button>
                        
                        <p className="text-xs text-gray-500 text-center mt-3">
                          Bằng cách đăng ký, bạn đồng ý với điều khoản sử dụng và chính sách bảo mật của chúng tôi.
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;