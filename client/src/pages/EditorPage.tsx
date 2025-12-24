import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Copy, RefreshCw, Code2 } from 'lucide-react';
import { toast } from 'sonner';

export default function EditorPage() {
  const [lyrics, setLyrics] = useState(`[Intro]
(soft piano melody)

[Verse 1]
夢の中で見ていた景色
心に映る光と影
言葉にならない想い
AIが紡ぐ物語

[Pre-Chorus]
(building intensity)
今、新しい世界が

[Chorus]
SUNO で奏でる私のメロディ
心の声が音になる
創造の喜びに満ちて
新しい私が生まれる

[Verse 2]
指先から溢れ出す音
無限の可能性を感じて
制限なんてない
自由に創ろう

[Bridge]
(key change, powerful vocal)
全ての想いを込めて
この一曲に

[Chorus]
SUNO で奏でる私のメロディ
心の声が音になる
創造の喜びに満ちて
新しい私が生まれる

[Outro]
(fade out)
あなたの音楽が始まる`);

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(lyrics);
    setCopied(true);
    toast.success('歌詞をコピーしました！');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setLyrics(`[Intro]
(soft piano melody)

[Verse 1]
歌詞をここに入力してください

[Chorus]
サビをここに入力してください

[Outro]
(fade out)`);
    toast.info('リセットしました');
  };

  const tagGuide = [
    { tag: '[Intro]', description: 'イントロ（導入部）' },
    { tag: '[Verse]', description: 'Aメロ・Bメロ（詩の部分）' },
    { tag: '[Pre-Chorus]', description: 'サビ前（準備部分）' },
    { tag: '[Chorus]', description: 'サビ（主題となる繰り返し）' },
    { tag: '[Bridge]', description: 'Cメロ・ブリッジ（雰囲気を変える）' },
    { tag: '[Outro]', description: 'アウトロ（終結部）' },
    { tag: '[Instrumental]', description: '間奏（楽器のみ）' },
    { tag: '[Build Up]', description: '盛り上げ（徐々に音量UP）' },
  ];

  const voiceModifiers = [
    { modifier: '(whisper)', description: 'ささやくように' },
    { modifier: '(powerful vocal)', description: '力強く' },
    { modifier: '(soft)', description: '柔らかく' },
    { modifier: '(emotional)', description: '感情的に' },
    { modifier: '(key change)', description: '転調' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-accent/10 to-background">
        <div className="container max-w-6xl">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <p className="text-sm font-medium text-accent flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                インタラクティブエディタ
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              メタタグエディタ
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              メタタグを使って、あなたの曲の構成をコントロールしましょう。
              <br />
              下のエディタで歌詞を編集して、SUNOに送信してみてください。
            </p>
          </div>
        </div>
      </section>

      <div className="container max-w-6xl py-12">

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Editor */}
          <div className="lg:col-span-2 space-y-4">
            <Card className="p-6 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">歌詞エディタ</h2>
                  <div className="flex gap-2">
                <Button
                  size="sm"
                  onClick={handleCopy}
                  className="gap-2 bg-primary hover:bg-primary/90 font-bold"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? 'コピーしました' : 'コピー'}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={handleReset}
                  className="gap-2 border-primary/20"
                >
                  <RefreshCw className="w-4 h-4" />
                  リセット
                </Button>
                  </div>
                </div>

                <Textarea
                  value={lyrics}
                  onChange={(e) => setLyrics(e.target.value)}
                  placeholder="メタタグと歌詞を入力してください..."
                  className="min-h-96 font-mono text-sm bg-muted/50 border-primary/20"
                />

                <div className="text-sm text-muted-foreground">
                  💡 ヒント：メタタグは角括弧で囲みます。例：[Verse]、[Chorus]
                </div>
              </div>
            </Card>

            {/* CTA */}
            <Card className="p-6 border-accent/20 bg-gradient-to-r from-accent/10 to-primary/5 hover:shadow-lg transition-all">
              <div className="space-y-4">
                <h3 className="font-bold text-lg">SUNOで曲を生成する</h3>
                <p className="text-sm text-muted-foreground">
                  上の歌詞をコピーして、SUNOのカスタムモードに貼り付けてください。
                  <br />
                  メタタグが正しく認識されれば、あなたが設計した通りの曲が生成されます。
                </p>
                <Button className="w-full gap-2 bg-accent hover:bg-accent/90 font-bold">
                  <a href="https://suno.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 w-full">
                    SUNOを開く
                  </a>
                </Button>
              </div>
            </Card>
          </div>

          {/* Reference */}
          <div className="space-y-6">
            {/* Tags Guide */}
            <Card className="p-6 border-primary/20 hover:shadow-lg transition-all">
              <h3 className="font-bold mb-4 text-lg">メタタグリファレンス</h3>
              <div className="space-y-3">
                {tagGuide.map((item, index) => (
                  <div key={index} className="pb-3 border-b border-primary/10 last:border-0 last:pb-0">
                    <code className="text-sm font-mono bg-primary/5 px-2 py-1 rounded text-primary">
                      {item.tag}
                    </code>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Voice Modifiers */}
            <Card className="p-6 border-primary/20 hover:shadow-lg transition-all">
              <h3 className="font-bold mb-4 text-lg">ボーカルモディファイア</h3>
              <div className="space-y-3">
                {voiceModifiers.map((item, index) => (
                  <div key={index} className="pb-3 border-b border-primary/10 last:border-0 last:pb-0">
                    <code className="text-sm font-mono bg-accent/5 px-2 py-1 rounded text-accent">
                      {item.modifier}
                    </code>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Tips */}
            <Card className="p-6 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 hover:shadow-lg transition-all">
              <h3 className="font-bold mb-3 text-lg">💡 使用のコツ</h3>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• メタタグは大文字で記述</li>
                <li>• 各セクションの前に記述</li>
                <li>• 括弧内のテキストは説明</li>
                <li>• 複数のモディファイアを組み合わせ可能</li>
                <li>• 実験を繰り返して最適な構成を探す</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
