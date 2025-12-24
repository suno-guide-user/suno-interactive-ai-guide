import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Circle, Download, BookOpen } from 'lucide-react';
import { toast } from 'sonner';

interface Task {
  id: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  instructions: string[];
  tips: string[];
}

export default function WorksheetPage() {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [userNotes, setUserNotes] = useState<Record<number, string>>({});

  const tasks: Task[] = [
    {
      id: 1,
      title: '基本的なメタタグを使ってみよう',
      description: 'Intro、Verse、Chorus、Outroの4つのタグを使った簡単な曲を作成する',
      difficulty: 'beginner',
      instructions: [
        '「Intro」「Verse」「Chorus」「Outro」のメタタグを使用',
        'Verseには2行の歌詞を書く',
        'Chorusには3行の歌詞を書く',
        'SUNOで生成して、どのように曲が構成されるか確認する',
      ],
      tips: [
        'メタタグは必ず大文字で記述してください',
        '各セクションの前に記述します',
        'シンプルな歌詞から始めることをお勧めします',
      ],
    },
    {
      id: 2,
      title: 'Pre-ChorusとBridgeを追加しよう',
      description: 'より複雑な曲構成に挑戦する',
      difficulty: 'intermediate',
      instructions: [
        'Pre-Chorusタグを追加してサビ前の盛り上げを作る',
        'Bridgeタグを追加してCメロを作成',
        '全体で最低3分間の曲になるように構成',
        '生成された曲を聴いて、構成の効果を確認',
      ],
      tips: [
        'Pre-Chorusはサビへの期待感を高めるために使用',
        'Bridgeは曲の雰囲気を変えるのに効果的',
        '同じ歌詞の繰り返しは避けて、変化をつけましょう',
      ],
    },
    {
      id: 3,
      title: 'ボーカルモディファイアを活用しよう',
      description: 'ボーカルの表現力をコントロールする',
      difficulty: 'intermediate',
      instructions: [
        '(whisper)、(powerful vocal)などのモディファイアを使用',
        'セクションごとに異なるボーカルスタイルを指定',
        '同じ歌詞でも、ボーカルスタイルで印象が変わることを確認',
        '最も効果的だったモディファイアの組み合わせをメモ',
      ],
      tips: [
        'モディファイアは括弧内に記述します',
        '複数のモディファイアを組み合わせることも可能',
        'セクションの雰囲気に合わせて選択しましょう',
      ],
    },
    {
      id: 4,
      title: 'Key Changeで感動を生み出そう',
      description: '転調を使ってクライマックスを作る',
      difficulty: 'advanced',
      instructions: [
        'Bridge後に[Key Change]を使用',
        'キーを上げることで、感動や高揚感を演出',
        '元のキーと転調後のキーの違いを聴き比べ',
        '転調のタイミングが曲全体に与える影響を分析',
      ],
      tips: [
        '転調は通常、クライマックス前に使用されます',
        'J-POPでよく使われるテクニックです',
        '転調後の歌詞は、より力強い表現を使うと効果的',
      ],
    },
    {
      id: 5,
      title: 'オリジナル曲を完成させよう',
      description: '学んだ全てのテクニックを使ってオリジナル曲を作成',
      difficulty: 'advanced',
      instructions: [
        'テーマを決める（恋愛、応援、感動など）',
        'メタタグ、ボーカルモディファイア、転調を組み合わせ',
        '最低4分間の完成した曲を目指す',
        '何度も試行錯誤して、最高の1曲を完成させる',
      ],
      tips: [
        '最初のテーマ決めが重要です',
        '試行錯誤を恐れずに、何度も挑戦してください',
        'SUNOのExtend機能を使って、曲を段階的に拡張できます',
      ],
    },
  ];

  const toggleTask = (taskId: number) => {
    setCompletedTasks((prev) =>
      prev.includes(taskId)
        ? prev.filter((id) => id !== taskId)
        : [...prev, taskId]
    );
    toast.success(
      completedTasks.includes(taskId) ? 'タスクをマーク解除しました' : 'タスクを完了しました！'
    );
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return '初級';
      case 'intermediate':
        return '中級';
      case 'advanced':
        return '上級';
      default:
        return '';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'advanced':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return '';
    }
  };

  const completionRate = Math.round(
    (completedTasks.length / tasks.length) * 100
  );

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-b from-accent/10 to-background">
        <div className="container max-w-5xl">
          <div className="text-center space-y-4">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
              <p className="text-sm font-medium text-accent flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                実践的な学習課題
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              SUNO マスターワークシート
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              段阶的なタスクに取り組むことで、SUNOのスキルを確実に身につけられます。
            </p>
          </div>
        </div>
      </section>

      <div className="container max-w-5xl py-12">

        {/* Progress */}
        <Card className="p-6 border-primary/20 mb-8 bg-gradient-to-r from-primary/5 to-accent/5 hover:shadow-lg transition-all">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold">学習進掗</h2>
              <span className="text-2xl font-bold text-primary">
                {completionRate}%
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-3 overflow-hidden border border-primary/20">
              <div
                className="bg-gradient-to-r from-primary to-accent h-full transition-all duration-300 shadow-lg"
                style={{ width: `${completionRate}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground">
              {completedTasks.length} / {tasks.length} タスク完了
            </p>
          </div>
        </Card>

        {/* Tasks */}
        <div className="space-y-6">
          {tasks.map((task) => (
            <Card
              key={task.id}
              className={`p-6 border-primary/20 transition-all duration-300 hover:shadow-lg ${
                completedTasks.includes(task.id)
                  ? 'bg-primary/5 opacity-75'
                  : 'bg-gradient-to-br from-background to-primary/5'
              }`}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="flex-shrink-0 mt-1 transition-transform hover:scale-110"
                  >
                    {completedTasks.includes(task.id) ? (
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    ) : (
                      <Circle className="w-6 h-6 text-muted-foreground" />
                    )}
                  </button>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold">{task.title}</h3>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${getDifficultyColor(
                          task.difficulty
                        )}`}
                      >
                        {getDifficultyLabel(task.difficulty)}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{task.description}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-6 ml-10">
                  {/* Instructions */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm">📋 手順</h4>
                    <ol className="text-sm space-y-2 text-muted-foreground">
                      {task.instructions.map((instruction, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="font-bold text-primary flex-shrink-0">
                            {index + 1}.
                          </span>
                          <span>{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Tips */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-sm">💡 ヒント</h4>
                    <ul className="text-sm space-y-2 text-muted-foreground">
                      {task.tips.map((tip, index) => (
                        <li key={index} className="flex gap-2">
                          <span className="text-accent flex-shrink-0">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Notes */}
                <div className="ml-10 space-y-2">
                  <label className="text-sm font-bold">
                    📝 学習ノート
                  </label>
                  <Textarea
                    placeholder="このタスクで学んだことや、気づいたことをメモしてください..."
                    value={userNotes[task.id] || ''}
                    onChange={(e) =>
                      setUserNotes((prev) => ({
                        ...prev,
                        [task.id]: e.target.value,
                      }))
                    }
                    className="min-h-24 bg-muted/50 border-primary/20"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-12 p-8 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 space-y-4 hover:shadow-lg transition-all">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">
              全てのタスクを完了しましたか？
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              これであなたはSUNO マスター！
              <br />
              今からあなたのオリジナル曲を世界に発表しましょう。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 font-bold">
                <Download className="w-4 h-4" />
                ワークシートをダウンロード
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 font-bold">
                メタタグエディタに戻る
              </Button>
            </div>
          </div>
        </Card>

        {/* Completion Message */}
        {completionRate === 100 && (
          <Card className="mt-8 p-8 border-2 border-primary bg-gradient-to-r from-primary/10 to-accent/10 text-center space-y-4 hover:shadow-xl transition-all">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              🎉 おめでとうございます！
            </h2>
            <p className="text-lg text-muted-foreground">
              全てのタスクを完了しました。
              <br />
              あなたはSUNOの全機能をマスターしました！
              <br />
              <br />
              さあ、あなたの創造的な旅を始めましょう。
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}