import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Instagram, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react';
import { Language, QuoteFormData } from '../types';

interface ContactSectionProps {
  language: Language;
  presetData?: Partial<QuoteFormData> | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  presetData
}) => {
  const isPt = language === 'pt';

  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    email: '',
    phone: '',
    eventType: 'Casamento',
    eventDate: '',
    guestCount: '',
    locationCity: 'São Paulo - SP',
    budgetRange: '',
    message: '',
    servicesInterested: []
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (presetData) {
      setFormData((prev) => ({
        ...prev,
        ...presetData,
        message: presetData.message || prev.message
      }));
    }
  }, [presetData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const generateWhatsAppUrl = () => {
    const messageText = encodeURIComponent(
      `Olá, Joyce e Agatha! Gostaria de um orçamento da Amora Assessoria:\n` +
      `• Nome: ${formData.fullName || 'Não informado'}\n` +
      `• Tipo de Evento: ${formData.eventType}\n` +
      `• Data Prevista: ${formData.eventDate || 'A definir'}\n` +
      `• Convidados: ${formData.guestCount || 'A definir'}\n` +
      `• Cidade: ${formData.locationCity || 'São Paulo'}\n` +
      `• Mensagem: ${formData.message || 'Gostaria de saber mais sobre a assessoria.'}`
    );
    // WhatsApp format
    return `https://wa.me/5511999999999?text=${messageText}`;
  };

  return (
    <section id="contato" className="py-24 lg:py-32 bg-[#FAF7F2] dark:bg-[#150B12] relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-[0.28em] text-[#A67C46] dark:text-[#E5BE82] font-semibold">
            {isPt ? 'Inicie Seu Planejamento' : 'Start Your Journey'}
          </span>
          <h2 className="mt-3 font-serif-title text-3xl sm:text-5xl text-[#351425] dark:text-[#F8F3EC] font-light">
            {isPt ? 'Fale Conosco e Solicite Seu Orçamento' : 'Connect with Joyce & Agatha'}
          </h2>
          <div className="w-16 h-[1.5px] bg-[#C5A880] mx-auto my-5" />
          <p className="text-base sm:text-lg text-[#5C4855] dark:text-[#D5C2CC]">
            {isPt
              ? 'Conte-nos sobre o seu sonho. Responderemos em até 24 horas com carinho, transparência e atenção personalizada.'
              : 'Tell us about your celebration. We will respond within 24 hours with a thoughtful and tailored proposal.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact info & Studio Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl bg-[#F5EFEB] dark:bg-[#1E0F1A] border border-[#E8DFD5] dark:border-[#381B2D] p-8 sm:p-10 shadow-sm">
              <span className="font-script text-3xl text-[#4A1E34] dark:text-[#E5BE82] block mb-2">
                Amora Assessoria & Eventos
              </span>
              <h3 className="font-serif text-2xl text-[#351425] dark:text-[#F8F3EC] font-normal mb-4">
                {isPt ? 'Gestão por Joyce Costa & Agatha Zillar' : 'Managed by Joyce Costa & Agatha Zillar'}
              </h3>
              <p className="text-sm text-[#6A5A50] dark:text-[#CBB4A4] leading-relaxed mb-8">
                {isPt
                  ? 'Atendemos com hora marcada em nosso estúdio e também por videoconferência para clientes em outras cidades e estados.'
                  : 'We welcome appointments in our São Paulo studio as well as virtual consultations worldwide.'}
              </p>

              {/* Direct Contacts List */}
              <div className="space-y-4 text-sm text-[#4A3E35] dark:text-[#E2D4DC]">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] dark:bg-[#281523] border border-[#C5A880]/30 dark:border-[#E5BE82]/40 flex items-center justify-center text-[#A67C46] dark:text-[#E5BE82] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#351425] dark:text-[#F8F3EC]">
                      {isPt ? 'Localização' : 'Location'}
                    </strong>
                    <span>São Paulo - SP • Atendimento em todo o Brasil & Destination</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] dark:bg-[#281523] border border-[#C5A880]/30 dark:border-[#E5BE82]/40 flex items-center justify-center text-[#A67C46] dark:text-[#E5BE82] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#351425] dark:text-[#F8F3EC]">
                      {isPt ? 'WhatsApp Oficial' : 'Official WhatsApp'}
                    </strong>
                    <span>+55 (11) 98765-4321</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] dark:bg-[#281523] border border-[#C5A880]/30 dark:border-[#E5BE82]/40 flex items-center justify-center text-[#A67C46] dark:text-[#E5BE82] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#351425] dark:text-[#F8F3EC]">
                      E-mail
                    </strong>
                    <span>contato@amoraassessoria.com.br</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF7F2] dark:bg-[#281523] border border-[#C5A880]/30 dark:border-[#E5BE82]/40 flex items-center justify-center text-[#A67C46] dark:text-[#E5BE82] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-xs uppercase tracking-wider text-[#351425] dark:text-[#F8F3EC]">
                      {isPt ? 'Horário de Atendimento' : 'Studio Hours'}
                    </strong>
                    <span>Segunda a Sexta: 09h às 19h • Sábados sob agendamento</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 pt-6 border-t border-[#E8DFD5] dark:border-[#381B2D] flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8C7362] dark:text-[#CBB4A4]">
                  {isPt ? 'Siga:' : 'Follow:'}
                </span>
                <a
                  href="https://instagram.com/amora.assessoria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-[#FAF7F2] dark:bg-[#281523] border border-[#D5C2AF] dark:border-[#4A243C] text-xs text-[#4A1E34] dark:text-[#E5BE82] hover:bg-[#4A1E34] hover:text-[#FAF7F2] transition-colors inline-flex items-center gap-1.5"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C5A880] dark:text-[#E5BE82]" />
                  <span>@amora.assessoria</span>
                </a>
              </div>
            </div>

            {/* Stylized Map Card */}
            <div className="rounded-3xl bg-[#F5EFEB] dark:bg-[#1E0F1A] border border-[#E8DFD5] dark:border-[#381B2D] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#351425] dark:text-[#F8F3EC]">
                  {isPt ? 'Região de Atendimento' : 'Service Radius'}
                </span>
                <span className="text-xs text-[#A67C46] dark:text-[#E5BE82]">São Paulo & Região</span>
              </div>
              <div className="h-44 rounded-2xl bg-[#E6DACF] dark:bg-[#2A1624] relative overflow-hidden flex items-center justify-center border border-[#D5C2AF] dark:border-[#422237]">
                {/* Visual representation of an elegant minimal map */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#8C7362_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative z-10 text-center p-4">
                  <div className="w-8 h-8 rounded-full bg-[#4A1E34] dark:bg-[#7D2954] text-[#FAF7F2] flex items-center justify-center mx-auto mb-2 shadow-md animate-bounce">
                    <MapPin className="w-4 h-4 text-[#C5A880] dark:text-[#E5BE82]" />
                  </div>
                  <span className="font-serif text-sm text-[#351425] dark:text-[#F8F3EC] font-medium block">
                    São Paulo • Jardins / Pinheiros
                  </span>
                  <span className="text-[11px] text-[#6A5A50] dark:text-[#CBB4A4]">
                    Atendemos também casamentos no campo e litoral
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quote Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#F5EFEB] dark:bg-[#1E0F1A] border border-[#E3D7CC] dark:border-[#381B2D] p-8 sm:p-12 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-[#4A1E34] dark:bg-[#7D2954] text-[#C5A880] dark:text-[#E5BE82] flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif-title text-3xl text-[#351425] dark:text-[#F8F3EC] mb-3">
                    {isPt ? 'Solicitação Enviada com Sucesso!' : 'Inquiry Received with Pleasure!'}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5C4855] dark:text-[#D5C2CC] max-w-md mx-auto mb-8 leading-relaxed">
                    {isPt
                      ? 'Muito obrigado por compartilhar seu sonho conosco. A Joyce e a Agatha já receberam suas informações e responderão em breve.'
                      : 'Thank you for trusting us with your celebration. Joyce & Agatha have received your details and will get in touch shortly.'}
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold shadow-md hover:bg-[#20bd5a] transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>{isPt ? 'Conversar pelo WhatsApp Agora' : 'Chat via WhatsApp Now'}</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          eventType: 'Casamento',
                          eventDate: '',
                          guestCount: '',
                          locationCity: 'São Paulo - SP',
                          budgetRange: '',
                          message: '',
                          servicesInterested: []
                        });
                      }}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#FAF7F2] dark:bg-[#281523] text-[#4A1E34] dark:text-[#E5BE82] border border-[#C5A880] dark:border-[#E5BE82]/50 text-xs uppercase tracking-wider font-medium hover:bg-white dark:hover:bg-[#341A2D] transition-all"
                    >
                      {isPt ? 'Enviar Nova Mensagem' : 'Send Another Inquiry'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-[#E8DFD5] dark:border-[#381B2D] pb-4 mb-6">
                    <h3 className="font-serif-title text-2xl text-[#351425] dark:text-[#F8F3EC] font-normal">
                      {isPt ? 'Solicite Seu Orçamento Personalizado' : 'Request Your Custom Proposal'}
                    </h3>
                    <p className="text-xs text-[#7A6960] dark:text-[#CBB4A4] mt-1">
                      {isPt
                        ? 'Preencha os dados abaixo ou, se preferir, envie-nos uma mensagem direta pelo WhatsApp.'
                        : 'Fill in the fields below or reach out directly via WhatsApp.'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E35] dark:text-[#F3E2EA] mb-2">
                        {isPt ? 'Nome Completo *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={isPt ? 'Ex: Camila Silva' : 'Ex: Emily Clark'}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-[#251320] border border-[#D5C2AF] dark:border-[#422237] text-sm text-[#2C242B] dark:text-[#F8F3EC] focus:border-[#4A1E34] dark:focus:border-[#E5BE82] focus:outline-none focus:ring-1 focus:ring-[#4A1E34] transition-all"
                      />
                    </div>

                    {/* E-mail */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E35] dark:text-[#F3E2EA] mb-2">
                        {isPt ? 'E-mail de Contato *' : 'Email Address *'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="camila@exemplo.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-[#251320] border border-[#D5C2AF] dark:border-[#422237] text-sm text-[#2C242B] dark:text-[#F8F3EC] focus:border-[#4A1E34] dark:focus:border-[#E5BE82] focus:outline-none focus:ring-1 focus:ring-[#4A1E34] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone / WhatsApp */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E35] dark:text-[#F3E2EA] mb-2">
                        {isPt ? 'WhatsApp / Telefone *' : 'Phone / WhatsApp *'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-[#251320] border border-[#D5C2AF] dark:border-[#422237] text-sm text-[#2C242B] dark:text-[#F8F3EC] focus:border-[#4A1E34] dark:focus:border-[#E5BE82] focus:outline-none focus:ring-1 focus:ring-[#4A1E34] transition-all"
                      />
                    </div>

                    {/* Event Type */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E35] dark:text-[#F3E2EA] mb-2">
                        {isPt ? 'Tipo de Evento *' : 'Event Type *'}
                      </label>
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-[#251320] border border-[#D5C2AF] dark:border-[#422237] text-sm text-[#2C242B] dark:text-[#F8F3EC] focus:border-[#4A1E34] dark:focus:border-[#E5BE82] focus:outline-none focus:ring-1 focus:ring-[#4A1E34] transition-all"
                      >
                        <option value="Casamento">Casamento (Assessoria Completa)</option>
                        <option value="Assessoria do Dia">Assessoria Final / Do Dia</option>
                        <option value="Mini Wedding">Mini Wedding Intimista</option>
                        <option value="Evento Corporativo">Evento Corporativo</option>
                        <option value="Festa de 15 Anos">Festa de 15 Anos / Debutante</option>
                        <option value="Bodas ou Celebração">Bodas ou Outra Celebração</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {/* Event Date */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E35] dark:text-[#F3E2EA] mb-2">
                        {isPt ? 'Data Prevista' : 'Target Date'}
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-[#251320] border border-[#D5C2AF] dark:border-[#422237] text-sm text-[#2C242B] dark:text-[#F8F3EC] focus:border-[#4A1E34] dark:focus:border-[#E5BE82] focus:outline-none focus:ring-1 focus:ring-[#4A1E34] transition-all"
                      />
                    </div>

                    {/* Guests Count */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E35] dark:text-[#F3E2EA] mb-2">
                        {isPt ? 'Nº Estimado de Convidados' : 'Estimated Guests'}
                      </label>
                      <input
                        type="text"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        placeholder={isPt ? 'Ex: 150 convidados' : 'Ex: 150 guests'}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-[#251320] border border-[#D5C2AF] dark:border-[#422237] text-sm text-[#2C242B] dark:text-[#F8F3EC] focus:border-[#4A1E34] dark:focus:border-[#E5BE82] focus:outline-none focus:ring-1 focus:ring-[#4A1E34] transition-all"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E35] dark:text-[#F3E2EA] mb-2">
                        {isPt ? 'Cidade / Local' : 'City / Venue'}
                      </label>
                      <input
                        type="text"
                        name="locationCity"
                        value={formData.locationCity}
                        onChange={handleChange}
                        placeholder="São Paulo - SP"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-[#251320] border border-[#D5C2AF] dark:border-[#422237] text-sm text-[#2C242B] dark:text-[#F8F3EC] focus:border-[#4A1E34] dark:focus:border-[#E5BE82] focus:outline-none focus:ring-1 focus:ring-[#4A1E34] transition-all"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#4A3E35] dark:text-[#F3E2EA] mb-2">
                      {isPt ? 'Conte-nos sobre o seu sonho ou momento atual' : 'Tell us about your celebration & hopes'}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={
                        isPt
                          ? 'Gostaríamos de um casamento no campo com clima intimista e iluminação aconchegante...'
                          : 'We are dreaming of an intimate countryside celebration...'
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] dark:bg-[#251320] border border-[#D5C2AF] dark:border-[#422237] text-sm text-[#2C242B] dark:text-[#F8F3EC] focus:border-[#4A1E34] dark:focus:border-[#E5BE82] focus:outline-none focus:ring-1 focus:ring-[#4A1E34] transition-all"
                    />
                  </div>

                  {/* Submit Button & Fast WhatsApp action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-9 py-3.5 rounded-full bg-[#4A1E34] dark:bg-[#7D2954] hover:bg-[#351425] dark:hover:bg-[#943264] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-md hover:scale-[1.02] disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>{isPt ? 'Enviando...' : 'Sending...'}</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-[#C5A880] dark:text-[#E5BE82]" />
                          <span>{isPt ? 'Enviar Solicitação' : 'Submit Inquiry'}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#4A1E34] dark:text-[#E5BE82] hover:text-[#A67C46] font-semibold underline inline-flex items-center gap-1.5 transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>{isPt ? 'Ou envie direto pelo WhatsApp' : 'Or message directly via WhatsApp'}</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
