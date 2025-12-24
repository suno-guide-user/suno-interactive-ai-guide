import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, BookOpen, Code2, Lightbulb, ArrowRight, Music } from 'lucide-react';

interface HomeProps {
  onNavigate: (section: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const features = [
    {
      icon: BookOpen,
      title: 'ストーリーで学ぶ',
      description: '漫画とテキストが統合された、感動的なストーリーを通じてSUNOの魅力を理解できます。',
      image: '/images/hero-music-ai.jpg',
    },
    {
      icon: Code2,
      title: 'メタタグエディタ',
      description: 'リアルタイムプレビュー付きのエディタで、実際にメタタグを試しながら学べます。',
      image: '/images/metatag-editor-concept.jpg',
    },
    {
      icon: Lightbulb,
      title: 'サンプル集',
      description: 'すぐに使えるプロンプト例が豊富。コピペで試して、自分のアイデアに応用できます。',
      image: '/images/creative-journey.jpg',
    },
    {
      icon: Sparkles,
      title: 'ワークシート',
      description: '実践的な課題に取り組みながら、SUNOのスキルを着実に身につけられます。',
      image: '/images/hero-music-ai.jpg',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero-music-ai.jpg"
            alt="AI Music Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-accent/30 to-primary/40"></div>
        </div>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <p className="text-sm font-medium text-primary">🎵 音楽生成AIの完全ガイド</p>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
              <span className="bg-gradient-to-r from-yellow-300 via-cyan-300 to-yellow-300 bg-clip-text text-transparent drop-shadow-lg">
                SUNO
              </span>
              <br />
              で奏でる私のメロディ
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              AIが拓く、誰もがクリエイターになれる時代。
              <br />
              実際に試しながら、SUNOの全てを学べるインタラクティブガイド。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                onClick={() => onNavigate('story')}
                className="gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold shadow-lg"
              >
                ストーリーを読む
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => onNavigate('editor')}
                className="border-white text-white hover:bg-white/20 font-bold shadow-lg"
              >
                エディタを試す
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              このサイトでできること
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              漫画、テキスト、インタラクティブなツールを組み合わせて、
              <br />
              SUNOの全機能を効率的に学べます。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30 cursor-pointer group h-full"
                  onClick={() => {
                    if (index === 0) onNavigate('story');
                    if (index === 1) onNavigate('editor');
                    if (index === 2) onNavigate('samples');
                    if (index === 3) onNavigate('worksheet');
                  }}
                >
                  {/* Image Background */}
                  <div className="relative h-32 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/creative-journey.jpg"
            alt="Creative Journey"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/50 to-slate-900/60"></div>
        </div>
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            さあ、あなたの音楽が始まります
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto drop-shadow-md">
            才能がなくても、スキルがなくても、大丈夫。
            <br />
            SUNOなら、誰もが素晴らしい音楽を創ることができます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={() => onNavigate('story')}
              className="gap-2 bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold shadow-lg"
            >
              今すぐ始める
              <Sparkles className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
