import { ArrowRight, MoveRight } from "lucide-react"
import hapyGif from "../public/happy-bear-transparent.gif"
import tirefGif from "../public/sleepy-bear-transparent.gif"
import angryGif from "../public/angry-character-transparent.gif"
function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="span-header">
          NEW
        </div>
        <p>Daily Check-Ins are now live! Maintain your reflection streak and unlock Pip, Snoozy & Blaze badges. <a target="_blank" href="https://expo.dev/accounts/novalcandra/projects/vir-mode/builds/c6b78ed9-8209-4e6b-ad7c-394583f427bf" >Get the App </a></p>
      </header>
      <main>
        <section className="hero">
          <nav className="hero-navbar">
            <h1>VirMood</h1>
            <ul>
              <li>How it works</li>
              <li>Meet the Mascost</li>
              <li>Interactive Demo</li>
              <li>Features</li>
              <li>Community</li>
            </ul>

            <button className="btn-primary"> <a href="https://expo.dev/accounts/novalcandra/projects/vir-mode/builds/c6b78ed9-8209-4e6b-ad7c-394583f427bf" style={{color : "white", textDecoration : "none"}}>DOWNLOAD FREE</a> <MoveRight /></button>
          </nav>

          <div className="content-hero">
            <div className="layout-hero">
              {/* LEFT */}
              <div className="left">
                <div className="heading-left">
                  <h1>The 10-second daily mood check that feels like a <span>game</span>.</h1>
                  <p>Tap a mood, snap the magnetic slider, and let expressive mascots guide your self-reflection. Build your daily streak with zero friction, zero guilt, and maximum dopamine.</p>
                </div>

                <div className="layout-left">
                  <button className="btn-primary">START FREE CHECK-IN <ArrowRight size={20} /></button>
                  <button className="btn-white">TRY LIVE DEMO </button>
                </div>
                <div className="layout-deskiripsi-left">
                  <div></div>
                  <p>100% PRIVATE & ENCRYPTED</p>
                </div>
              </div>
              {/* RIGHT */}
              <div className="right">
                <img src="/public/mood-screen-transparent.webp" alt="modal" className="giff" />
              </div>
            </div>
          </div>

          <div className="deskripsion-hero">
            <div className="layout-deskripsi">
              <p className="text-deskripsi">Loved by daily journalers, busy students, and gamified productivity enthusiasts</p>

              <div className="layout-span">
                <div className="span-text">
                  <p>🏆 App of the Day 2024</p>
                </div>
                <div className="span-text">
                  <p>⚡Zero Cognitive Overload4</p>
                </div>
                <div className="span-text">
                  <p>🌱 Science-Backed Habit Loop</p>
                </div>
                <div className="span-text">
                  <p>🧸 100% Mascot-Powered Joy</p>
                </div>
                <div className="span-text">
                  <p>🔒 Stored Locally on Device</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="meet">
          <div className="heading-meet">
            <div className="span-meet">
              <span>Expressive Companions</span>
            </div>
            <h2>Meet the Mood Pals who live in your phone.</h2>

            <p>Say goodbye to clinical questionnaires. Whether you’re buzzing with good vibes, drained after meetings, or about to blow your lid, there’s a mascot ready to validate how you feel.</p>
          </div>

          <div className="card-meet">
            <div className="card">
              <div className="heading-card">
                <div className="card-span">
                  Positivity Boost
                </div>
              </div>
              <div className="content-card">
                <div className="deskripsion-conten-card">
                  <img src={hapyGif} alt="git loading" />
                  <div className="text-card">
                    <h3 className="heading-card-content">Pip the Bear ☀️</h3>
                    <p className="span-card">State: Sunny & Victorious</p>
                    <p>
                      Bouncing with energy, rosy cheeks, and sparkling golden aura. Celebrates your wins, high energy moments, and healthy mornings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-two">
              <div className="heading-card">
                <div className="card-span-blue">
                  Rest & Recharge
                </div>
              </div>
              <div className="content-card">
                <div className="deskripsion-conten-card">
                  <img src={tirefGif} alt="git loading" />
                  <div className="text-card">
                    <h3 className="heading-card-content">Snoozy the Bear 😴</h3>
                    <p className="span-card">STATE: DROWSY & RESTFUL</p>
                    <p>
                      Gentle breathing, droopy eyelids, calm sleep bubbles, and floating Zzz’s. Reminds you that downtime is just as productive as hustle.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-three">
              <div className="heading-card">
                <div className="card-span-red">
                  Safe Venting
                </div>
              </div>
              <div className="content-card">
                <div className="deskripsion-conten-card">
                  <img src={angryGif} alt="git loading" />
                  <div className="text-card">
                    <h3 className="heading-card-content">Blaze the Bear 😡</h3>
                    <p className="span-card">STATE: STEAMY & FRUSTRATED</p>
                    <p>
                      Comedic cartoon steam puffs, puffed cheeks, and cute clenched fists. Giving you a non-judgmental space to acknowledge tough.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="habits">
          <div className="headeng-habits">
            <div className="span-habits">
              <p>THE HABIT FORMULA</p>
            </div>
            <h2>Built for people who quit normal mood trackers.</h2>
            <p className="deskripsi-text">Traditional journaling apps expect 10-paragraph essays. Mood Check takes 10 seconds, leaving you feeling acknowledged without the chore.</p>
          </div>

          <div className="layouts-habits">
            <div className="card">
              <div className="content-card">
                <div className="card-emoji">
                  ⚡
                </div>
                <div className="content-deskripsi">
                  <h3>Zero Typing Friction</h3>
                  <p>One single fluid slider gesture captures your emotional state. No keyboard popups or long surveys to dread.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content-card">
                <div className="card-emoji-two">
                  🔥
                </div>
                <div className="content-deskripsi">
                  <h3>Daily Streak Flames</h3>
                  <p>Gamified streaks reward you for showing up. Unlock new companion accessories, animations, and sound effects as you progress.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content-card">
                <div className="card-emoji-three">
                  📊
                </div>
                <div className="content-deskripsi">
                  <h3>Weekly Mood Rainbow</h3>
                  <p>Review your weekly emotional patterns in vibrant color charts. Spot sleep deficits, burnout triggers, or happiest days at a glance.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="content-card">
                <div className="card-emoji-four">
                  🔒
                </div>
                <div className="content-deskripsi">
                  <h3>Strict Privacy First</h3>
                  <p>Your feelings are yours alone. No data selling, zero targeted ads, and all logs are securely stored right on your smartphone.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="simple">
          <div className="simple-heading">
            <div className="span-heading">
              <p>Simple Routine</p>
            </div>
            <h2>How Mood Check fits into your day.</h2>
          </div>
          <div className="content-simple">
            <div className="card">
              <div className="layout-simple">
                <div className="logo-card">
                  <p>1</p>
                </div>
                <div className="description-card">
                  <h3>Receive a Friendly Ping</h3>
                  <p>A gentle once-a-day notification asks how you’re doing at your preferred hour (morning or wind-down).</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="layout-simple">
                <div className="logo-card-two">
                  <p>2</p>
                </div>
                <div className="description-card">
                  <h3>Snap Your Mascot</h3>
                  <p>Slide over to Happy, Tired, or Angry. Watch the animated mascot morph and mirror your exact state.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="layout-simple">
                <div className="logo-card-three">
                  <p>3</p>
                </div>
                <div className="description-card">
                  <h3>Lock in Your Streak</h3>
                  <p>Tap the tactile continue button with satisfying haptic feedback. Get back to living your day in seconds.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="layoutFooter">
          <h2>VirModd</h2>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Support & FAQ</li>
            <li>Style Guide</li>
            <li>Press Kit</li>
          </ul>
          <p>© 2026 VirMood, Inc. Designed with tactile joy.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
