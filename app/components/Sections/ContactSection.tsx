'use client'

import { useState, useCallback } from 'react';
import GradientText from "../GradientText/GradientText";
import BlurText from "../BlurText/BlurText";
import AnimatedContent from "../AnimatedContent/AnimatedContent";
import { Card, CardBody } from "@heroui/card";
import { ContactForm } from "../UI/form";
import { BorderBeam } from "../UI/border-beam";

export default function ContactSection() {
  const [comments, setComments] = useState<{id: number, name: string, comment: string, timestamp: string, avatar: string, color: string}[]>([]);
  const [commentForm, setCommentForm] = useState({ name: '', comment: '' });
  
  // Handle comment form submission
  const handleCommentSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (commentForm.name.trim() && commentForm.comment.trim()) {
      const newComment = {
        id: Date.now(),
        name: commentForm.name.trim(),
        comment: commentForm.comment.trim(),
        timestamp: 'Just now',
        avatar: commentForm.name.charAt(0).toUpperCase() + (commentForm.name.split(' ')[1]?.charAt(0).toUpperCase() || ''),
        color: ['bg-[#FF8F00]', 'bg-purple-500', 'bg-blue-500', 'bg-green-500', 'bg-red-500', 'bg-pink-500'][Math.floor(Math.random() * 6)]
      };
      setComments(prev => [newComment, ...prev]);
      setCommentForm({ name: '', comment: '' });
    }
  }, [commentForm]);

  // Handle input change
  const handleInputChange = useCallback((field: 'name' | 'comment', value: string) => {
    setCommentForm(prev => ({ ...prev, [field]: value }));
  }, []);

  return (
    <section id="contact" className="container mx-auto px-4 py-12">
      <AnimatedContent>
        <GradientText
          colors={["#E4B1F0", "#7E60BF", "#FFE1FF", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
        >
          <h2 className="text-4xl font-poppins font-bold text-center mb-3">Contact</h2>
        </GradientText>
      </AnimatedContent>

      <AnimatedContent>
        <div className="flex justify-center items-center w-full">
          <div className="text-center max-w-7xl w-full">
            <BlurText
              text="I am always open to opportunities to work together or provide services regarding digital products or want to establish a relationship with me can follow my social media below"
              delay={50}
              animateBy="words"
              direction="top"
              className="text-white font-poppins justify-center text-xl mb-8 mx-auto w-full max-w-[1000px]"
            />
          </div>
        </div>
      </AnimatedContent>

      <div className="grid lg:grid-cols-2 mt-4">
        <div className="flex justify-center mx-4">
          <Card
            isBlurred
            className="border-none bg-[#67729D]/30 dark:bg-default-100/50 w-full max-w-[500px] px-6 backdrop-blur-sm"
            shadow="sm"
          >
            <CardBody>
              <div>
                <ContactForm />
              </div>
            </CardBody>
          </Card>
        </div>
        
        <div className="flex flex-col mx-4 space-y-6">
          <AnimatedContent>
            <Card
              isBlurred
              className="border-none bg-[#67729D]/30 dark:bg-default-100/50 w-full max-w-[500px] px-6 backdrop-blur-sm"
              shadow="sm"
            >
              <CardBody className="p-6">
                <h3 className="font-poppins text-xl font-bold text-white mb-4 text-center">Leave a Comment</h3>
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={commentForm.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 font-poppins focus:outline-none focus:border-[#FF8F00] focus:ring-1 focus:ring-[#FF8F00] backdrop-blur-sm"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Write your comment here..."
                      rows={4}
                      value={commentForm.comment}
                      onChange={(e) => handleInputChange('comment', e.target.value)}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 font-poppins resize-none focus:outline-none focus:border-[#FF8F00] focus:ring-1 focus:ring-[#FF8F00] backdrop-blur-sm"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="group/btn relative block h-14 w-full rounded-md bg-gradient-to-br from-blue-950 to-purple-700 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] font-poppins"
                  >
                    Post Comment &rarr;
                  </button>
                </form>
              </CardBody>
              <BorderBeam duration={12} size={250} />
            </Card>
          </AnimatedContent>
          
          <AnimatedContent>
            <Card
              isBlurred
              className="border-none bg-[#67729D]/30 dark:bg-default-100/50 w-full max-w-[500px] px-6 backdrop-blur-sm"
              shadow="sm"
            >
              <CardBody className="p-6">
                <h4 className="font-poppins text-lg font-bold text-white mb-4">Recent Comments</h4>
                <div className="space-y-4 max-h-80 overflow-y-auto">
                  
                  {comments.length === 0 ? (
                    <div className="text-center py-8">
                      <div className="text-white/60 font-poppins text-sm">
                        No comments yet. Be the first to leave a comment! 💬
                      </div>
                    </div>
                  ) : (
                    comments.map((comment) => (
                      <div key={comment.id} className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                        <div className="flex items-start space-x-3">
                          <div className={`w-10 h-10 ${comment.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white font-poppins font-bold text-sm">{comment.avatar}</span>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h5 className="font-poppins font-semibold text-white text-sm">{comment.name}</h5>
                              <span className="text-white/60 text-xs font-poppins">{comment.timestamp}</span>
                            </div>
                            <p className="text-white/90 text-sm font-poppins leading-relaxed">
                              {comment.comment}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}

                </div>
              </CardBody>
            </Card>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
} 