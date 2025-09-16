"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, FileText, User, GraduationCap, MessageSquare } from "lucide-react"
import Navbar from "@/components/navbar"

export default function SubmitInfoPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    nationalId: "",
    birthDate: "",
    gender: "",
    fieldOfStudy: "",
    educationLevel: "",
    universityName: "",
    city: "",
    description: "",
    securityCode: "",
  })

  const [files, setFiles] = useState({
    educationalDocs: null as File | null,
    passport: null as File | null,
    languageCert: null as File | null,
    resume: null as File | null,
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleFileChange = (field: string, file: File | null) => {
    setFiles((prev) => ({ ...prev, [field]: file }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData, files)
    // Handle form submission here
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 font-fanavari-bold">ثبت اطلاعات آنلاین</h1>
          <p className="text-gray-600 font-ibm-plex-arabic-regular">فرم زیر را تکمیل کرده و برای ما ارسال کنید</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg font-ibm-plex-arabic-medium">
                <User className="w-5 h-5 text-orange-500" />
                اطلاعات شخصی
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="font-ibm-plex-arabic-medium">
                    نام و نام خانوادگی
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    className="font-ibm-plex-arabic-regular"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nationalId" className="font-ibm-plex-arabic-medium">
                    کد ملی
                  </Label>
                  <Input
                    id="nationalId"
                    value={formData.nationalId}
                    onChange={(e) => handleInputChange("nationalId", e.target.value)}
                    className="font-ibm-plex-arabic-regular"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="birthDate" className="font-ibm-plex-arabic-medium">
                    تاریخ تولد
                  </Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate}
                    onChange={(e) => handleInputChange("birthDate", e.target.value)}
                    className="font-ibm-plex-arabic-regular"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender" className="font-ibm-plex-arabic-medium">
                    جنسیت
                  </Label>
                  <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                    <SelectTrigger className="font-ibm-plex-arabic-regular">
                      <SelectValue placeholder="انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male" className="font-ibm-plex-arabic-regular">
                        مرد
                      </SelectItem>
                      <SelectItem value="female" className="font-ibm-plex-arabic-regular">
                        زن
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education Information Section */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg font-ibm-plex-arabic-medium">
                <GraduationCap className="w-5 h-5 text-orange-500" />
                نوع تحصیلات
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fieldOfStudy" className="font-ibm-plex-arabic-medium">
                    رشته تحصیلی
                  </Label>
                  <Input
                    id="fieldOfStudy"
                    value={formData.fieldOfStudy}
                    onChange={(e) => handleInputChange("fieldOfStudy", e.target.value)}
                    className="font-ibm-plex-arabic-regular"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="educationLevel" className="font-ibm-plex-arabic-medium">
                    مقطع تحصیلی
                  </Label>
                  <Select
                    value={formData.educationLevel}
                    onValueChange={(value) => handleInputChange("educationLevel", value)}
                  >
                    <SelectTrigger className="font-ibm-plex-arabic-regular">
                      <SelectValue placeholder="انتخاب کنید" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelor" className="font-ibm-plex-arabic-regular">
                        کارشناسی
                      </SelectItem>
                      <SelectItem value="master" className="font-ibm-plex-arabic-regular">
                        کارشناسی ارشد
                      </SelectItem>
                      <SelectItem value="phd" className="font-ibm-plex-arabic-regular">
                        دکتری
                      </SelectItem>
                      <SelectItem value="diploma" className="font-ibm-plex-arabic-regular">
                        دیپلم
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="universityName" className="font-ibm-plex-arabic-medium">
                    نام دانشگاه
                  </Label>
                  <Input
                    id="universityName"
                    value={formData.universityName}
                    onChange={(e) => handleInputChange("universityName", e.target.value)}
                    className="font-ibm-plex-arabic-regular"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city" className="font-ibm-plex-arabic-medium">
                    شهر
                  </Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className="font-ibm-plex-arabic-regular"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* File Upload Section */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg font-ibm-plex-arabic-medium">
                <Upload className="w-5 h-5 text-orange-500" />
                بارگذاری
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {/* Educational Documents Upload */}
                <div className="space-y-2">
                  <Label className="font-ibm-plex-arabic-medium">مدارک تحصیلی</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                    <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 font-ibm-plex-arabic-light mb-2">فایل خود را انتخاب کنید</p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange("educationalDocs", e.target.files?.[0] || null)}
                      className="hidden"
                      id="educationalDocs"
                    />
                    <Label
                      htmlFor="educationalDocs"
                      className="cursor-pointer text-orange-500 hover:text-orange-600 font-ibm-plex-arabic-medium"
                    >
                      انتخاب فایل
                    </Label>
                    {files.educationalDocs && (
                      <p className="text-xs text-green-600 mt-1 font-ibm-plex-arabic-light">
                        {files.educationalDocs.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Passport Upload */}
                <div className="space-y-2">
                  <Label className="font-ibm-plex-arabic-medium">گذرنامه</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                    <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 font-ibm-plex-arabic-light mb-2">فایل خود را انتخاب کنید</p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange("passport", e.target.files?.[0] || null)}
                      className="hidden"
                      id="passport"
                    />
                    <Label
                      htmlFor="passport"
                      className="cursor-pointer text-orange-500 hover:text-orange-600 font-ibm-plex-arabic-medium"
                    >
                      انتخاب فایل
                    </Label>
                    {files.passport && (
                      <p className="text-xs text-green-600 mt-1 font-ibm-plex-arabic-light">{files.passport.name}</p>
                    )}
                  </div>
                </div>

                {/* Language Certificate Upload */}
                <div className="space-y-2">
                  <Label className="font-ibm-plex-arabic-medium">مدرک زبان</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                    <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 font-ibm-plex-arabic-light mb-2">فایل خود را انتخاب کنید</p>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={(e) => handleFileChange("languageCert", e.target.files?.[0] || null)}
                      className="hidden"
                      id="languageCert"
                    />
                    <Label
                      htmlFor="languageCert"
                      className="cursor-pointer text-orange-500 hover:text-orange-600 font-ibm-plex-arabic-medium"
                    >
                      انتخاب فایل
                    </Label>
                    {files.languageCert && (
                      <p className="text-xs text-green-600 mt-1 font-ibm-plex-arabic-light">
                        {files.languageCert.name}
                      </p>
                    )}
                  </div>
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <Label className="font-ibm-plex-arabic-medium">رزومه</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-orange-400 transition-colors">
                    <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-600 font-ibm-plex-arabic-light mb-2">فایل خود را انتخاب کنید</p>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange("resume", e.target.files?.[0] || null)}
                      className="hidden"
                      id="resume"
                    />
                    <Label
                      htmlFor="resume"
                      className="cursor-pointer text-orange-500 hover:text-orange-600 font-ibm-plex-arabic-medium"
                    >
                      انتخاب فایل
                    </Label>
                    {files.resume && (
                      <p className="text-xs text-green-600 mt-1 font-ibm-plex-arabic-light">{files.resume.name}</p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information Section */}
          <Card className="shadow-sm">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-lg font-ibm-plex-arabic-medium">
                <MessageSquare className="w-5 h-5 text-orange-500" />
                توضیحات تکمیلی
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="description" className="font-ibm-plex-arabic-medium">
                  توضیح مورد نظر
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="توضیحات اضافی خود را اینجا بنویسید..."
                  className="min-h-[100px] font-ibm-plex-arabic-regular"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="securityCode" className="font-ibm-plex-arabic-medium">
                    کد امنیتی
                  </Label>
                  <Input
                    id="securityCode"
                    value={formData.securityCode}
                    onChange={(e) => handleInputChange("securityCode", e.target.value)}
                    placeholder="کد امنیتی را وارد کنید"
                    className="font-ibm-plex-arabic-regular"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              type="submit"
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 px-12 py-3 text-lg font-fanavari-bold"
            >
              ارسال اطلاعات
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
