import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Calendar, Image as ImageIcon } from "lucide-react";
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
  highlight: string;
}

const milestones: MilestoneEvent[] = [
  {
    id: "1",
    year: "2020",
    month: "03",
    title: "公司成立",
    description: "在深圳成立，专注智能机器人研发，组建核心技术团队，开启智能制造新征程。",
    highlight: "开启征程",
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
    description: "智能服务机器人Alpha 1.0正式发布，获得市场广泛认可，首年销售额突破5000万。",
    highlight: "产品突破",
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
    description: "完成5000万美元A轮融资，加速产品研发和市场拓展，团队规模扩大至300人。",
    highlight: "资本助力",
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
    description: "在美国、欧洲设立分公司，产品销往全球50多个国家，国际市场份额达35%。",
    highlight: "全球扩张",
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
    description: "AI算法性能提升300%，发布第三代智能机器人平台，获得15项国际专利认证。",
    highlight: "技术领先",
    images: [
      { url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80", caption: "研发中心" },
      { url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80", caption: "技术团队" },
      { url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", caption: "技术交流" }
    ]
  }
];

export const Milestone = () => {
  const [expandedId, setExpandedId] = useState<string | null>(milestones[0].id);
  const [selectedImageIndex, setSelectedImageIndex] = useState<Record<string, number>>({});

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleImageClick = (milestoneId: string, imageIndex: number) => {
    setSelectedImageIndex(prev => ({ ...prev, [milestoneId]: imageIndex }));
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

        {/* Vertical Timeline */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const isExpanded = expandedId === milestone.id;
              const currentImageIndex = selectedImageIndex[milestone.id] || 0;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={milestone.id}
                  className={`relative animate-fade-in ${isLeft ? 'md:pr-[50%]' : 'md:pl-[50%]'}`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Timeline node */}
                  <div className="absolute left-8 md:left-1/2 top-8 -translate-x-1/2 z-20">
                    <div 
                      className={`w-16 h-16 rounded-full border-4 flex items-center justify-center cursor-pointer transition-all duration-500 ${
                        isExpanded
                          ? 'border-primary bg-primary/30 glow-strong scale-125'
                          : 'border-primary/40 bg-background hover:border-primary hover:scale-110 hover:glow'
                      }`}
                      onClick={() => toggleExpand(milestone.id)}
                    >
                      <div className="text-center">
                        <div className={`text-lg font-bold ${isExpanded ? 'text-primary' : 'text-muted-foreground'}`}>
                          {milestone.year.slice(-2)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <Card
                    className={`ml-24 md:ml-0 border-primary/30 bg-card/50 backdrop-blur-sm transition-all duration-500 cursor-pointer ${
                      isExpanded ? 'border-primary glow-strong' : 'hover:border-primary/60 hover:glow'
                    }`}
                    onClick={() => !isExpanded && toggleExpand(milestone.id)}
                  >
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className="bg-primary/20 text-primary border-primary">
                              {milestone.year}年{milestone.month}月
                            </Badge>
                            <Badge className="bg-accent/20 text-accent border-accent">
                              {milestone.highlight}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {milestone.title}
                          </h3>
                          <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-3" />
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(milestone.id);
                          }}
                          className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </Button>
                      </div>

                      {/* Expandable Image Gallery */}
                      {isExpanded && (
                        <div className="mt-6 animate-fade-in">
                          {/* Main Image */}
                          <div className="relative h-80 rounded-lg overflow-hidden mb-4 glow">
                            <img
                              src={milestone.images[currentImageIndex].url}
                              alt={milestone.images[currentImageIndex].caption}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                              <Badge className="bg-background/80 backdrop-blur-sm text-foreground border-primary/30">
                                <ImageIcon className="w-3 h-3 mr-2" />
                                {milestone.images[currentImageIndex].caption}
                              </Badge>
                            </div>
                          </div>

                          {/* Thumbnail Grid */}
                          <div className="grid grid-cols-3 gap-3">
                            {milestone.images.map((image, idx) => (
                              <div
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleImageClick(milestone.id, idx);
                                }}
                                className={`relative h-24 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                                  currentImageIndex === idx
                                    ? 'ring-2 ring-primary glow scale-105'
                                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                                }`}
                              >
                                <img
                                  src={image.url}
                                  alt={image.caption}
                                  className="w-full h-full object-cover"
                                />
                                {currentImageIndex === idx && (
                                  <div className="absolute inset-0 bg-primary/20" />
                                )}
                              </div>
                            ))}
                          </div>

                          {/* Image counter */}
                          <div className="mt-4 flex justify-center gap-2">
                            {milestone.images.map((_, idx) => (
                              <div
                                key={idx}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                  currentImageIndex === idx ? 'w-8 bg-primary glow' : 'w-1.5 bg-primary/30'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
