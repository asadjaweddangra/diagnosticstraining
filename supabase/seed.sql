-- Seed data for clinical training platform
-- Run in Supabase SQL editor or psql (service role recommended)

-- Modules by track (common, ultrasound, echo, ekg)
insert into modules (id, title, description, content, order_index, estimated_duration, modality)
values
('c1000000-0000-0000-0000-000000000001','Orientation & Fundamentals','Plain-English basics, scope of practice, safety signals', '{
  "sections":[
    {"type":"comparison","title":"Plain English vs Technical Definitions","leftLabel":"Plain","rightLabel":"Technical","rows":[
      {"left":"Ultrasound = bat echolocation for the body","right":"2–15 MHz sound waves creating images via acoustic reflection"},
      {"left":"Echo = live movie of the heart","right":"Cardiac ultrasonography evaluating structure and hemodynamics"},
      {"left":"EKG = electrical recording of heartbeats","right":"Surface electrodes record depolarization/repolarization patterns"}
    ]},
    {"type":"mnemonic","title":"Your role","content":"Acquire + optimize images; document technically; never diagnose.","hint":"You are the eyes and hands for the clinician."},
    {"type":"alert","variant":"danger","title":"STOP / Escalate Immediately","items":["Severe pain or distress","Allergic reaction to gel/electrodes","Equipment malfunction affecting safety","Unstable rhythm (VF/VT/asystole)"]}
  ]}',1,30,'common'),
('c1000000-0000-0000-0000-000000000002','Safety & Infection Control','ALARA, probe disinfection, electrical safety', '{
  "sections":[
    {"type":"mnemonic","title":"ALARA","content":"As Low As Reasonably Achievable","hint":"Lowest power + minimal dwell time for diagnostic images."},
    {"type":"steps","title":"Probe Disinfection Steps","steps":["Remove gel with approved wipes","Apply disinfectant and respect contact time","Air dry completely before next patient","High-level disinfection for TEE/TV/mucosal probes"],"footnote":"Follow facility and manufacturer policies."},
    {"type":"checklist","title":"Electrical Safety Quick Check","items":["Inspect cables for damage","Verify proper grounding","Avoid wet environments","Replace damaged electrodes/cables immediately"]}
  ]}',2,25,'common'),
('c1000000-0000-0000-0000-000000000003','Pre-Exam Workflow & Documentation','Orders, ID, room setup, device self-test, doc traps', '{
  "sections":[
    {"type":"steps","title":"Two-Identifier Verification","steps":["Ask for full name and DOB (or MRN)","Confirm exam type matches order","Review allergies and prior studies"]},
    {"type":"checklist","title":"Room & Supplies Ready","items":["Gloves, wipes, gel, probe covers/electrodes/razors","Lighting and privacy, emergency call button","Paper/thermal paper loaded; calibration check"]},
    {"type":"comparison","title":"Documentation Traps (Do / Avoid)","leftLabel":"Do","rightLabel":"Avoid","rows":[
      {"left":"Describe technical quality and views obtained","right":"Diagnostic language or interpretation"},
      {"left":"State limitations (habitus, gas, cooperation)","right":"Leaving limitations unstated"},
      {"left":"Record patient tolerance and safety events","right":"Speculating on diagnoses"}
    ]}
  ]}',3,25,'common'),
('c1000000-0000-0000-0000-000000000004','Patient Interaction & Scripts','Consent, dignity, explanations, breath-hold coaching', '{
  "sections":[
    {"type":"script","title":"Starter Scripts","script":[
      {"speaker":"Tech","line":"Hello, I''m [Name]. I''ll perform your ultrasound/EKG. Please confirm your name and date of birth."},
      {"speaker":"Tech","line":"This uses sound waves/stickers to capture images. It shouldn''t hurt; you might feel some pressure."},
      {"speaker":"Tech","line":"If anything feels uncomfortable, tell me and I''ll pause."}
    ]},
    {"type":"steps","title":"Breath-Hold Coaching","steps":["Practice once before scanning: ''Take a breath in... hold... breathe normally.''","Cue short breath-hold 5–10 seconds during imaging","If struggling: reassure and work with normal breathing"]},
    {"type":"alert","variant":"warning","title":"De-escalation for Anxiety","items":["Acknowledge feelings; explain safety","Offer chaperone/family if appropriate","Pause or reschedule if distress persists"]}
  ]}',4,20,'common'),

-- Ultrasound track
('a2000000-0000-0000-0000-000000000001','Ultrasound Physics & Controls','Depth, gain, TGC, focus, frequency trade-offs', '{
  "sections":[
    {"type":"steps","title":"Control Sequence","steps":["Depth first: frame target with 1–2 cm beyond","Overall gain, then TGC for depth-specific brightness","Focus at/just below structure of interest","Frequency: higher = resolution, lower = penetration"],"footnote":"Optimize in this order before moving on."},
    {"type":"comparison","title":"Frequency Trade-off","leftLabel":"Higher Frequency","rightLabel":"Lower Frequency","rows":[
      {"left":"Better resolution","right":"Better penetration"},
      {"left":"Superficial (thyroid, vessels)","right":"Deep abdomen/heart"},
      {"left":"Limited depth","right":"Wider usable depth"}
    ]},
    {"type":"alert","variant":"info","title":"Artifacts to Recognize","items":["Shadowing: stones/bone","Posterior enhancement: fluid","Reverberation/mirror","Side lobes mimicking echoes"]}
  ]}',1,30,'ultrasound'),
('a2000000-0000-0000-0000-000000000002','Core Anatomy - Abdomen','Liver/GB, IVC vs Aorta cues, kidneys', '{
  "sections":[
    {"type":"anatomy","title":"Key Landmarks","image":"https://www.bartleby.com/107/illus492.jpg","caption":"Gray''s Anatomy abdominal organs (public domain)","markers":[{"label":"Liver","detail":"Largest solid organ, right upper quadrant"},{"label":"Gallbladder","detail":"Under liver, mobile, fluid-filled"},{"label":"IVC vs Aorta","detail":"IVC compressible; aorta pulsatile"}]},
    {"type":"list","title":"Landmark Cues","items":["Liver in RUQ; gallbladder under liver (mobile)","IVC is compressible; aorta pulsatile and non-compressible","Kidneys retroperitoneal; cortex vs medulla differentiation"]}
  ]}',2,25,'ultrasound'),
('a2000000-0000-0000-0000-000000000003','Scanning Fundamentals & Artifacts','Orientation, sweep patterns, optimization ladder', '{
  "sections":[
    {"type":"steps","title":"Probe Orientation & Sweep","steps":["Indicator to head/right (standard)","Sagittal then transverse; fan/rock/rotate systematically","Document in two orthogonal planes"]},
    {"type":"mnemonic","title":"Golden Rule","content":"Never diagnose from one image. Always scan in multiple planes."},
    {"type":"flow","title":"Optimization Ladder","nodes":[
      {"label":"Reposition patient / breath-hold"},
      {"label":"Check probe & preset"},
      {"label":"Depth → Gain → TGC"},
      {"label":"Focus/Frequency"},
      {"label":"Change window"},
      {"label":"Document limitation"}
    ]}
  ]}',3,30,'ultrasound'),
('a2000000-0000-0000-0000-000000000004','Abdomen/Gallbladder Protocol','RUQ protocol, CBD, mobility, shadowing', '{
  "sections":[
    {"type":"steps","title":"Acquisition Steps","steps":["GB long & short; assess wall/lumen","CBD view; measure if indicated; add color if needed","Survey adjacent liver parenchyma"]},
    {"type":"checklist","title":"Tips & Maneuvers","items":["Left lateral decubitus to move stones/gas","Deep inspiration to drop liver/GB","Heel-toe to avoid ribs; add gel for contact"]},
    {"type":"alert","variant":"info","title":"Artifact Clues","items":["Shadowing confirms stones","Posterior enhancement supports fluid-filled lumen"]}
  ]}',4,25,'ultrasound'),
('a2000000-0000-0000-0000-000000000005','Renal/Bladder Protocol','Kidneys in 2 planes, bladder volume, hydronephrosis', '{
  "sections":[
    {"type":"steps","title":"Kidney Protocol","steps":["Long and short axis both kidneys; include cortex/medulla","Measure length if indicated; evaluate hydronephrosis","Decubitus or prone if needed for windows"]},
    {"type":"checklist","title":"Bladder Protocol","items":["Transverse and sagittal views","Posterior enhancement expected","Post-void if ordered; note debris/clots"]},
    {"type":"mnemonic","title":"Full bladder helps","content":"Full bladder improves pelvic/ureteral visualization."}
  ]}',5,20,'ultrasound'),
('a2000000-0000-0000-0000-000000000006','Thyroid & Superficial','High-frequency linear, small movements, vessels/structures', '{
  "sections":[
    {"type":"steps","title":"Technique Essentials","steps":["High-frequency linear probe; light pressure","Small sweeps; keep probe steady","Use color to map vascularity; identify lobes and isthmus"]},
    {"type":"alert","variant":"info","title":"Safety","items":["Monitor patient comfort with neck extension","Document any limitations (body habitus, motion)"]}
  ]}',6,20,'ultrasound'),
('a2000000-0000-0000-0000-000000000007','Vascular Access Guidance','Identify artery vs vein, compressibility, needle path', '{
  "sections":[
    {"type":"comparison","title":"Artery vs Vein","leftLabel":"Vein","rightLabel":"Artery","rows":[
      {"left":"Compressible","right":"Non-compressible"},
      {"left":"Phasic flow","right":"Pulsatile flow"},
      {"left":"Thin wall","right":"Thicker wall"}
    ]},
    {"type":"steps","title":"Approach Planning","steps":["Confirm depth and vessel diameter","Choose in-plane vs out-of-plane approach","Maintain sterile technique; visualize needle tip"],"footnote":"Document vessel, depth, and approach."},
    {"type":"alert","variant":"warning","title":"Safety","items":["Do not proceed if vessel identity uncertain","Abort if patient reports severe pain"]}
  ]}',7,15,'ultrasound'),
('a2000000-0000-0000-0000-000000000008','Ultrasound Troubleshooting','Poor images due to gas, habitus; optimization ladder', '{
  "sections":[
    {"type":"flow","title":"When Image is Poor","nodes":[
      {"label":"Reposition / change breathing"},
      {"label":"Switch probe/preset"},
      {"label":"Adjust Depth → Gain → TGC"},
      {"label":"Focus/Frequency or harmonics"},
      {"label":"Change window/intercostal"},
      {"label":"Document limitation (habitus/gas/cooperation)"}
    ]},
    {"type":"alert","variant":"info","title":"Document Limits","items":["Body habitus","Bowel gas","Patient cooperation","Rib shadowing"]}
  ]}',8,15,'ultrasound'),

-- Echo track
('e3000000-0000-0000-0000-000000000001','Focused Echo Goals & Scope','Binary questions, emergencies, limits vs full echo', '{
  "sections":[
    {"type":"checklist","title":"Focused Goals","items":["Effusion/tamponade?","Gross LV/RV function?","Volume status via IVC collapse"]},
    {"type":"alert","variant":"danger","title":"Escalate","items":["Effusion with RA/RV collapse","Severely reduced global function","No adequate windows after optimization"]},
    {"type":"mnemonic","title":"Scope","content":"POCUS answers binary questions; not a full diagnostic echo."}
  ]}',1,20,'echo'),
('e3000000-0000-0000-0000-000000000002','Parasternal Views (PLAX/PSAX)','Probe placement, looks-right cues, PSAX levels', '{
  "sections":[
    {"type":"steps","title":"PLAX Setup","steps":["Left parasternal 3rd–4th ICS; indicator to right shoulder","Aim to right scapula; maximize LV length; avoid foreshortening"]},
    {"type":"steps","title":"PSAX Levels","steps":["Rotate 90° from PLAX","Base (AV), mid (MV), papillary levels","Fan from base to apex"]},
    {"type":"comparison","title":"Looks Right vs Off","leftLabel":"Looks Right","rightLabel":"Common Miss","rows":[
      {"left":"RV anterior, LV/LA visible, Ao root centered","right":"Foreshortened LV or off-axis root"},
      {"left":"Pericardium as bright line","right":"Poor contact or rib shadowing"}
    ]}
  ]}',2,25,'echo'),
('e3000000-0000-0000-0000-000000000003','Apical Views (4/2/3)','Apex find, avoid foreshortening, chamber layout', '{
  "sections":[
    {"type":"steps","title":"Apical 4-Chamber","steps":["Find PMI; indicator to patient''s left; aim to right shoulder","Ensure all 4 chambers; avoid foreshortening"]},
    {"type":"flow","title":"Rotate to A2C / A3C","nodes":[
      {"label":"From A4C → rotate ~90° CCW → A2C (LA/LV only)"},
      {"label":"From A2C → rotate ~60° CCW → A3C (Ao root, LV, LA)"}
    ]},
    {"type":"alert","variant":"info","title":"If Foreshortened","items":["Move more lateral/inferior to find true apex","Reduce depth to frame LV","Reacquire with ECG gating if available"]}
  ]}',3,25,'echo'),
('e3000000-0000-0000-0000-000000000004','Subcostal & IVC','Subxiphoid 4-ch, IVC measurement, collapsibility', '{
  "sections":[
    {"type":"steps","title":"Subcostal 4-Chamber","steps":["Probe subxiphoid, indicator left","Aim to left shoulder","Useful in COPD/ventilated/poor parasternal"]},
    {"type":"steps","title":"IVC Assessment","steps":["Indicator to head; measure 2–3 cm from RA junction","Normal: >50% collapse with sniff","Collapse <50% suggests elevated RA pressure"]}
  ]}',4,20,'echo'),
('e3000000-0000-0000-0000-000000000005','Poor Windows Strategies','Obesity, COPD, post-op; alternate windows', '{
  "sections":[
    {"type":"flow","title":"If Windows Are Poor","nodes":[
      {"label":"Obesity: lower frequency, harmonics, subcostal priority"},
      {"label":"COPD/ventilated: parasternal limited → subcostal primary"},
      {"label":"Try sitting up if tolerated"},
      {"label":"Use very low/apical position if needed"}
    ]}
  ]}',5,15,'echo'),
('e3000000-0000-0000-0000-000000000006','Focused Findings & Escalation','What to report/escalate: tamponade, severe dysfunction', '{
  "sections":[
    {"type":"alert","variant":"danger","title":"Escalate","items":["Pericardial effusion with RA/RV collapse","Severely reduced global function","Inability to obtain windows after optimization"]},
    {"type":"checklist","title":"Document","items":["Views obtained","Limitations (habitus, COPD, dressings)","Patient tolerance","Arrhythmia noted"]}
  ]}',6,15,'echo'),

-- EKG track
('b4000000-0000-0000-0000-000000000001','Prep & Machine Setup','Skin prep, electrodes, machine calibration', '{
  "sections":[
    {"type":"steps","title":"Prep","steps":["Expose only necessary areas; drape respectfully","Clean/dry/abrade/shave as needed","Check electrode dates/gel; replace dry pads"]},
    {"type":"steps","title":"Machine Setup","steps":["Paper speed 25 mm/sec","Calibration 10 mm/mV","Lead integrity test","Filters 0.5–40 Hz (adults)"]},
    {"type":"alert","variant":"warning","title":"Allergy & Skin","items":["Use latex-free electrodes if needed","Observe for skin reaction; stop if severe"]}
  ]}',1,15,'ekg'),
('b4000000-0000-0000-0000-000000000002','Limb & Precordial Placement','Standard positions and color mnemonics', '{
  "sections":[
    {"type":"mnemonic","title":"Limb Lead Colors","content":"White on Right, Smoke (Black) over Fire (Red), Green is Ground."},
    {"type":"steps","title":"Chest Lead Landmarks","steps":["V1: 4th ICS RSB; V2: 4th ICS LSB","V3: midway V2–V4; V4: 5th ICS MCL","V5 same level as V4, anterior axillary; V6 same level, mid-axillary"]},
    {"type":"imageGallery","title":"Placement Reference","images":[
      {"src":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/EKG_12derivaciones.png/512px-EKG_12derivaciones.png","caption":"Standard chest lead placement (CC BY-SA 4.0)"},
      {"src":"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/ConductionsystemoftheheartwithouttheHeart.png/512px-ConductionsystemoftheheartwithouttheHeart.png","caption":"Cardiac conduction system (CC BY-SA 3.0)"}
    ]}
  ]}',2,15,'ekg'),
('b4000000-0000-0000-0000-000000000003','Artifact Recognition & Fixes','Muscle, 60-cycle, wandering baseline, loose lead', '{
  "sections":[
    {"type":"comparison","title":"Artifact Type vs Fix","leftLabel":"Artifact","rightLabel":"First Fix","rows":[
      {"left":"Muscle tremor (fuzzy baseline)","right":"Warm patient, support arms, reassure"},
      {"left":"60-cycle interference","right":"Remove nearby electronics / check grounding"},
      {"left":"Wandering baseline","right":"Clean skin better; replace dry electrodes"},
      {"left":"Loose lead","right":"Check connections; replace electrode"}
    ]},
    {"type":"flow","title":"If Artifact Persists","nodes":[
      {"label":"Re-check skin prep and electrodes"},
      {"label":"Verify lead order and placement"},
      {"label":"Move away electronics / ensure grounding"},
      {"label":"Document limitation if unresolved"}
    ]}
  ]}',3,15,'ekg'),
('b4000000-0000-0000-0000-000000000004','Rhythm Strip & Escalation','Lead II strip, dangerous rhythms to escalate', '{
  "sections":[
    {"type":"steps","title":"Lead II Rhythm Strip","steps":["Record 6–10 seconds minimum","Assess P-QRS-T, rate, rhythm regularity","Ensure clear baseline"]},
    {"type":"alert","variant":"danger","title":"Escalate Immediately","items":["VF/VT","Asystole","Complete heart block with symptoms"]}
  ]}',4,15,'ekg')
on conflict (id) do nothing;

-- Quizzes (sample: micro + comprehensive)
insert into quizzes (id, module_id, title, type, passing_score, time_limit, max_attempts, questions)
values
('a1111111-1111-4111-8111-111111111111',null,'Ultrasound Micro Quiz','micro',80,15,3,
  '[
    {"id":"q1","type":"multiple_choice","question":"Higher frequency ultrasound provides:","options":["Better penetration","Better resolution","Both","Neither"],"answer":"Better resolution","rationale":"Higher frequency improves resolution but reduces penetration."},
    {"id":"q2","type":"multiple_choice","question":"Probe choice for deep abdominal structures:","options":["7-15 MHz linear","2-5 MHz curved","Any probe works","High frequency phased"],"answer":"2-5 MHz curved","rationale":"Low frequency curved for penetration and FOV."},
    {"id":"q3","type":"multiple_choice","question":"In Doppler, BART means:","options":["Blue Always Red Toward","Blue Away Red Toward","Blue Away Red Through","Blue And Red Together"],"answer":"Blue Away Red Toward","rationale":"Standard color convention."},
    {"id":"q4","type":"multiple_choice","question":"If the whole image is dark, adjust:","options":["Depth","Focus","Overall gain","TGC only"],"answer":"Overall gain","rationale":"Overall gain impacts the full image first."},
    {"id":"q5","type":"multiple_choice","question":"TGC is used to:","options":["Overall brightness","Depth-specific brightness","Change probe frequency","Doppler sensitivity"],"answer":"Depth-specific brightness","rationale":"TGC compensates for attenuation by depth."}
  ]'::jsonb),
('e1111111-1111-4111-8111-111111111111',null,'Echo Micro Quiz','micro',80,15,3,
  '[
    {"id":"q21","type":"multiple_choice","question":"PLAX indicator points toward:","options":["Left hip","Right shoulder","Left shoulder","Right hip"],"answer":"Right shoulder","rationale":"Standard PLAX orientation."},
    {"id":"q22","type":"multiple_choice","question":"IVC normal collapse with sniff:","options":["<25%","~50%",">75%","No change"],"answer":"~50%","rationale":">50% collapse suggests normal RA pressure."},
    {"id":"q23","type":"multiple_choice","question":"Poor parasternal windows in COPD. Best alternative:","options":["Increase pressure","Subcostal view","Higher frequency","Stop exam"],"answer":"Subcostal view","rationale":"Subcostal often works when lungs block parasternal."},
    {"id":"q24","type":"multiple_choice","question":"Apical foreshortening fix:","options":["Move higher","Move more lateral/inferior","Use more gain","Use CW Doppler"],"answer":"Move more lateral/inferior","rationale":"Find true apex to avoid foreshortening."},
    {"id":"q25","type":"multiple_choice","question":"Effusion with RA collapse means:","options":["Normal","Tamponade concern","Artifact","Hypertension"],"answer":"Tamponade concern","rationale":"RA/RV collapse suggests elevated pericardial pressure."}
  ]'::jsonb),
('b1111111-1111-4111-8111-111111111111',null,'EKG Micro Quiz','micro',80,10,3,
  '[
    {"id":"q31","type":"multiple_choice","question":"Paper speed standard:","options":["10 mm/sec","25 mm/sec","50 mm/sec","100 mm/sec"],"answer":"25 mm/sec","rationale":"Standard EKG speed."},
    {"id":"q32","type":"multiple_choice","question":"V1 placement:","options":["3rd ICS RSB","4th ICS RSB","5th ICS RSB","4th ICS LSB"],"answer":"4th ICS RSB","rationale":"Key chest landmark."},
    {"id":"q33","type":"multiple_choice","question":"60-cycle interference first fix:","options":["Replace electrodes","Remove nearby electronics","Switch to battery","Change paper"],"answer":"Remove nearby electronics","rationale":"Eliminate source of electrical noise first."},
    {"id":"q34","type":"multiple_choice","question":"Escalate immediately for:","options":["Sinus brady 55","PACs","VF/VT","Sinus tach 120"],"answer":"VF/VT","rationale":"Life-threatening rhythms need immediate action."},
    {"id":"q35","type":"multiple_choice","question":"What is the limb lead ground?","options":["RA","LA","RL","LL"],"answer":"RL","rationale":"Right leg is ground in standard configuration."}
  ]'::jsonb),
('c1111111-2222-4111-8111-111111111111',null,'Comprehensive Scenario Quiz','comprehensive',80,40,3,
  '[
    {"id":"q21","type":"scenario","question":"RUQ pain with gas obscuring GB, first step?","options":["Increase gain","Higher frequency probe","Reposition to LLD","Call non-diagnostic"],"answer":"Reposition to LLD","rationale":"Optimization ladder starts with positioning."},
    {"id":"q22","type":"multiple_choice","question":"After repositioning, still suboptimal GB view. Next best approach?","options":["Try breath-hold and angle changes","Use highest frequency","Abort exam immediately","Skip CBD view"],"answer":"Try breath-hold and angle changes","rationale":"Systematic optimization includes breath holds and beam angle changes."},
    {"id":"q23","type":"multiple_choice","question":"No parasternal windows in obese COPD patient. Best alternative?","options":["Higher frequency","Subcostal windows","More pressure","Stop study"],"answer":"Subcostal windows","rationale":"Subcostal often succeeds when parasternal fails."},
    {"id":"q24","type":"multiple_choice","question":"Documentation for technically limited echo should:","options":["State normal function","Note limitations and alternative views obtained","Avoid mentioning limitations","Include diagnostic interpretations"],"answer":"Note limitations and alternative views obtained","rationale":"Technical documentation only, with limitations."},
    {"id":"q25","type":"multiple_choice","question":"60-cycle interference first fix:","options":["Replace electrodes","Remove nearby electrical devices","Move rooms","Add gel"],"answer":"Remove nearby electrical devices","rationale":"Eliminate external electrical noise first."},
    {"id":"q26","type":"multiple_choice","question":"Interference persists after removing devices. Next step?","options":["Document non-diagnostic","Check electrode contact/replace","Stop exam","Change paper speed"],"answer":"Check electrode contact/replace","rationale":"Poor contact worsens artifact; verify and replace."},
    {"id":"q27","type":"multiple_choice","question":"Anxious patient asks to stop during ultrasound. You should:","options":["Continue quickly","Explain must finish","Stop and address concerns","Restrain patient"],"answer":"Stop and address concerns","rationale":"Patient autonomy and safety first."},
    {"id":"q28","type":"multiple_choice","question":"After reassurance patient continues but nervous. Best approach:","options":["Proceed silently","Explain steps and work efficiently","Reschedule automatically","Skip key views"],"answer":"Explain steps and work efficiently","rationale":"Communication and efficiency reduce anxiety."},
    {"id":"q29","type":"multiple_choice","question":"Acoustic shadowing behind gallstone indicates:","options":["Artifact only","Sound absorbed/reflected by stone","Gain too high","Probe too shallow"],"answer":"Sound absorbed/reflected by stone","rationale":"Shadowing occurs behind highly attenuating objects."},
    {"id":"q30","type":"multiple_choice","question":"Good PLAX view shows:","options":["All 4 chambers","RV, LV, LA, aortic root","Only left heart","Valves in cross-section"],"answer":"RV, LV, LA, aortic root","rationale":"Standard PLAX contents."},
    {"id":"q31","type":"multiple_choice","question":"Lead V1 is placed:","options":["4th ICS RSB","4th ICS LSB","5th ICS RSB","5th ICS LSB"],"answer":"4th ICS RSB","rationale":"Key chest landmark."},
    {"id":"q32","type":"multiple_choice","question":"If limb leads placed on torso instead of limbs:","options":["EKG invalid","Document placement change","No difference","Machine compensates automatically"],"answer":"Document placement change","rationale":"Torso placement alters morphology and must be documented."},
    {"id":"q33","type":"multiple_choice","question":"Harmonic imaging benefit:","options":["Adds sound","Reduces artifacts and improves image quality","Doppler only","Avoid in cardiac"],"answer":"Reduces artifacts and improves image quality","rationale":"Harmonics clean up artifacts."},
    {"id":"q34","type":"multiple_choice","question":"Normal ejection fraction:","options":["25-35%","40-50%","55-65%","70-80%"],"answer":"55-65%","rationale":"Typical normal EF range."},
    {"id":"q35","type":"multiple_choice","question":"Normal adult resting heart rate:","options":["40-60","60-100","100-120","120-140"],"answer":"60-100","rationale":"Standard normal rate range."},
    {"id":"q36","type":"multiple_choice","question":"IVC should collapse with inspiration by at least:","options":["25%","50%","75%","90%"],"answer":"50%","rationale":">50% collapse is normal."},
    {"id":"q37","type":"multiple_choice","question":"High-level disinfection required for:","options":["All probes","Probes contacting mucous membranes","External probes only","No disinfection needed"],"answer":"Probes contacting mucous membranes","rationale":"TEE/TV and mucosal probes require HLD."},
    {"id":"q38","type":"multiple_choice","question":"Pacemaker present. EKG considerations:","options":["Cannot perform EKG","Special precautions may be needed","Only ultrasound allowed","No special considerations"],"answer":"Special precautions may be needed","rationale":"Device settings/interpretation can be affected."},
    {"id":"q39","type":"multiple_choice","question":"Seeing ventricular fibrillation on monitor:","options":["Document and continue","Stop and call for help","Change leads","Re-run calibration"],"answer":"Stop and call for help","rationale":"VF is life-threatening emergency."},
    {"id":"q40","type":"multiple_choice","question":"Most important ultrasound safety principle:","options":["Highest power setting","Scan as fast as possible","ALARA: minimum exposure for adequate images","Only physicians operate scanners"],"answer":"ALARA: minimum exposure for adequate images","rationale":"ALARA underpins safe ultrasound use."}
  ]'::jsonb)
on conflict (id) do nothing;

-- Competency requirements
insert into competency_requirements (id, name, description, modality, supervised_count, independent_count, skills_checklist)
values
('d1111111-1111-1111-1111-111111111111','Abdominal/Gallbladder','Supervised abdominal/gallbladder ultrasound exams','ultrasound',25,10,'["Probe selection","Long/short axis GB","CBD view","Limitations documented"]'::jsonb),
('d2222222-2222-2222-2222-222222222222','Renal/Bladder','Supervised renal/bladder ultrasound exams','ultrasound',20,10,'["Bilateral kidneys 2 planes","Bladder assessment","Measurements accurate","Limitations documented"]'::jsonb),
('d3333333-3333-3333-3333-333333333333','Thyroid/Neck','Supervised superficial ultrasound exams','ultrasound',15,5,'["High-frequency probe","Thyroid lobes/isthmus","Vascular/soft tissue ID"]'::jsonb),
('d4444444-4444-4444-4444-444444444444','Vascular Access ID','Supervised vessel ID for access','ultrasound',10,0,'["Sterile technique awareness","Artery vs vein ID","Needle path planning"]'::jsonb),
('d5555555-5555-5555-5555-555555555555','Echo Standard Views','All core echo windows','echo',30,0,'["PLAX","PSAX levels","Apical 4/2/3","Subcostal 4ch","IVC"]'::jsonb),
('d6666666-6666-6666-6666-666666666666','Focused Cardiac Assessment','Focused POCUS cardiac','echo',20,0,'["Global function impression","Pericardial effusion screen","IVC collapsibility"]'::jsonb),
('d7777777-7777-7777-7777-777777777777','EKG 12-Lead Acquisition','Standard 12-lead acquisition','ekg',50,0,'["Limb leads correct","V1-V6 placement","Artifact troubleshooting","Rhythm strip protocol"]'::jsonb),
('d8888888-8888-8888-8888-888888888888','Rhythm Recognition (Escalation)','Recognize dangerous rhythms for escalation','ekg',25,0,'["VF/VT recognition","Complete heart block recognition","Escalation steps"]'::jsonb)
on conflict (id) do nothing;

