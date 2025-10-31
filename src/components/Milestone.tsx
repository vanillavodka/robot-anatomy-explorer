import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MilestoneImage {
  url: string;
  caption: string;
}

interface MilestoneEvent {
  id: string;
  year: string;
  month: string;
  title: string;
  description: string;
  images: MilestoneImage[];
}

const milestones: MilestoneEvent[] = [
  {
    id: "1",
    year: "2020",
    month: "03",
    title: "公司成立",
    description: "在深圳成立，专注智能机器人研发，组建核心技术团队",
    images: [
      { url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80", caption: "创始团队合影" },
      { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80", caption: "办公环境" },
      { url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", caption: "首次团建" }
    ]
  },
  {
    id: "2",
    year: "2021",
    month: "06",
    title: "首款产品发布",
    description: "智能服务机器人Alpha 1.0正式发布，获得市场广泛认可",
    images: [
      { url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80", caption: "产品发布会" },
      { url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", caption: "产品展示" },
      { url: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&q=80", caption: "客户体验" }
    ]
  },
  {
    id: "3",
    year: "2022",
    month: "09",
    title: "A轮融资",
    description: "完成5000万美元A轮融资，加速产品研发和市场拓展",
    images: [
      { url: "https://images.unsplash.com/photo-1560472355-536de3962603?w=800&q=80", caption: "签约仪式" },
      { url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80", caption: "战略会议" },
      { url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&q=80", caption: "团队庆祝" }
    ]
  },
  {
    id: "4",
    year: "2023",
    month: "12",
    title: "国际化布局",
    description: "在美国、欧洲设立分公司，产品销往全球50多个国家",
    images: [
      { url: "https://images.unsplash.com/photo-1569098644584-210bcd375b59?w=800&q=80", caption: "国际展会" },
      { url: "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?w=800&q=80", caption: "海外办公室" },
      { url: "https://images.unsplash.com/photo-1496200186974-4293800e2c20?w=800&q=80", caption: "全球团队" }
    ]
  },
  {
    id: "5",
    year: "2024",
    month: "08",
    title: "技术突破",
    description: "AI算法性能提升300%，发布第三代智能机器人平台",
    images: [
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", caption: "研发中心" },
      { url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", caption: "技术团队" },
      { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", caption: "技术交流" }
    ]
  }
];

export const Milestone = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<MilestoneEvent>(milestones[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedMilestone.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === selectedMilestone.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleMilestoneClick = (milestone: MilestoneEvent) => {
    setSelectedMilestone(milestone);
    setCurrentImageIndex(0);
  };

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="text-accent font-medium">发展历程</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent mb-4">
            企业重大事件里程碑
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </div>

        {/* Timeline */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent hidden md:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-0">
              {milestones.map((milestone, index) => (
                <button
                  key={milestone.id}
                  onClick={() => handleMilestoneClick(milestone)}
                  className={`relative flex flex-col items-center group transition-all duration-300 ${
                    selectedMilestone.id === milestone.id ? 'scale-110' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Node */}
                  <div className={`w-24 h-24 rounded-full border-4 flex items-center justify-center mb-3 transition-all duration-500 ${
                    selectedMilestone.id === milestone.id 
                      ? 'border-primary bg-primary/20 glow-strong scale-110' 
                      : 'border-primary/30 bg-card/50 group-hover:border-primary/60 group-hover:glow'
                  }`}>
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${
                        selectedMilestone.id === milestone.id ? 'text-primary' : 'text-muted-foreground'
                      }`}>
                        {milestone.year}
                      </div>
                      <div className={`text-xs ${
                        selectedMilestone.id === milestone.id ? 'text-primary' : 'text-muted-foreground'
                      }`}>
                        {milestone.month}月
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <div className={`text-sm font-semibold text-center transition-colors ${
                    selectedMilestone.id === milestone.id ? 'text-primary' : 'text-foreground'
                  }`}>
                    {milestone.title}
                  </div>

                  {/* Active indicator */}
                  {selectedMilestone.id === milestone.id && (
                    <div className="absolute -bottom-2 w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Display */}
        <div className="max-w-5xl mx-auto">
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden glow animate-fade-in">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-[400px] bg-muted/20">
                <img
                  src={selectedMilestone.images[currentImageIndex].url}
                  alt={selectedMilestone.images[currentImageIndex].caption}
                  className="w-full h-full object-cover"
                />
                
                {/* Image navigation */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <Button
                    onClick={handlePrevImage}
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 glow"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    onClick={handleNextImage}
                    size="icon"
                    variant="secondary"
                    className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 glow"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {selectedMilestone.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex 
                          ? 'w-8 bg-primary glow' 
                          : 'bg-primary/30 hover:bg-primary/60'
                      }`}
                    />
                  ))}
                </div>

                {/* Image caption */}
                <div className="absolute bottom-12 left-0 right-0 text-center">
                  <Badge className="bg-background/80 backdrop-blur-sm text-foreground border-primary/30">
                    {selectedMilestone.images[currentImageIndex].caption}
                  </Badge>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-8 flex flex-col justify-center relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
                
                <div className="relative z-10 space-y-6">
                  <div>
                    <Badge className="mb-4 bg-primary/20 text-primary border-primary">
                      {selectedMilestone.year}年 {selectedMilestone.month}月
                    </Badge>
                    <h3 className="text-3xl font-bold text-foreground mb-4">
                      {selectedMilestone.title}
                    </h3>
                    <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-4" />
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {selectedMilestone.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 pt-4">
                    <div className="flex-1 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="text-2xl font-bold text-primary">{currentImageIndex + 1}</div>
                      <div className="text-xs text-muted-foreground">当前图片</div>
                    </div>
                    <div className="flex-1 p-4 rounded-lg bg-accent/5 border border-accent/20">
                      <div className="text-2xl font-bold text-accent">{selectedMilestone.images.length}</div>
                      <div className="text-xs text-muted-foreground">总图片数</div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-primary/20 rounded-br-3xl" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
