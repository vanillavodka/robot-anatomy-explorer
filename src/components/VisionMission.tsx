import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Target, Lightbulb } from "lucide-react";

export const VisionMission = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">关于我们</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-4">
            企业愿景与使命
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Vision Card with Background Image */}
          <Card className="group relative overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary transition-all duration-500 animate-fade-in h-[500px]">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80')",
              }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60 group-hover:from-background/90 group-hover:via-background/70 group-hover:to-background/50 transition-all duration-700" />
            
            {/* Animated light effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 -left-20 w-40 h-full bg-gradient-to-r from-transparent via-primary/30 to-transparent skew-x-12 animate-slide-in-right" />
            </div>
            
            <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary/20 border border-primary/40 glow backdrop-blur-sm group-hover:animate-pulse-glow">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground drop-shadow-lg">企业愿景</h3>
                </div>
                
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p className="text-lg font-medium drop-shadow-md backdrop-blur-sm bg-background/20 p-3 rounded-lg border border-primary/20">
                    成为全球领先的智能机器人解决方案提供商，通过创新技术推动人机协作新纪元。
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3 backdrop-blur-sm bg-background/10 p-2 rounded-lg hover:bg-background/30 transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent glow mt-2" />
                      <span className="drop-shadow-md">打造业界领先的AI机器人平台</span>
                    </li>
                    <li className="flex items-start gap-3 backdrop-blur-sm bg-background/10 p-2 rounded-lg hover:bg-background/30 transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent glow mt-2" />
                      <span className="drop-shadow-md">让智能机器人服务走进千家万户</span>
                    </li>
                    <li className="flex items-start gap-3 backdrop-blur-sm bg-background/10 p-2 rounded-lg hover:bg-background/30 transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent glow mt-2" />
                      <span className="drop-shadow-md">引领人工智能与机器人技术融合创新</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-primary/20 rounded-br-3xl" />
            </CardContent>
          </Card>

          {/* Mission Card with Background Image */}
          <Card className="group relative overflow-hidden border-accent/30 bg-card/50 backdrop-blur-sm hover:border-accent transition-all duration-500 animate-fade-in h-[500px]" style={{ animationDelay: "0.2s" }}>
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80')",
              }}
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/60 group-hover:from-background/90 group-hover:via-background/70 group-hover:to-background/50 transition-all duration-700" />
            
            {/* Animated light effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 -right-20 w-40 h-full bg-gradient-to-l from-transparent via-accent/30 to-transparent -skew-x-12 animate-slide-in-right" />
            </div>
            
            <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-accent/20 border border-accent/40 glow backdrop-blur-sm group-hover:animate-pulse-glow">
                    <Lightbulb className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground drop-shadow-lg">企业使命</h3>
                </div>
                
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p className="text-lg font-medium drop-shadow-md backdrop-blur-sm bg-background/20 p-3 rounded-lg border border-accent/20">
                    用科技创新赋能产业升级，让智能机器人成为提升人类生活品质的得力助手。
                  </p>
                  <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start gap-3 backdrop-blur-sm bg-background/10 p-2 rounded-lg hover:bg-background/30 transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary glow mt-2" />
                      <span className="drop-shadow-md">持续创新，突破技术边界</span>
                    </li>
                    <li className="flex items-start gap-3 backdrop-blur-sm bg-background/10 p-2 rounded-lg hover:bg-background/30 transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary glow mt-2" />
                      <span className="drop-shadow-md">以客户需求为导向，提供优质服务</span>
                    </li>
                    <li className="flex items-start gap-3 backdrop-blur-sm bg-background/10 p-2 rounded-lg hover:bg-background/30 transition-all duration-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary glow mt-2" />
                      <span className="drop-shadow-md">推动智能制造与服务机器人产业发展</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 left-0 w-24 h-24 border-l-2 border-b-2 border-accent/20 rounded-bl-3xl" />
            </CardContent>
          </Card>
        </div>

        {/* Bottom accent line */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary glow animate-pulse-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};
