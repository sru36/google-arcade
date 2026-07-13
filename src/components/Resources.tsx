import React, { useState } from 'react';
import { Book, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const FAQS = [
  {
    question: 'How do I earn Arcade Points?',
    answer: 'You earn points by completing labs, quests, and skill badges on the Google Cloud Skills Boost platform. The more complex the lab, the more points you typically earn.'
  },
  {
    question: 'When does the leaderboard update?',
    answer: 'The global leaderboard updates every 24 hours. Your personal dashboard reflects your progress immediately after our system syncs with Skills Boost.'
  },
  {
    question: 'What prizes can I win?',
    answer: 'Depending on your final tier (Bronze, Silver, Gold, Platinum, Diamond), you can redeem points for exclusive Google Cloud swag, certification vouchers, and more at the end of the season.'
  },
  {
    question: 'How do I claim my referral bonus?',
    answer: 'Share your unique referral code found at the bottom of the page. When a new player signs up using your code and completes their first quest, you both receive a 500-point bonus.'
  }
];

export default function Resources() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(prev => prev === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <Book className="w-12 h-12 text-pink-500 mx-auto mb-4" />
        <h2 className="font-pixel text-2xl text-slate-900 mb-4">Helpful Resources</h2>
        <p className="font-sans text-slate-600 max-w-2xl mx-auto">
          Everything you need to know to maximize your score and climb the ranks in the Google Arcade.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Quick Links */}
        <div className="bg-white p-6 pixel-border h-full">
          <h3 className="font-pixel text-sm text-slate-800 mb-6 border-b-2 border-slate-100 pb-2">Quick Links</h3>
          <ul className="space-y-4 font-sans">
            <li>
              <a href="#" className="flex items-center justify-between p-3 bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-sm transition-colors border-2 border-purple-100 hover:border-purple-300">
                <span>Getting Started Guide</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-3 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-sm transition-colors border-2 border-blue-100 hover:border-blue-300">
                <span>Current Season Syllabus</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center justify-between p-3 bg-green-50 text-green-700 hover:bg-green-100 rounded-sm transition-colors border-2 border-green-100 hover:border-green-300">
                <span>Prize Counter Rules</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </li>
          </ul>
        </div>

        {/* FAQs */}
        <div className="bg-white p-6 pixel-border">
          <h3 className="font-pixel text-sm text-slate-800 mb-6 border-b-2 border-slate-100 pb-2">Frequently Asked Questions</h3>
          <div className="space-y-3 font-sans">
            {FAQS.map((faq, index) => (
              <div key={index} className="border-2 border-slate-200 rounded-sm overflow-hidden">
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-4 bg-slate-50 hover:bg-slate-100 transition-colors text-left font-medium text-slate-800"
                >
                  {faq.question}
                  {openFaqIndex === index ? <ChevronUp className="w-4 h-4 flex-shrink-0 text-slate-500" /> : <ChevronDown className="w-4 h-4 flex-shrink-0 text-slate-500" />}
                </button>
                {openFaqIndex === index && (
                  <div className="p-4 bg-white text-slate-600 text-sm border-t-2 border-slate-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
