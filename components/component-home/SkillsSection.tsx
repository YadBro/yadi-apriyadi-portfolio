import {
  BootstrapIcon,
  CSSIcon,
  ExpressIcon,
  GITIcon,
  GolangIcon,
  HerokuIcon,
  HTMLIcon,
  JavascriptIcon,
  JestIcon,
  LaravelIcon,
  LUAIcon,
  MongoDBIcon,
  MySQLIcon,
  NextJsIcon,
  NodeJsIcon,
  PHPIcon,
  PostgresqlIcon,
  ReactIcon,
  ReactNativeIcon,
  ReduxIcon,
  RobloxStudioIcon,
  TypescriptIcon,
  VueIcon,
} from '../component-icon';

export default function SkillsSection() {
  return (
    <>
      <section id="skills" className="pt-32 pb-32 bg-yellow-400">
        <div className="container">
          <div className="w-full px-4">
            <div className="mx-auto text-center mb-14">
              <h4 className="font-semibold text-xl text-primary mb-2">
                Skills
              </h4>

              <h2 className="font-bold text-white text-3xl mb-4 mt-5 sm:text-4xl lg:text-5xl">
                Programming Languages
              </h2>
              <div className="skills-position">
                <GolangIcon />
                <JavascriptIcon />
                <TypescriptIcon />
                <PHPIcon />
                <LUAIcon />
              </div>

              <h2 className="skills-title">Frontend Development</h2>
              <div className="skills-position">
                <VueIcon />
                <ReactIcon />
                <BootstrapIcon />
                <CSSIcon />
                <HTMLIcon />
              </div>

              <h2 className="skills-title">Backend Development</h2>
              <div className="skills-position">
                <NodeJsIcon />
                <ExpressIcon />
                <LaravelIcon />
              </div>

              <h2 className="skills-title">Game Development</h2>
              <div className="skills-position">
                <RobloxStudioIcon />
              </div>

              <h2 className="skills-title">State Management Libraries</h2>
              <div className="skills-position">
                <ReduxIcon />
              </div>

              <h2 className="skills-title">Mobile App Development</h2>
              <div className="skills-position">
                <ReactNativeIcon />
              </div>

              <h2 className="skills-title">Database</h2>
              <div className="skills-position">
                <MongoDBIcon />
                <MySQLIcon />
                <PostgresqlIcon />
              </div>

              <h2 className="skills-title">Backend as a Service(BaaS)</h2>
              <div className="skills-position">
                <HerokuIcon />
              </div>

              <h2 className="skills-title">Testing</h2>
              <div className="skills-position">
                <JestIcon />
              </div>

              <h2 className="skills-title">Static Site Generators</h2>
              <div className="skills-position">
                <NextJsIcon />
              </div>

              <h2 className="skills-title">Other</h2>
              <div className="skills-position">
                <GITIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
