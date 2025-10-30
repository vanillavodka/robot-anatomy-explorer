import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import robotMain from "@/assets/robot-main.png";

const TypewriterText = ({ text, isActive }: { text: string; isActive: boolean }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setDisplayedText("");
      setCurrentIndex(0);
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [isActive, currentIndex, text]);

  return <span>{displayedText}</span>;
};

interface ComponentInfo {
  id: string;
  name: string;
  title: string;
  description: string;
  specs: string[];
  position: { top: string; left: string };
}

const components: ComponentInfo[] = [
  {
    id: "head",
    name: "智能视觉系统",
    title: "AI视觉识别模块",
    description: "配备高精度摄像头和先进的AI算法，实现360度环境感知和物体识别",
    specs: ["4K高清摄像头", "实时物体检测", "面部识别技术", "夜视功能"],
    position: { top: "15%", left: "50%" }
  },
  {
    id: "torso",
    name: "核心处理单元",
    title: "中央控制系统",
    description: "搭载最新一代AI芯片，提供强大的计算能力和数据处理性能",
    specs: ["AI神经网络处理器", "16GB内存", "实时数据分析", "云端连接"],
    position: { top: "35%", left: "50%" }
  },
  {
    id: "left-arm",
    name: "精密机械臂",
    title: "左臂执行系统",
    description: "7自由度机械臂，配备力矩传感器，实现精确的物体抓取和操作",
    specs: ["7DOF关节", "5kg负载能力", "力反馈控制", "防碰撞保护"],
    position: { top: "35%", left: "30%" }
  },
  {
    id: "right-arm",
    name: "精密机械臂",
    title: "右臂执行系统",
    description: "对称设计的机械臂系统，可独立或协同完成复杂操作任务",
    specs: ["7DOF关节", "5kg负载能力", "力反馈控制", "防碰撞保护"],
    position: { top: "35%", left: "70%" }
  },
  {
    id: "legs",
    name: "平衡移动系统",
    title: "智能行走模块",
    description: "动态平衡算法配合高精度电机，实现平稳的双足行走和复杂地形适应",
    specs: ["动态平衡控制", "自适应步态", "障碍物规避", "爬坡能力"],
    position: { top: "65%", left: "50%" }
  },
  {
    id: "base",
    name: "能源管理系统",
    title: "动力供应模块",
    description: "高效能源管理系统，支持快速充电和长时间续航",
    specs: ["智能电池管理", "8小时续航", "快充支持", "能耗优化"],
    position: { top: "85%", left: "50%" }
  }
];

export const RobotShowcase = () => {
  const [selectedComponent, setSelectedComponent] = useState<ComponentInfo | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 tech-grid opacity-30" />
      
      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line opacity-20" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            智能机器人系统
          </h1>
          <p className="text-xl text-muted-foreground">
            点击各组件了解详细功能
          </p>
        </div>

        {/* Robot Display */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-video">
            <img 
              src={robotMain} 
              alt="Robot" 
              className="w-full h-full object-contain drop-shadow-2xl"
            />
            
            {/* Interactive hotspots */}
            {components.map((component) => {
              const isHovered = hoveredId === component.id;
              const isSelected = selectedComponent?.id === component.id;
              
              // Calculate line direction based on position
              const topPercent = parseFloat(component.position.top);
              const leftPercent = parseFloat(component.position.left);
              const lineDirection = topPercent < 50 ? 'down' : 'up';
              const textPosition = leftPercent < 30 ? 'right' : leftPercent > 70 ? 'left' : 'center';
              
              return (
                <div key={component.id}>
                  <button
                    className={`absolute w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full 
                      border-2 border-primary bg-primary/20 backdrop-blur-sm
                      transition-all duration-300 hover:scale-125 hover:bg-primary/40 z-20
                      ${isHovered ? 'pulse-glow scale-125' : 'glow'}
                      ${isSelected ? 'bg-primary/60 scale-150' : ''}`}
                    style={{ top: component.position.top, left: component.position.left }}
                    onClick={() => setSelectedComponent(component)}
                    onMouseEnter={() => setHoveredId(component.id)}
                    onMouseLeave={() => setHoveredId(null)}
                  >
                    <div className="absolute inset-0 rounded-full bg-primary/50 animate-ping" />
                    <div className="relative w-full h-full rounded-full border-2 border-accent" />
                  </button>

                  {/* Dashed polyline with text on line */}
                  {isHovered && !selectedComponent && (
                    <svg 
                      className="absolute pointer-events-none z-10"
                      style={{ 
                        top: component.position.top, 
                        left: component.position.left,
                        width: '400px',
                        height: '200px',
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {/* Dashed polyline path */}
                      <polyline
                        points={
                          lineDirection === 'down' && textPosition === 'right' 
                            ? "200,100 200,150 300,150"
                            : lineDirection === 'down' && textPosition === 'left'
                            ? "200,100 200,150 100,150"
                            : lineDirection === 'down' && textPosition === 'center'
                            ? "200,100 200,150 250,150"
                            : lineDirection === 'up' && textPosition === 'right'
                            ? "200,100 200,50 300,50"
                            : lineDirection === 'up' && textPosition === 'left'
                            ? "200,100 200,50 100,50"
                            : "200,100 200,50 250,50"
                        }
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="2"
                        strokeDasharray="8 4"
                        className="animate-fade-in"
                        style={{
                          filter: 'drop-shadow(0 0 4px hsl(var(--primary) / 0.6))'
                        }}
                      />
                      
                      {/* Text on the line with typewriter effect */}
                      <text
                        x={textPosition === 'right' ? '305' : textPosition === 'left' ? '95' : '255'}
                        y={lineDirection === 'down' ? '155' : '55'}
                        fill="hsl(var(--primary))"
                        className="font-mono text-sm font-bold"
                        textAnchor={textPosition === 'left' ? 'end' : 'start'}
                        style={{
                          filter: 'drop-shadow(0 0 8px hsl(var(--primary) / 0.8))',
                          letterSpacing: '0.05em'
                        }}
                      >
                        <TypewriterText text={component.name} isActive={isHovered} />
                      </text>
                      
                      {/* Blinking cursor */}
                      <rect
                        x={textPosition === 'right' ? '305' : textPosition === 'left' ? '90' : '255'}
                        y={lineDirection === 'down' ? '145' : '45'}
                        width="2"
                        height="12"
                        fill="hsl(var(--accent))"
                        className="animate-pulse"
                      >
                        <animate
                          attributeName="opacity"
                          values="1;0;1"
                          dur="1s"
                          repeatCount="indefinite"
                        />
                      </rect>
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Component Info Panel */}
        {selectedComponent && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <Card className="max-w-2xl w-full bg-card border-primary glow-strong p-8 relative animate-slide-in-right">
              <button
                onClick={() => setSelectedComponent(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-accent transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="space-y-6">
                <div>
                  <Badge className="mb-2 bg-primary/20 text-primary border-primary">
                    {selectedComponent.name}
                  </Badge>
                  <h2 className="text-3xl font-bold text-foreground">
                    {selectedComponent.title}
                  </h2>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {selectedComponent.description}
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">技术规格</h3>
                  <ul className="space-y-2">
                    {selectedComponent.specs.map((spec, index) => (
                      <li 
                        key={index}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent glow" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
    </div>
  );
};
