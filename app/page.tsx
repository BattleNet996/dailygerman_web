"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  Brain,
  TrendingUp,
  Smartphone,
  Users,
  Globe,
  Mail,
  Github,
  Linkedin,
  Download,
  Languages,
  Clock,
  Award,
  BarChart3,
  Zap,
  Heart,
  MessageCircle,
} from "lucide-react"

const translations = {
  zh: {
    title: "天天学德语",
    subtitle: "智能德语单词学习助手",
    description: "采用科学记忆算法，让德语学习更高效、更有趣",
    startLearning: "开始学习",
    downloadApp: "下载应用",
    features: "核心功能",
    about: "关于应用",
    developer: "开发者",
    contact: "联系方式",

    // Features
    feature1Title: "智能闪卡",
    feature1Desc: "基于艾宾浩斯遗忘曲线的智能复习系统",
    feature2Title: "个性化学习",
    feature2Desc: "根据学习进度提供定制化学习建议",
    feature3Title: "进度统计",
    feature3Desc: "详细的学习数据分析和可视化图表",
    feature4Title: "分类学习",
    feature4Desc: "按主题分类，涵盖日常生活各个场景",
    feature5Title: "成就系统",
    feature5Desc: "学习里程碑和成就徽章激励持续学习",
    feature6Title: "离线学习",
    feature6Desc: "支持离线模式，随时随地学习德语",

    // About
    aboutTitle: "关于天天学德语",
    aboutDesc:
      "天天学德语是一款专为中文用户设计的德语学习应用，采用现代化的UI设计和科学的记忆算法。应用包含精选的德语A2级别词汇，涵盖日常生活的各个主题，帮助用户系统性地掌握德语基础词汇。",

    // Stats
    vocabulary: "精选词汇",
    categories: "学习分类",
    users: "活跃用户",

    // Download
    downloadTitle: "立即下载",
    downloadDesc: "选择适合您的平台开始学习德语",
    wechatMini: "微信小程序",
    iosApp: "iOS 应用",
    scanQR: "扫描二维码",
    appStore: "App Store",

    // Developer
    developerTitle: "开发者介绍",
    developerName: "毕之爱吃鱼",
    developerDesc: "热爱编程和语言学习的开发者，致力于创造优质的学习工具，帮助更多人掌握外语技能。",

    // Footer
    footerDesc: "让德语学习变得简单有趣",
    privacy: "隐私政策",
    terms: "使用条款",
    support: "技术支持",
  },
  en: {
    title: "Daily German Learning",
    subtitle: "Smart German Vocabulary Learning Assistant",
    description: "Using scientific memory algorithms to make German learning more efficient and enjoyable",
    startLearning: "Start Learning",
    downloadApp: "Download App",
    features: "Key Features",
    about: "About App",
    developer: "Developer",
    contact: "Contact",

    // Features
    feature1Title: "Smart Flashcards",
    feature1Desc: "Intelligent review system based on Ebbinghaus forgetting curve",
    feature2Title: "Personalized Learning",
    feature2Desc: "Customized learning suggestions based on your progress",
    feature3Title: "Progress Statistics",
    feature3Desc: "Detailed learning data analysis and visualization charts",
    feature4Title: "Categorized Learning",
    feature4Desc: "Organized by topics covering various daily life scenarios",
    feature5Title: "Achievement System",
    feature5Desc: "Learning milestones and achievement badges for motivation",
    feature6Title: "Offline Learning",
    feature6Desc: "Support offline mode, learn German anytime, anywhere",

    // About
    aboutTitle: "About Daily German Learning",
    aboutDesc:
      "Daily German Learning is a German learning app designed specifically for Chinese users, featuring modern UI design and scientific memory algorithms. The app contains carefully selected German A2 level vocabulary covering various daily life topics, helping users systematically master basic German vocabulary.",

    // Stats
    vocabulary: "Curated Words",
    categories: "Learning Categories",
    users: "Active Users",

    // Download
    downloadTitle: "Download Now",
    downloadDesc: "Choose your platform to start learning German",
    wechatMini: "WeChat Mini Program",
    iosApp: "iOS App",
    scanQR: "Scan QR Code",
    appStore: "App Store",

    // Developer
    developerTitle: "About Developer",
    developerName: "毕之爱吃鱼 (Charles)",
    developerDesc:
      "A developer passionate about programming and language learning, dedicated to creating quality learning tools to help more people master foreign language skills.",

    // Footer
    footerDesc: "Making German learning simple and fun",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    support: "Technical Support",
  },
}

export default function HomePage() {
  const [lang, setLang] = useState<"zh" | "en">("zh")
  const t = translations[lang]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-50 to-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
              {t.title}
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-gray-600 hover:text-pink-500 transition-colors">
              {t.features}
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">
              {t.about}
            </Link>
            <Link href="#download" className="text-gray-600 hover:text-pink-500 transition-colors">
              {t.downloadApp}
            </Link>
            <Link href="#developer" className="text-gray-600 hover:text-pink-500 transition-colors">
              {t.developer}
            </Link>
          </nav>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setLang(lang === "zh" ? "en" : "zh")}
            className="border-pink-200 hover:bg-pink-50"
          >
            <Languages className="w-4 h-4 mr-2" />
            {lang === "zh" ? "EN" : "中文"}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/logo.png"
              alt="天天学德语 Logo"
              width={200}
              height={200}
              className="drop-shadow-2xl animate-pulse"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {t.title}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">{t.subtitle}</p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">{t.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-3 text-lg"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              {t.startLearning}
            </Button>
            <Button variant="outline" size="lg" className="border-pink-200 hover:bg-pink-50 px-8 py-3 text-lg">
              <Download className="w-5 h-5 mr-2" />
              {t.downloadApp}
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-500 mb-2">50+</div>
              <div className="text-gray-600">{t.vocabulary}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">10+</div>
              <div className="text-gray-600">{t.categories}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">1000+</div>
              <div className="text-gray-600">{t.users}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">{t.features}</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-pink-100 hover:border-pink-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{t.feature1Title}</h3>
                <p className="text-gray-600">{t.feature1Desc}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-blue-100 hover:border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{t.feature2Title}</h3>
                <p className="text-gray-600">{t.feature2Desc}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-purple-100 hover:border-purple-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{t.feature3Title}</h3>
                <p className="text-gray-600">{t.feature3Desc}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-yellow-100 hover:border-yellow-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{t.feature4Title}</h3>
                <p className="text-gray-600">{t.feature4Desc}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{t.feature5Title}</h3>
                <p className="text-gray-600">{t.feature5Desc}</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-indigo-100 hover:border-indigo-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{t.feature6Title}</h3>
                <p className="text-gray-600">{t.feature6Desc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">{t.aboutTitle}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">{t.aboutDesc}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-2xl">
                <Clock className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">科学算法</h3>
                <p className="text-gray-600">基于艾宾浩斯遗忘曲线的智能复习系统</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl">
                <Heart className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">用户体验</h3>
                <p className="text-gray-600">现代化UI设计，流畅的交互体验</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl">
                <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800">学习效果</h3>
                <p className="text-gray-600">个性化学习路径，提高学习效率</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">{t.downloadTitle}</h2>
          <p className="text-xl mb-12 opacity-90">{t.downloadDesc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t.wechatMini}</h3>
                <p className="mb-6 opacity-90">{t.scanQR}</p>
                <div className="w-48 h-48 bg-white rounded-lg mx-auto mb-4 p-4 flex items-center justify-center">
                  <Image src="/qrcode.jpg" alt="微信小程序二维码" width={180} height={180} className="rounded-lg" />
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  微信扫码
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{t.iosApp}</h3>
                <p className="mb-6 opacity-90">{t.appStore}</p>
                <Button className="bg-white text-purple-600 hover:bg-gray-100 mb-4">
                  <Download className="w-5 h-5 mr-2" />
                  App Store
                </Button>
                <div>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    即将上线
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section id="developer" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-gray-800">{t.developerTitle}</h2>

            <Card className="p-8 border-pink-100">
              <CardContent className="text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-gradient-to-br from-pink-400 to-blue-400">
                  <Image
                    src="/avatar.jpg"
                    alt="毕之爱吃鱼"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{t.developerName}</h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t.developerDesc}</p>

                <div className="flex justify-center gap-4">
                  <Button variant="outline" size="sm" className="border-pink-200 hover:bg-pink-50" asChild>
                    <Link href="mailto:charleschen01@foxmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      charleschen01@foxmail.com
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="border-blue-200 hover:bg-blue-50" asChild>
                    <Link href="https://www.linkedin.com/in/charleschenthu/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" className="border-gray-200 hover:bg-gray-50">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image src="/logo.png" alt="Logo" width={32} height={32} className="rounded" />
                <span className="text-xl font-bold">{t.title}</span>
              </div>
              <p className="text-gray-400 mb-4">{t.footerDesc}</p>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" asChild>
                  <Link href="mailto:charleschen01@foxmail.com">
                    <Mail className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Github className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white" asChild>
                  <Link href="https://www.linkedin.com/in/charleschenthu/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">产品</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#features" className="hover:text-white transition-colors">
                    {t.features}
                  </Link>
                </li>
                <li>
                  <Link href="#download" className="hover:text-white transition-colors">
                    {t.downloadApp}
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white transition-colors">
                    {t.about}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">支持</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t.privacy}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t.terms}
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    {t.support}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 {t.title}. All rights reserved. | 开发者：毕之爱吃鱼</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
