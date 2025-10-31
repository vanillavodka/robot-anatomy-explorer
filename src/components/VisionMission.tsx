import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Lightbulb, Rocket, Users, Zap } from "lucide-react";

const visionMissionItems = [
  {
    id: 1,
    icon: Target,
    title: "技术创新引领",
    description: "打造业界领先的AI机器人平台，突破核心技术壁垒",
    color: "primary"
  },
  {
    id: 2,
    icon: Rocket,
    title: "全球化布局",
    description: "让智能机器人服务走进千家万户，覆盖全球市场",
    color: "accent"
  },
  {
    id: 3,
    icon: Users,
    title: "人机协作新时代",
    description: "推动人工智能与机器人技术深度融合，开创协作新纪元",
    color: "primary"
  },
  {
    id: 4,
    icon: Lightbulb,
    title: "产业赋能升级",
    description: "用科技创新赋能产业升级，提升人类生活品质",
    color: "accent"
  },
  {
    id: 5,
    icon: Zap,
    title: "可持续发展",
    description: "构建可持续的智能生态系统，实现技术与社会的和谐发展",
    color: "primary"
  }
];

export const VisionMission = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Large Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90" />
      
      {/* Animated tech grid */}
      <div className="absolute inset-0 tech-grid opacity-10" />
      
      {/* Content */}
      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">企业愿景与使命</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-6 drop-shadow-2xl">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              智创未来
            </span>
            <span className="text-foreground"> · </span>
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
              智领全球
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto drop-shadow-lg">
            成为全球领先的智能机器人解决方案提供商，通过创新技术推动人机协作新纪元
          </p>
        </div>

        {/* Vision & Mission Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {visionMissionItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.id}
                className={`group relative overflow-hidden border-${item.color}/30 bg-background/40 backdrop-blur-md hover:bg-background/60 transition-all duration-500 hover:scale-105 hover:border-${item.color} animate-fade-in ${
                  index === 4 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${item.color}/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Animated corner */}
                <div className={`absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-${item.color}/40 group-hover:border-${item.color} transition-all duration-500 group-hover:w-full group-hover:h-full`} />
                
                <CardContent className="relative z-10 p-8">
                  {/* Icon */}
                  <div className={`mb-6 p-4 rounded-2xl bg-${item.color}/20 border border-${item.color}/40 inline-block glow group-hover:animate-pulse-glow`}>
                    <Icon className={`w-10 h-10 text-${item.color}`} />
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-foreground drop-shadow-lg">
                        {item.title}
                      </h3>
                      <div className={`w-2 h-2 rounded-full bg-${item.color} animate-pulse-glow`} />
                    </div>
                    
                    <div className={`h-px bg-gradient-to-r from-${item.color}/50 to-transparent`} />
                    
                    <p className="text-foreground/80 leading-relaxed drop-shadow-md">
                      {item.description}
                    </p>
                  </div>

                  {/* Number badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{item.id}</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary glow animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};
