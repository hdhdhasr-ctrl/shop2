import { motion } from 'framer-motion';
import { Briefcase, Dumbbell, GraduationCap, Music, Plane, Gamepad2 } from 'lucide-react';
import { TID } from '@/lib/testIds';

const LIFESTYLE = [
  {
    title: 'Music Streaming',
    desc: 'Spotify, Apple Music, Tidal — Hi-Res ready over LDAC.',
    icon: Music,
    img: 'https://images.unsplash.com/photo-1603336540413-009bd9dc5133?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxwZXJzb24lMjB3ZWFyaW5nJTIwd2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fHx8MTc4MjM4MzgyMHww&ixlib=rb-4.1.0&q=85',
  },
  {
    title: 'Gaming',
    desc: 'Low-latency mode keeps audio tightly in sync.',
    icon: Gamepad2,
    img: 'https://images.unsplash.com/photo-1512221472476-7e439affc029?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxwZXJzb24lMjB3ZWFyaW5nJTIwd2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fHx8MTc4MjM4MzgyMHww&ixlib=rb-4.1.0&q=85',
  },
  {
    title: 'Fitness',
    desc: 'Sweat & splash resistant. Stays put through any workout.',
    icon: Dumbbell,
    img: 'https://images.pexels.com/photos/8858287/pexels-photo-8858287.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    title: 'Office Work',
    desc: 'ANC kills the office din. HD calls keep you crisp.',
    icon: Briefcase,
    img: 'https://images.pexels.com/photos/8032784/pexels-photo-8032784.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
  {
    title: 'Online Learning',
    desc: 'Designed for long study sessions and back-to-back lectures.',
    icon: GraduationCap,
    img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxlYXJidWRzJTIwY2hhcmdpbmclMjBjYXNlfGVufDB8fHx8MTc4MjM4MzgyMHww&ixlib=rb-4.1.0&q=85',
  },
  {
    title: 'Travel',
    desc: 'Block engine noise on flights, trains and busy streets.',
    icon: Plane,
    img: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxlYXJidWRzJTIwY2hhcmdpbmclMjBjYXNlfGVufDB8fHx8MTc4MjM4MzgyMHww&ixlib=rb-4.1.0&q=85',
  },
];

export default function LifestyleSection() {
  return (
    <section
      id="lifestyle"
      data-testid={TID.lifestyle}
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-muted-foreground mb-4">
            Made for life
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-medium tracking-tight leading-tight">
            One pair.{' '}
            <span className="italic font-light text-muted-foreground">Every moment.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {LIFESTYLE.map(({ title, desc, icon: Icon, img }, idx) => (
            <motion.article
              key={title}
              data-testid={TID.lifestyleCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="group relative rounded-3xl overflow-hidden border border-border aspect-[4/5] bg-card"
            >
              <img
                src={img}
                alt={title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-6 text-white">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full glass-dark mb-3 self-start">
                  <Icon size={18} strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-medium tracking-tight">
                  {title}
                </h3>
                <p className="mt-1.5 text-sm text-white/80 leading-relaxed">{desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
