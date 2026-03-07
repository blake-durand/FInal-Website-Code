import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { BorderBeam } from '../components/Effects';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm('mvzbezoz');

  if (state.succeeded) {
    return (
      <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-center gap-6 min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-emerald-400/10 flex items-center justify-center">
          <CheckCircle className="text-emerald-400" size={32} />
        </div>
        <div>
          <h3 className="text-2xl font-serif italic mb-2">Message sent!</h3>
          <p className="text-white/40 font-light">Thanks for reaching out. I'll get back to you shortly.</p>
        </div>
      </div>
    );
  }

  const hasErrors = state.errors && Object.keys(state.errors).length > 0;

  return (
    <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-white/30 ml-1">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white/30 transition-colors"
              placeholder="John Doe"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1 ml-1" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-white/30 ml-1">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white/30 transition-colors"
              placeholder="john@example.com"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1 ml-1" />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="text-[10px] uppercase tracking-widest text-white/30 ml-1">Service</label>
          <select
            id="service"
            name="service"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white/30 transition-colors appearance-none"
          >
            <option className="bg-black">Real Estate Buying/Selling</option>
            <option className="bg-black">Airbnb Management</option>
            <option className="bg-black">Media Production</option>
            <option className="bg-black">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-white/30 ml-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:outline-none focus:border-white/30 transition-colors resize-none"
            placeholder="Tell me about your project..."
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1 ml-1" />
        </div>

        {hasErrors && (
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            <AlertCircle size={16} className="shrink-0" />
            <span>Something went wrong. Please check your details and try again.</span>
          </div>
        )}

        <button
          type="submit"
          disabled={state.submitting}
          className="group relative w-full py-6 rounded-xl bg-white text-black font-bold uppercase tracking-[0.2em] text-xs overflow-hidden transition-transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <BorderBeam className="opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10 flex items-center justify-center gap-2">
            {state.submitting ? 'Sending...' : 'Send Message'} <Send size={14} />
          </span>
        </button>
      </form>
    </div>
  );
};

export const Contact = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 pb-20 md:pb-32 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-4 block">Get in Touch</span>
            <h1 className="text-4xl md:text-8xl font-serif italic mb-12 leading-tight">
              Let's build <br />
              <span className="text-white/40">something great.</span>
            </h1>

            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Mail className="text-white/60" size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Email</h4>
                  <p className="text-lg font-light">contact@blakedurand.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Phone className="text-white/60" size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Phone</h4>
                  <p className="text-lg font-light">(805) 242-2191</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="text-white/60" size={20} />
                </div>
                <div>
                  <h4 className="text-[10px] uppercase tracking-widest text-white/30 mb-2">Location</h4>
                  <p className="text-lg font-light">Los Angeles, California</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.main>
  );
};
