import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Music, ArrowRight } from 'lucide-react';

export default function StoryPage() {
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-primary/10 to-background">
        <div className="container max-w-4xl">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <p className="text-sm font-medium text-primary flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                漫画とテキストで学ぶ
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              SUNO との出会い
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              明里と優斗のストーリーを通じて、SUNOの魅力を感じてください。
            </p>
          </div>
        </div>
      </section>

      <div className="container max-w-4xl py-12">

        {/* Story Tabs */}
        <Tabs defaultValue="introduction" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="introduction">導入部</TabsTrigger>
            <TabsTrigger value="chapter1">第1章</TabsTrigger>
            <TabsTrigger value="chapter2">第2章</TabsTrigger>
            <TabsTrigger value="chapter3">第3章</TabsTrigger>
          </TabsList>

          {/* Introduction */}
          <TabsContent value="introduction" className="space-y-6">
            <Card className="p-8 border-primary/20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Music className="w-6 h-6 text-primary" />
                  はじめに
                </h2>
                <div className="prose prose-sm dark:prose-invert max-w-none space-y-4 text-muted-foreground">
                  <p>
                    頭の中に浮かんだメロディが、指先からこぼれ落ちていくような感覚。伝えたい想いが言葉にならず、胸の中でくすぶっている焦り。かつて、音楽を「創る」という行為は、一部の才能ある人々に許された特権でした。
                  </p>
                  <p>
                    しかし、もし、あなたの内なる声に耳を傾け、それを美しいシンフォニーへと昇華させてくれるパートナーがいたらどうでしょう？
                  </p>
                  <p>
                    この物語の主人公・明里が体験するように、AIは今や私たちの創造性を解き放つための、最もパワフルな翼となりつつあります。彼女が「SUNO」と出会い、自分のメロディが初めて「曲」になった瞬間の感動は、もはや特別な物語ではありません。これは、あなた自身の物語の始まりでもあるのです。
                  </p>
                  <p>
                    この本では、漫画のストーリーを通して、音楽生成AI『SUNO』がどのようにして私たちの創造的な夢を現実にするのか、その驚くべき機能と、それが切り拓く音楽の未来について、楽しく、そして深く探求していきます。さあ、あなたも明里や優斗と一緒に、新しい音楽の扉を開けてみましょう。
                  </p>
                </div>
              </div>
            </Card>

            {/* Manga Placeholder */}
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 min-h-96 flex items-center justify-center hover:shadow-lg transition-all">
              <div className="text-center space-y-4">
                <div className="relative">
                  <Music className="w-16 h-16 text-primary/30 mx-auto" />
                  <div className="absolute inset-0 animate-pulse"></div>
                </div>
                <p className="text-muted-foreground">
                  漫画第1-20ページ：導入部
                  <br />
                  <span className="text-sm">(画像はここに配置されます)</span>
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Chapter 1 */}
          <TabsContent value="chapter1" className="space-y-6">
            <Card className="p-8 border-primary/20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  第1章：AIとの出会い - 新しい作曲体験の幕開け
                </h2>
                <div className="prose prose-sm dark:prose-invert max-w-none space-y-4 text-muted-foreground">
                  <p>
                    漫画の中で、優斗が明里に「SUNO」を紹介しました。最初は半信半疑だった明里も、テキストを入力するだけでクオリティの高い楽曲が生成されるのを目の当たりにして、衝撃を受けました。この体験こそ、SUNOがもたらす音楽革命の第一歩です。
                  </p>
                  
                  <h3 className="text-lg font-bold mt-6">SUNO AIとは？</h3>
                  <p>
                    SUNO AIは、アメリカのスタートアップ企業Suno, Inc.によって開発された、革新的な音楽生成AIです。その最大の特徴は、<strong>テキストで指示するだけで、ボーカルを含む完全な楽曲をわずか数分で生成できる</strong>点にあります。
                  </p>
                  <p>
                    従来、作曲には楽器の演奏スキルや複雑な音楽理論の知識が不可欠でした。しかしSUNOは、作りたい曲のイメージ、雰囲気、ジャンルを言葉で伝えるだけで、プロクオリティのメロディ、ハーモニー、リズム、そして歌声までをも自動で紡ぎ出します。まさに、頭の中にいる専属の作曲家と対話するかのように、音楽を創り出すことができるのです。
                  </p>

                  <h3 className="text-lg font-bold mt-6">なぜ今、SUNOが注目されるのか</h3>
                  <p>
                    これまでも音楽制作を補助するツールは存在しましたが、SUNOが画期的である理由は、その手軽さと生成される楽曲の質の高さにあります。最新バージョンでは、音質や表現力、ボーカルの自然さが飛躍的に向上し、AIが生成したとはにわかには信じがたいレベルに達しています。
                  </p>

                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/10 mt-4">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-primary/20">
                          <th className="text-left py-2 font-bold">機能</th>
                          <th className="text-left py-2 font-bold">従来の音楽制作</th>
                          <th className="text-left py-2 font-bold">SUNO AI</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-primary/10">
                          <td className="py-2">作曲</td>
                          <td>専門知識と時間が必要</td>
                          <td>テキスト入力でAIが自動生成</td>
                        </tr>
                        <tr className="border-b border-primary/10">
                          <td className="py-2">作詞</td>
                          <td>創造的なスキルが必要</td>
                          <td>AIによる自動生成も可能</td>
                        </tr>
                        <tr className="border-b border-primary/10">
                          <td className="py-2">演奏・歌唱</td>
                          <td>高度な技術と機材が必要</td>
                          <td>AIがリアルなボーカルと演奏を生成</td>
                        </tr>
                        <tr className="border-b border-primary/10">
                          <td className="py-2">制作時間</td>
                          <td>数日から数週間</td>
                          <td>数分から数時間</td>
                        </tr>
                        <tr>
                          <td className="py-2">コスト</td>
                          <td>高価な機材やスタジオ代</td>
                          <td>無料プランから利用可能</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    この表が示すように、SUNOは音楽制作における時間、コスト、スキルの壁を劇的に低くしました。これにより、明里のような音楽への情熱を持つ全ての人が、気軽に自分の作品を生み出せる時代が到来したのです。
                  </p>
                </div>
              </div>
            </Card>

            {/* Manga Placeholder */}
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 min-h-96 flex items-center justify-center hover:shadow-lg transition-all">
              <div className="text-center space-y-4">
                <div className="relative">
                  <Music className="w-16 h-16 text-primary/30 mx-auto" />
                  <div className="absolute inset-0 animate-pulse"></div>
                </div>
                <p className="text-muted-foreground">
                  漫画第21-50ページ：基本機能解説部
                  <br />
                  <span className="text-sm">(画像はここに配置されます)</span>
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Chapter 2 */}
          <TabsContent value="chapter2" className="space-y-6">
            <Card className="p-8 border-primary/20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  第2章：曲の設計図を操る - メタタグと構成の魔法
                </h2>
                <div className="prose prose-sm dark:prose-invert max-w-none space-y-4 text-muted-foreground">
                  <p>
                    明里は、AIが勝手に曲の構成を決めてしまうことに戸惑いました。Aメロから始まり、サビで盛り上がる…そんな当たり前の構成すら、最初はコントロールできませんでした。ここで優斗が紹介したのが、曲の構造をAIに伝えるための魔法の言葉、<strong>「メタタグ（Metatags）」</strong>です。
                  </p>

                  <h3 className="text-lg font-bold mt-6">メタタグとは？</h3>
                  <p>
                    メタタグとは、歌詞の中に埋め込むことで、AIに対して「ここからAメロです」「ここがサビです」といった指示を与えるための特別な記述です。漫画で優斗が説明したように、<code>[Verse]</code>（Aメロ）、<code>[Chorus]</code>（サビ）、<code>[Intro]</code>（イントロ）といったタグを歌詞の各ブロックの先頭に記述することで、AIはそれを理解し、意図した通りの曲構成で音楽を生成してくれます。
                  </p>
                  <p>
                    これはまるで、プログラミングでコンピューターに命令を与える作業に似ています。しかし、覚えるべきタグはそれほど多くありません。基本的なタグをいくつかマスターするだけで、あなたの曲は劇的に進化します。
                  </p>

                  <h3 className="text-lg font-bold mt-6">基本的なメタタグの例</h3>
                  <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-primary/20">
                          <th className="text-left py-2 font-bold">タグ</th>
                          <th className="text-left py-2 font-bold">意味</th>
                          <th className="text-left py-2 font-bold">日本語の呼称</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-primary/10">
                          <td className="py-2"><code>[Intro]</code></td>
                          <td>導入部</td>
                          <td>イントロ</td>
                        </tr>
                        <tr className="border-b border-primary/10">
                          <td className="py-2"><code>[Verse]</code></td>
                          <td>詩、物語部分</td>
                          <td>Aメロ、Bメロ</td>
                        </tr>
                        <tr className="border-b border-primary/10">
                          <td className="py-2"><code>[Pre-Chorus]</code></td>
                          <td>サビの前の準備部分</td>
                          <td>Bメロ、サビ前</td>
                        </tr>
                        <tr className="border-b border-primary/10">
                          <td className="py-2"><code>[Chorus]</code></td>
                          <td>曲の主題となる繰り返し部分</td>
                          <td>サビ</td>
                        </tr>
                        <tr className="border-b border-primary/10">
                          <td className="py-2"><code>[Bridge]</code></td>
                          <td>曲の雰囲気を変える部分</td>
                          <td>Cメロ、ブリッジ</td>
                        </tr>
                        <tr className="border-b border-primary/10">
                          <td className="py-2"><code>[Outro]</code></td>
                          <td>終結部</td>
                          <td>アウトロ</td>
                        </tr>
                        <tr>
                          <td className="py-2"><code>[Instrumental]</code></td>
                          <td>楽器のみの演奏部分</td>
                          <td>間奏</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p>
                    これらのタグを組み合わせることで、「Aメロ → Bメロ → サビ」という王道の構成はもちろん、「イントロ → Aメロ → サビ → 間奏 → Cメロ → 大サビ → アウトロ」といった、より複雑でドラマティックな展開も自由に設計できるのです。
                  </p>
                </div>
              </div>
            </Card>

            {/* Manga Placeholder */}
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 min-h-96 flex items-center justify-center hover:shadow-lg transition-all">
              <div className="text-center space-y-4">
                <div className="relative">
                  <Music className="w-16 h-16 text-primary/30 mx-auto" />
                  <div className="absolute inset-0 animate-pulse"></div>
                </div>
                <p className="text-muted-foreground">
                  漫画第51-80ページ：実践・応用部
                  <br />
                  <span className="text-sm">(画像はここに配置されます)</span>
                </p>
              </div>
            </Card>
          </TabsContent>

          {/* Chapter 3 */}
          <TabsContent value="chapter3" className="space-y-6">
            <Card className="p-8 border-primary/20">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  第3章：神は細部に宿る - 高度な表現で曲を磨き上げる
                </h2>
                <div className="prose prose-sm dark:prose-invert max-w-none space-y-4 text-muted-foreground">
                  <p>
                    メタタグを覚え、曲の骨格を自在に操れるようになった明里。しかし、彼女の探求はそこで終わりませんでした。より感情的に、よりドラマティックに曲を仕上げるため、彼女はさらに高度なテクニックに挑みます。漫画の中で描かれた<code>[Build Up]</code>（盛り上げる）や<code>[Key Change]</code>（転調）といった表現は、SUNOのポテンシャルを最大限に引き出すための鍵となります。
                  </p>

                  <h3 className="text-lg font-bold mt-6">表現を豊かにするアドバンスト・タグ</h3>
                  <p>
                    基本的な構成タグに加えて、SUNOはさらに細かいニュアンスを伝えるためのタグを認識します。これらを活用することで、曲の感情の波をより繊細にコントロールすることが可能になります。
                  </p>

                  <h4 className="font-bold">感情の起伏を創り出す</h4>
                  <p>
                    <code>[Build Up]</code>タグを使えば、サビに向かって徐々に楽器の数や音量を増やし、聴き手の期待感を高めることができます。逆に<code>[Drop]</code>や<code>[Break]</code>といったタグで、一度音を引いて静寂を作り出し、その後の展開を際立たせることも可能です。
                  </p>

                  <h4 className="font-bold">ボーカルスタイルを操る</h4>
                  <p>
                    <code>(whisper)</code>（ささやくように）、<code>(powerful vocal)</code>（力強く）といった指示を歌詞に添えることで、ボーカルの表現力を細かく指定できます。明里が「この声、この抑揚！」と感動したように、理想の歌声に近づけることができるのです。
                  </p>

                  <h4 className="font-bold">ドラマを生む転調</h4>
                  <p>
                    <code>[Key Change]</code>は、曲のクライマックスでキーを上げて、感動や高揚感を一気に引き上げるための強力な武器です。J-POPのヒット曲でも多用されるこのテクニックを、SUNOではタグ一つで実現できます。
                  </p>

                  <h3 className="text-lg font-bold mt-6">Song Editorと「Extend」機能</h3>
                  <p>
                    SUNOの真価は、一度生成した曲をさらに編集・拡張できる点にもあります。漫画の後半で明里が没頭していたように、「Extend（延長）」機能を使えば、生成された曲の続きを新たに作り出すことができます。
                  </p>
                  <p>
                    例えば、最初に1分間の<code>[Verse]</code>と<code>[Chorus]</code>を生成したとします。その曲が気に入れば、「Extend」ボタンを押し、次のブロックとして<code>[Verse 2]</code>や<code>[Bridge]</code>の歌詞を入力して続きを生成させることができます。このプロセスを繰り返すことで、短い断片から4分、5分といった長尺の楽曲へと育て上げていくことが可能です。この試行錯誤のプロセスこそ、AIと「共作」するクリエイティブな喜びに満ちています。
                  </p>
                </div>
              </div>
            </Card>

            {/* Manga Placeholder */}
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 min-h-96 flex items-center justify-center">
              <div className="text-center space-y-4">
                <Music className="w-16 h-16 text-primary/30 mx-auto" />
                <p className="text-muted-foreground">
                  漫画第81-100ページ：結論・展開部
                  <br />
                  <span className="text-sm">(画像はここに配置されます)</span>
                </p>
              </div>
            </Card>

            {/* Conclusion */}
            <Card className="p-8 border-primary/20 bg-gradient-to-br from-accent/5 to-primary/5">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">おわりに</h3>
                <div className="prose prose-sm dark:prose-invert max-w-none space-y-4 text-muted-foreground">
                  <p>
                    物語の終わり、明里は希望に満ちた表情で未来を見つめていました。彼女の音楽は、まだ始まったばかりです。
                  </p>
                  <p>
                    この本を手に取ったあなたも、きっと明里と同じように、心の中にたくさんのメロディや物語を秘めているはずです。SUNO AIは、その宝箱を開けるための鍵を、そっとあなたの手に握らせてくれます。
                  </p>
                  <p>
                    漫画で描かれたテクニックは、SUNOの持つ広大な可能性のほんの一部に過ぎません。重要なのは、AIを単なる「自動作曲機」としてではなく、自分の創造性を映し出し、拡張してくれる「パートナー」として捉えることです。
                  </p>
                  <p>
                    もう、「才能がないから」と諦める必要はありません。さあ、あなたのスマートフォンやPCでSUNOを開き、最初の言葉を入力してみてください。そこから生まれる一曲が、あなたの世界を、そしてもしかしたら誰かの世界をも、鮮やかに彩るかもしれません。
                  </p>
                  <p className="text-lg font-bold text-primary">
                    あなたの音楽が、今、始まります。
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
