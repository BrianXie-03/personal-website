type Props = {
  icon: any;
  title: string;
};

const Skills = ({ icon, title }: Props) => {
  return (
    <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-[#111a21] px-3.5 py-2.5 transition-colors hover:border-white/20 hover:bg-white/[0.04]">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center">{icon}</span>
      <span className="text-sm font-medium text-slate-200">{title}</span>
    </div>
  );
};

export default Skills;
