import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Copy, Music, Zap } from 'lucide-react';
import { toast } from 'sonner';

interface Sample {
  id: string;
  title: string;
  description: string;
  genre: string;
  prompt: string;
  tags: string[];
}

export default function SamplesPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const samples: Sample[] = [
    {
      id: 'sample1',
      title: 'ポップな恋愛ソング',
      description: '明るく楽しい恋愛をテーマにしたJ-POPスタイルの曲',
      genre: 'J-POP',
      prompt: `[Intro]
(upbeat piano and guitar)

[Verse 1]
君の笑顔が好きだから
毎日が輝いて見える
心がときめいて
言葉が足りない

[Pre-Chorus]
(building up)
もう止められない

[Chorus]
君のそばにいたい
ずっとずっと
この気持ちは本物
君だけを見てる

[Verse 2]
手を繋ぎたくて
勇気を出して
君の瞳に映る自分
好きになる

[Bridge]
(key change, powerful)
全部君にあげたい

[Chorus]
君のそばにいたい
ずっとずっと
この気持ちは本物
君だけを見てる

[Outro]
(soft fade)
君のそばにいたい`,
      tags: ['恋愛', 'ポップ', 'J-POP'],
    },
    {
      id: 'sample2',
      title: 'エモーショナルバラード',
      description: '深い感情を表現した、しっとりとしたバラード',
      genre: 'バラード',
      prompt: `[Intro]
(soft strings and piano)

[Verse 1]
(whisper)
雨の夜に思い出す
あの日の約束
叶わぬ夢を
そっと手放す

[Pre-Chorus]
(emotional)
涙が止まらない

[Chorus]
時が癒してくれるまで
ここで待つ
痛みも愛も
全部が私

[Verse 2]
(soft vocal)
星を数えながら
君を想う
遠く離れても
心は繋がってる

[Bridge]
(building emotion)
もう戻らない日々へ

[Chorus]
時が癒してくれるまで
ここで待つ
痛みも愛も
全部が私

[Outro]
(fade out)
いつか笑える日まで`,
      tags: ['バラード', '感情的', 'しっとり'],
    },
    {
      id: 'sample3',
      title: 'アップテンポなダンスナンバー',
      description: 'クラブやフェスで盛り上がるダンスナンバー',
      genre: 'EDM/ダンスポップ',
      prompt: `[Intro]
(electronic beat, synth pad)

[Verse 1]
(powerful vocal)
夜が始まる
エネルギーが満ちてく
体が揺れて
心が躍る

[Pre-Chorus]
(building intensity)
全力で行こう

[Chorus]
(energetic)
踊れ踊れ
光の中で
この瞬間を感じて
永遠に

[Verse 2]
(rap style)
リズムに乗って
世界が変わる
限界なんてない
今を生きる

[Bridge]
(key change, drop)
全員で一緒に

[Chorus]
踊れ踊れ
光の中で
この瞬間を感じて
永遠に

[Outro]
(fade with beat)
踊り続けよう`,
      tags: ['ダンス', 'EDM', 'アップテンポ'],
    },
    {
      id: 'sample4',
      title: '応援ソング',
      description: 'チームやグループを応援する力強いソング',
      genre: 'ロック',
      prompt: `[Intro]
(guitar riff, drums)

[Verse 1]
(powerful)
立ち上がれ
何度でも
失敗は成功への道
諦めるな

[Pre-Chorus]
(building)
信じる力を

[Chorus]
(powerful vocal)
一緒に進もう
仲間と共に
何があっても
絶対に勝つ

[Verse 2]
(emotional)
涙も汗も
全部が力
この道を選んだ
後悔はない

[Bridge]
(key change)
みんなの想いを背負って

[Chorus]
一緒に進もう
仲間と共に
何があっても
絶対に勝つ

[Outro]
(powerful fade)
勝利の瞬間へ`,
      tags: ['応援', 'ロック', 'パワフル'],
    },
    {
      id: 'sample5',
      title: 'ジャズスタイルのバラード',
      description: '大人っぽいジャズテイストのしっとりした曲',
      genre: 'ジャズ',
      prompt: `[Intro]
(jazz piano, upright bass)

[Verse 1]
(soft, smooth)
月明かりの下で
君とのひと時
言葉なんて要らない
ただ一緒に

[Pre-Chorus]
(building gently)
この夜は特別

[Chorus]
(smooth vocal)
君と過ごす時間が
最高の贅沢
永遠にこのまま
時が止まれば

[Verse 2]
(emotional, jazzy)
ジャズが流れて
心が揺れて
君の温もり
全部が好き

[Bridge]
(key change, passionate)
この想いを伝えたい

[Chorus]
君と過ごす時間が
最高の贅沢
永遠にこのまま
時が止まれば

[Outro]
(fade with jazz)
月明かりの中で`,
      tags: ['ジャズ', 'バラード', '大人っぽい'],
    },
    {
      id: 'sample6',
      title: '自分を信じるテーマソング',
      description: '自信と勇気をテーマにした前向きなソング',
      genre: 'ポップ',
      prompt: `[Intro]
(inspiring strings and piano)

[Verse 1]
(determined)
自分を信じて
一歩踏み出す
怖いけど進む
新しい世界へ

[Pre-Chorus]
(building)
可能性は無限

[Chorus]
(powerful, inspiring)
私は私のままで
十分素晴らしい
自分の道を歩く
輝く未来へ

[Verse 2]
(emotional)
失敗も経験
全部が力
今のこの瞬間が
人生の宝物

[Bridge]
(key change)
誰かの言葉じゃなく

[Chorus]
私は私のままで
十分素晴らしい
自分の道を歩く
輝く未来へ

[Outro]
(inspiring fade)
新しい私へ`,
      tags: ['応援', 'ポップ', '前向き'],
    },
  ];

  const handleCopy = (prompt: string, sampleId: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedId(sampleId);
    toast.success('プロンプトをコピーしました！');
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <div className="container max-w-5xl">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <p className="text-sm font-medium text-primary flex items-center gap-2">
                <Zap className="w-4 h-4" />
                すぐに使えるサンプル集
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              プロンプトサンプル集
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              様々なジャンルのプロンプト例を用意しました。
              <br />
              コピーして、SUNOで試してみてください。
            </p>
          </div>
        </div>
      </section>

      <div className="container max-w-5xl py-12">

        {/* Samples Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {samples.map((sample) => (
            <Card
              key={sample.id}
              className="p-6 border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col bg-gradient-to-br from-background to-primary/5"
            >
              <div className="flex-1 space-y-4 mb-4">
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{sample.title}</h3>
                    <Music className="w-5 h-5 text-primary flex-shrink-0" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {sample.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    <span className="text-xs font-medium text-primary">
                      {sample.genre}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sample.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/50 p-3 rounded-lg max-h-32 overflow-y-auto">
                  <pre className="text-xs font-mono text-muted-foreground whitespace-pre-wrap break-words">
                    {sample.prompt.substring(0, 200)}...
                  </pre>
                </div>
              </div>

              <Button
                onClick={() => handleCopy(sample.prompt, sample.id)}
                className="w-full gap-2 bg-primary hover:bg-primary/90 font-bold"
              >
                <Copy className="w-4 h-4" />
                {copiedId === sample.id ? 'コピーしました' : 'プロンプトをコピー'}
              </Button>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <Card className="mt-12 p-8 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">💡 サンプルの使い方</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-bold text-primary">1. コピーする</h3>
                <p className="text-sm text-muted-foreground">
                  気に入ったサンプルの「プロンプトをコピー」ボタンをクリック
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-primary">2. SUNOに貼り付け</h3>
                <p className="text-sm text-muted-foreground">
                  SUNOのCustomモードに貼り付けて、生成ボタンをクリック
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-primary">3. カスタマイズ</h3>
                <p className="text-sm text-muted-foreground">
                  歌詞やメタタグを編集して、自分だけの曲に変身させる
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* CTA */}
        <Card className="mt-8 p-8 border-primary/20 bg-gradient-to-br from-accent/5 to-primary/5 text-center space-y-4">
          <h2 className="text-2xl font-bold">
            さらに詳しく学びたい方へ
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            メタタグエディタで、自分だけのプロンプトを作成してみましょう。
            <br />
            試行錯誤を通じて、SUNOの可能性を最大限に引き出せます。
          </p>
          <Button size="lg" className="gap-2">
            <Music className="w-4 h-4" />
            メタタグエディタを開く
          </Button>
        </Card>
      </div>
    </div>
  );
}
