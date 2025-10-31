import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
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

        {/* Event Cards Grid */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((milestone, index) => (
            <Card
              key={milestone.id}
              onClick={() => handleMilestoneClick(milestone)}
              className={`group relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 animate-fade-in ${
                selectedMilestone.id === milestone.id
                  ? 'border-primary glow-strong ring-2 ring-primary/50'
                  : 'border-primary/20 hover:border-primary/60'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url('${milestone.images[0].url}')`,
                }}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 transition-all duration-500 ${
                selectedMilestone.id === milestone.id
                  ? 'bg-gradient-to-br from-primary/90 via-background/85 to-background/80'
                  : 'bg-gradient-to-br from-background/95 via-background/90 to-background/85 group-hover:from-background/90 group-hover:via-background/85 group-hover:to-background/80'
              }`} />

              {/* Animated corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/40 group-hover:border-primary transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-accent/40 group-hover:border-accent transition-colors duration-500" />

              <CardContent className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[280px]">
                {/* Date Badge */}
                <div className="flex justify-between items-start mb-4">
                  <Badge className={`transition-all duration-300 ${
                    selectedMilestone.id === milestone.id
                      ? 'bg-primary/30 text-primary border-primary'
                      : 'bg-background/50 text-foreground border-primary/30'
                  }`}>
                    {milestone.year}年{milestone.month}月
                  </Badge>
                  {selectedMilestone.id === milestone.id && (
                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse-glow" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground drop-shadow-lg group-hover:text-primary transition-colors duration-300">
                    {milestone.title}
                  </h3>
                  <div className="h-px bg-gradient-to-r from-primary/50 via-accent/30 to-transparent" />
                  <p className="text-foreground/90 leading-relaxed drop-shadow-md text-sm">
                    {milestone.description}
                  </p>
                </div>

                {/* Image Count */}
                <div className="flex items-center gap-2 mt-4 text-xs">
                  <div className="flex gap-1">
                    {milestone.images.slice(0, 3).map((_, idx) => (
                      <div key={idx} className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                    ))}
                  </div>
                  <span className="text-muted-foreground">{milestone.images.length} 张图片</span>
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-xs text-primary/70">点击查看详情</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detail Panel */}
        <div className="max-w-6xl mx-auto mt-16">
          <Card className="border-primary/30 bg-card/50 backdrop-blur-sm overflow-hidden glow animate-fade-in">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Gallery - Takes 3 columns */}
              <div className="md:col-span-3 relative h-[400px] bg-muted/20">
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

              {/* Info Section - Takes 2 columns */}
              <div className="md:col-span-2 p-8 flex flex-col justify-center relative bg-gradient-to-br from-primary/5 to-transparent">
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

                  {/* Image navigation info */}
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
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
