import React, { useState } from 'react';
import { BookOpen, User, FileText, Mail, Phone, MapPin, Download, ExternalLink, Menu, X, Facebook } from 'lucide-react';

// Mock images - replace with your actual imports
// Replace these mock URLs with your actual imports:
import profileImage from '../assets/profile.jpg';
import bookCover from '../assets/book_cover_2025.jpg';
import bookBack from '../assets/book_back_2025.jpg';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [lightboxSrc, setLightboxSrc] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pdfSrc, setPdfSrc] = useState(null);

  const publications = [
    {
      type: 'book',
      title: 'تدريس البلاغة بين القواعد والتصورات: الاستعارة في مجال الأفعال نموذجاً',
      source: 'أبحاث محكمة في البحث اللساني العربي، بنيات ومبادئ وآفاق جديدة',
      publisher: 'دار كنوز المعرفة',
      year: 2024,
      pages: '137-154',
      pdf: '/pdfs/كتب جماعية/منشورة تدريس البلاغة التصورات والقواعد 2024.pdf',
    },
    {
      type: 'book',
      title: 'الهندسة المتوازية وامتداداتها: قراءة في كتاب "اللغة بين ملكات الذهن"',
      source: 'أبحاث محكمة في البحث اللساني العربي',
      publisher: 'دار كنوز المعرفة',
      year: 2024,
      pages: '273-294'
    },
    {
      type: 'book',
      title: 'تصور اللسانيات المعرفية للتعلمات اللغوية: تدريس الإعراب البنيوي والإعراب الدلالي',
      source: 'تقاطعات اللسانيات والتكنولوجيا والعلوم وآفاق تطور البحث اللغوي',
      publisher: 'منشورات كلية الآداب بالرباط',
      year: 2023,
      pages: '441-463',
      pdf: 'pdfs/كتب جماعية/تصور اللسانيات.pdf'
    },
    {
      type: 'book',
      title: 'تدريس الاستعارة في الأفعال: مقاربة تصورية معرفية',
      source: 'المتون الكاملة لأبحاث المؤتمر الدولي الخامس عشر للغات والأدب',
      year: 2022,
      pages: '53-63'
    },
    {
      type: 'book',
      title: 'مورفولوجيا لغة الإشارة: جونستون ترافر',
      source: 'مباحث نحوية ولسانية',
      publisher: 'منشورات كلية الآداب بالرباط',
      year: 2021,
      pages: '243-251',
      pdf: 'pdfs/كتب جماعية/مباحث نحوية.pdf'
    },
    {
      type: 'book',
      title: 'التعلم والاكتساب: مقاربة معرفية',
      source: 'دراسات لسانية عربية في الدلالة والتركيب والاكتساب والترجمة',
      publisher: 'دار أبي رقراق للطباعة والنشر',
      year: 2021,
      pages: '63-84',
      pdf: 'pdfs/كتب جماعية/التعلم والاكتساب مقاربة معرفية.pdf'
    },
    {
      type: 'journal',
      title: 'المعرفة المعجمية وتحقيق الكفاية التواصلية',
      source: 'مجلة اللساني',
      volume: 'مج 2، عدد 2',
      year: 2025,
      pages: '176-196',
      pdf: 'pdfs/محكمة/2025 مجلد 2 ع 2 اللساني المعرفة المعجمية وكفاية التواصلية.pdf'
    },
    {
      type: 'journal',
      title: 'الاستعارة بين بناء التصورات واستخلاص القواعد: مقاربة بالسمات والفرضية المحلية',
      source: 'مجلة الترجمة وتعدد اللغات',
      volume: 'مج 3، عدد 1',
      year: 2025,
      pages: '1-15',
      pdf: 'pdfs/محكمة/منشورة 2025  1الاستعارة السمات والدور الدلالي.pdf'
    },
    {
      type: 'book',
      title: 'تصورات عن المعنى والدلالة في بعض النظريات الدلالية وفلسفة اللغة',
      source: 'BIBLIO LE GUIDE',
      publisher: 'BIBLIO LE GUIDE',
      year: 2025,
      pages: '',
      cover: bookCover,
      back: bookBack,
      featured: true,
      description: `الكتاب يبحث في ماهية الحدث اللغوي من خلال ثلاثة مفاهيم رئيسية: الدال (الصوت)، المدلول (المعنى)، والمرجع (الشيء في العالم).
يتناول تطور البحث في العلاقة بين هذه المفاهيم داخل اللسانيات الحديثة، وكيف تحولت من دراسة الصوت والمعنى إلى دراسة العلاقة بين اللغة والفكر والعالم الخارجي.

كما يناقش كيف يبني الإنسان تصورات ذهنية للأشياء، وكيف تنتقل هذه التصورات عبر اللغة، وكيف تمثل اللغة العالم داخل الذهن البشري.
الكتاب يربط بين المعنى اللغوي والتمثيل الذهني للعالم، مركّزًا على فكرة "الصورة الذهنية" ودورها في فهم اللغة والمعنى`,
    }
  ];

  const conferences = [
    {
      title: 'عن أحيائية الفكر',
      event: 'اليوم الدراسي حول قضايا نظرية وتطبيقية في اللسانيات العربية المقارنة',
      location: 'معهد الدراسات والأبحاث للتعريب',
      year: 2025
    },
    {
      title: 'عن بعض أوجه الاتصال والانفصال بين النحو والبلاغة',
      event: 'اليوم الدراسي حول اللسانيات العربية المقارنة',
      year: 2023
    },
    {
      title: 'استعارتا الوعاء والحرب وتأويل خطاب الجائحة',
      event: 'ندوة خطاب الجائحة',
      year: 2021
    }
  ];

  const renderHome = () => (
    <div className="space-y-8 animate-fade-in">
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg">
        <div className="flex items-center gap-8 mb-6">
          <img 
            src={profileImage} 
            alt="صورة الأستاذ"
            className="w-48 h-48 rounded-full object-cover border-4 border-emerald-500 shadow-lg profile-float profile-glow"
          />
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-3">الأستاذ حميد دغوج</h1>
            <p className="text-xl text-emerald-700 font-semibold mb-6">
              أستاذ باحث في اللسانيات العربية المقارنة
            </p>
            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-emerald-600" />
              <span>معهد الدراسات والأبحاث للتعريب، جامعة محمد الخامس، الرباط</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <BookOpen className="w-7 h-7 text-emerald-600" />
          مجالات الاهتمام
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {['المعجم والدلالة', 'اللسانيات المعرفية', 'تدريس اللغة العربية'].map((field, idx) => (
            <div key={idx} className="field-card bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-5 text-center border-2 border-emerald-100 hover:border-emerald-300 transition-all">
              <p className="text-gray-800 font-semibold">{field}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">نبذة عن الأستاذ</h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          يشغل الأستاذ حميد دغوج منصب أستاذ باحث في اللسانيات العربية المقارنة بمعهد الدراسات والأبحاث للتعريب، جامعة محمد الخامس بالرباط. يركز في أبحاثه على المعجم والدلالة، اللسانيات المعرفية، وتدريس اللغة العربية. له مساهمات علمية بارزة في مجالات البلاغة والاستعارة والتعلمات اللغوية، مع إشراف وتنسيق لعدد من الندوات الدولية والوطنية.
        </p>
      </div>
    </div>
  );

  const renderBook = () => {
    const book = publications.find(p => p.featured);
    if (!book) return null;
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-emerald-600" />
            الكتاب
          </h2>

          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="flex-shrink-0 flex flex-col md:flex-row gap-4 items-center">
              {book.cover && (
                <img
                  src={book.cover}
                  alt={`${book.title} - غلاف`}
                  className="w-full max-w-[220px] md:w-56 md:h-80 h-auto object-cover rounded-md shadow-sm image-hover"
                  onClick={() => setLightboxSrc(book.cover)}
                />
              )}

              {book.back && (
                <img
                  src={book.back}
                  alt={`${book.title} - غلاف خلفي`}
                  className="w-full max-w-[220px] md:w-56 md:h-80 h-auto object-cover rounded-md shadow-sm image-hover"
                  onClick={() => setLightboxSrc(book.back)}
                />
              )}
            </div>

            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h3>
              <p className="text-gray-700 mb-2"><span className="font-semibold">الناشر:</span> {book.publisher || book.source}</p>
              <p className="text-gray-700 mb-2"><span className="font-semibold">السنة:</span> {book.year} {book.pages && `| صفحات: ${book.pages}`}</p>
              <div className="border-t border-emerald-200 pt-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">الوصف</h3>
                <p className="text-gray-700 leading-relaxed">
                  {book.description}
                </p>
              </div>

              <div className="flex items-center gap-3 mt-4">
                {book.pdf && (
                  <button
                    onClick={() => setPdfSrc(book.pdf)}
                    className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors btn-animate"
                  >
                    <FileText className="w-4 h-4" />
                    عرض المستند
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAbout = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <User className="w-8 h-8 text-emerald-600" />
          السيرة الذاتية
        </h2>
        
        <div className="space-y-6">
          <div className="border-r-4 border-emerald-500 pr-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">الصفة الأكاديمية</h3>
            <p className="text-gray-700 leading-relaxed">
              أستاذ باحث في اللسانيات العربية المقارنة بمعهد الدراسات والأبحاث للتعريب، جامعة محمد الخامس، الرباط
            </p>
          </div>

          <div className="border-r-4 border-teal-500 pr-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">مجالات الاهتمام</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                المعجم والدلالة
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                اللسانيات المعرفية
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                تدريس اللغة العربية
              </li>
            </ul>
          </div>

          <div className="border-r-4 border-cyan-500 pr-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">المهام العلمية والتنظيمية</h3>
            <p className="text-gray-700">
              منسق وعضو في عدد من الندوات الدولية والوطنية والأيام الدراسية
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPublications = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <FileText className="w-8 h-8 text-emerald-600" />
          المنشورات العلمية
        </h2>

        <div className="mb-8">
          <h3 className="text-2xl font-bold text-emerald-700 mb-4">في كتب جماعية</h3>
          <div className="space-y-4">
            {publications.filter(p => p.type === 'book' && !p.featured).map((pub, idx) => (
              <div key={idx} className="pub-card bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border-r-4 border-emerald-500 hover:shadow-md transition-all card-hover">
                <div className="flex justify-between items-start">
                  <div className="flex gap-6">
                    {pub.cover && (
                      <div className="flex-shrink-0">
                        <img
                          src={pub.cover}
                          alt={`${pub.title} - غلاف`}
                          className="w-full max-w-[140px] md:w-28 md:h-40 h-auto object-cover rounded-md shadow-sm image-hover"
                          onClick={() => setLightboxSrc(pub.cover)}
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-3">{pub.title}</h4>
                      <div className="text-gray-700 space-y-1">
                        <p><span className="font-semibold">الناشر:</span> {pub.publisher || pub.source}</p>
                        <p><span className="font-semibold">السنة:</span> {pub.year} {pub.pages && `| صفحات: ${pub.pages}`}</p>
                      </div>
                      {pub.back && (
                        <div className="mt-3">
                          <button
                            type="button"
                            onClick={() => setLightboxSrc(pub.back)}
                            className="text-sm text-emerald-600 hover:underline"
                          >
                            عرض غلاف الكتاب الخلفي
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-3">
                    {pub.pdf && (
                      <button
                        onClick={() => setPdfSrc(pub.pdf)}
                        className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors btn-animate"
                      >
                        <FileText className="w-4 h-4" />
                        عرض المستند
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-teal-700 mb-4">في مجلات محكمة</h3>
          <div className="space-y-4">
            {publications.filter(p => p.type === 'journal').map((pub, idx) => (
              <div key={idx} className="pub-card bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border-r-4 border-teal-500 hover:shadow-md transition-all card-hover">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">{pub.title}</h4>
                    <div className="text-gray-700 space-y-1">
                      <p><span className="font-semibold">المجلة:</span> {pub.source}</p>
                      <p><span className="font-semibold">المجلد/العدد:</span> {pub.volume}</p>
                      <p><span className="font-semibold">السنة:</span> {pub.year} | <span className="font-semibold">الصفحات:</span> {pub.pages}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3">
                    {pub.pdf && (
                      <button
                        onClick={() => setPdfSrc(pub.pdf)}
                        className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors btn-animate"
                      >
                        <FileText className="w-4 h-4" />
                        عرض المستند
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold text-cyan-700 mb-4">المشاركات العلمية</h3>
          <div className="space-y-4">
            {conferences.map((conf, idx) => (
              <div key={idx} className="pub-card bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6 border-r-4 border-cyan-500 hover:shadow-md transition-all card-hover">
                <h4 className="text-lg font-bold text-gray-800 mb-3">{conf.title}</h4>
                <div className="text-gray-700 space-y-1">
                  <p><span className="font-semibold">الفعالية:</span> {conf.event}</p>
                  {conf.location && <p><span className="font-semibold">المكان:</span> {conf.location}</p>}
                  <p><span className="font-semibold">السنة:</span> {conf.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <Mail className="w-8 h-8 text-emerald-600" />
          معلومات الاتصال
        </h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-emerald-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">العنوان المهني</h3>
                <p className="text-gray-700 leading-relaxed">
                  <a href="https://maps.app.goo.gl/PWcwRz5Xhf9Ank33A" target="_blank" rel="noopener noreferrer">
                    معهد الدراسات والأبحاث للتعريب<br />
                    جامعة محمد الخامس<br />
                    الرباط، المغرب
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">البريد الإلكتروني</h3>
                <p className="text-gray-700">للتواصل الأكاديمي والعلمي</p>
                <p className="text-gray-700">
                  <a href="mailto:hamdagh70@gmail.com" className="hover:underline">
                    hamdagh70@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <ExternalLink className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">الروابط الأكاديمية</h3>
                <p className="text-gray-700">
                  <a href="https://iera.um5.ac.ma/fr/node/918" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    جامعة محمد الخامس - معهد الدراسات والأبحاث للتعريب
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Facebook className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-gray-800 mb-2">الحساب على فيس بوك</h3>
                <p className="text-gray-700">
                  <a 
                    href="https://web.facebook.com/ham.dagh.2025" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-2"
                  >
                    Ham Dagh
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100" dir="rtl">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <img
                src={profileImage}
                alt="صورة الأستاذ"
                className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500"
              />
              <div className="text-2xl font-bold text-emerald-700">د. حميد دغوج</div>
            </div>

            <div className="hidden md:flex gap-2">
              {[
                { id: 'home', label: 'الرئيسية', icon: <User className="w-4 h-4" /> },
                { id: 'about', label: 'نبذة', icon: <BookOpen className="w-4 h-4" /> },
                { id: 'book', label: 'الكتب', icon: <BookOpen className="w-4 h-4" /> },
                { id: 'publications', label: 'المنشورات', icon: <FileText className="w-4 h-4" /> },
                { id: 'contact', label: 'الاتصال', icon: <Mail className="w-4 h-4" /> }
              ].map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="nav-item px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 bg-gray-100 text-gray-700 hover:bg-gray-200"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <button
                type="button"
                aria-label="فتح القائمة"
                onClick={() => setMobileOpen(prev => !prev)}
                className="p-2 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="mt-3 md:hidden bg-white border-t pt-3 pb-4">
              <div className="flex flex-col gap-2 px-2">
                {[
                  { id: 'home', label: 'الرئيسية', icon: <User className="w-4 h-4" /> },
                  { id: 'about', label: 'نبذة', icon: <BookOpen className="w-4 h-4" /> },
                  { id: 'book', label: 'الكتب', icon: <BookOpen className="w-4 h-4" /> },
                  { id: 'publications', label: 'المنشورات', icon: <FileText className="w-4 h-4" /> },
                  { id: 'contact', label: 'الاتصال', icon: <Mail className="w-4 h-4" /> }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => { setActiveSection(item.id); setMobileOpen(false); }}
                    className={`w-full text-right px-3 py-2 rounded-lg flex items-center justify-between gap-2 font-semibold transition-all ${
                      activeSection === item.id ? 'bg-emerald-600 text-white' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="flex items-center gap-2">{item.icon}<span>{item.label}</span></span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-16">
        <section id="home">{renderHome()}</section>
        <section id="about">{renderAbout()}</section>
        <section id="publications">{renderPublications()}</section>
        <section id="book">{renderBook()}</section>
        <section id="contact">{renderContact()}</section>
      </main>

      {lightboxSrc && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 modal-backdrop"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-[95%] max-h-[95%] modal-content">
            <img
              src={lightboxSrc}
              alt="عرض مكبر"
              className="w-full h-auto max-h-[95vh] object-contain rounded-md shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {pdfSrc && (
        <div 
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 modal-backdrop"
          onClick={() => setPdfSrc(null)}
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-5xl h-[90vh] bg-white rounded-lg overflow-hidden modal-content" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-bold text-lg">عرض المستند</h3>
              <button 
                onClick={() => setPdfSrc(null)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <iframe
              src={`${pdfSrc}#toolbar=0`}
              className="w-full h-[calc(90vh-4rem)]"
              title="PDF Viewer"
            />
          </div>
        </div>
      )}

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-300">© 2025 الأستاذ حميد دغوج - جميع الحقوق محفوظة</p>
          <p className="text-gray-400 text-sm mt-2">معهد الدراسات والأبحاث للتعريب - جامعة محمد الخامس</p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(16, 185, 129, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(16, 185, 129, 0.6);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-in {
          animation: slide-in-right 0.6s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }

        .card-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        .profile-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .profile-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .btn-animate {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .btn-animate::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s ease;
        }
        
        .btn-animate:hover::before {
          left: 100%;
        }
        
        .btn-animate:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        
        .btn-animate:active {
          transform: translateY(0);
        }
        
        .field-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: scale-in 0.5s ease-out backwards;
        }
        
        .field-card:nth-child(1) { animation-delay: 0.1s; }
        .field-card:nth-child(2) { animation-delay: 0.2s; }
        .field-card:nth-child(3) { animation-delay: 0.3s; }
        
        .field-card:hover {
          transform: translateY(-8px) rotate(-1deg);
          box-shadow: 0 12px 24px rgba(16, 185, 129, 0.2);
        }
        
        .pub-card {
          animation: slide-in-right 0.5s ease-out backwards;
        }
        
        .pub-card:nth-child(1) { animation-delay: 0.1s; }
        .pub-card:nth-child(2) { animation-delay: 0.2s; }
        .pub-card:nth-child(3) { animation-delay: 0.3s; }
        .pub-card:nth-child(4) { animation-delay: 0.4s; }
        .pub-card:nth-child(5) { animation-delay: 0.5s; }
        
        .image-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        
        .image-hover:hover {
          transform: scale(1.05) rotate(2deg);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }
        
        .modal-backdrop {
          animation: fade-in 0.3s ease-out;
        }
        
        .modal-content {
          animation: scale-in 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .link-animate {
          position: relative;
          transition: color 0.3s ease;
        }
        
        .link-animate::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: width 0.3s ease;
        }
        
        .link-animate:hover::after {
          width: 100%;
        }

        html {
          scroll-behavior: smooth;
        }

        section {
          scroll-margin-top: 5rem;
        }
        
        .nav-item {
          position: relative;
          transition: all 0.3s ease;
        }
        
        .nav-item::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-item:hover::after {
          width: 80%;
        }
      `}</style>
    </div>
  );
}