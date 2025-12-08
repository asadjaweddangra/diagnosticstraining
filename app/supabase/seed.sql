-- Seed data for clinical training platform
-- Run in Supabase SQL editor or psql (service role recommended)

-- Modules by track (common, ultrasound, echo, ekg)
insert into modules (id, title, description, content, order_index, estimated_duration, modality)
values
('c1000000-0000-0000-0000-000000000001','Orientation & Fundamentals','Plain-English basics, scope of practice, safety signals', '{
  "sections":[
    {"title":"Plain English definitions","items":["Ultrasound = sound waves imaging","Echo = ultrasound focused on heart","EKG = electrical recording of heart"]},
    {"title":"Role vs interpretation","items":["Acquire images/data","Optimize quality","Document technically, not diagnostically","Escalate safety concerns"]},
    {"title":"Safety signals","items":["Stop for distress/pain/allergy","Equipment malfunction -> escalate","Hemodynamic instability -> stop"]},
    {"title":"References","links":[{"label":"ALARA overview (AIUM)","href":"https://www.aium.org/resources/viewPage.aspx?id=130"}]}
  ]}',1,30,'common'),
('c1000000-0000-0000-0000-000000000002','Safety & Infection Control','ALARA, probe disinfection, electrical safety', '{
  "sections":[
    {"title":"ALARA","items":["Minimize dwell time","Lowest power for diagnostic image","Avoid prolonged fetal/eye exposure"]},
    {"title":"Probe disinfection","items":["Remove gel, approved wipe","Contact time per manufacturer","Air dry fully","High-level disinfection for TEE/TV"]},
    {"title":"Electrical safety","items":["Inspect cables","Grounding","Avoid wet environments"]},
    {"title":"References","links":[{"label":"CDC HLD guidance","href":"https://www.cdc.gov/infectioncontrol/guidelines/disinfection/index.html"}]}
  ]}',2,25,'common'),
('c1000000-0000-0000-0000-000000000003','Pre-Exam Workflow & Documentation','Orders, ID, room setup, device self-test, doc traps', '{
  "sections":[
    {"title":"Verify orders & ID","items":["Two identifiers: name + DOB/MRN","Match exam to order","Check allergies/previous studies"]},
    {"title":"Room + supplies","items":["Gloves, wipes, gel, electrodes, razors","Lighting, privacy, emergency button","Paper/thermal paper"]},
    {"title":"Documentation traps","items":["Document technical only","State limitations (body habitus, gas)","Do not diagnose/interpret"]},
    {"title":"References","links":[{"label":"Joint Commission ID requirements","href":"https://www.jointcommission.org"}]}
  ]}',3,25,'common'),
('c1000000-0000-0000-0000-000000000004','Patient Interaction & Scripts','Consent, dignity, explanations, breath-hold coaching', '{
  "sections":[
    {"title":"Scripts","items":["Introduce + verify ID","Explain ultrasound/EKG simply","Offer chaperone and draping","Stop if distressed"]},
    {"title":"Coaching","items":["Practice breath-holds before scanning","Explain pressure/discomfort expectations","Reassure anxious patients"]},
    {"title":"Stop/escalate","items":["Severe pain","Allergic reaction","Unstable rhythm on monitor"]}]
  }',4,20,'common'),

-- Ultrasound track
('a2000000-0000-0000-0000-000000000001','Ultrasound Physics & Controls','Depth, gain, TGC, focus, frequency trade-offs', '{
  "sections":[
    {"title":"Controls sequence","items":["Depth first","Overall gain, then TGC","Focus at target depth","Frequency: resolution vs penetration"]},
    {"title":"Artifacts to recognize","items":["Shadowing (stones/bone)","Enhancement (fluid)","Reverberation/mirror/side lobes"]},
    {"title":"References","links":[{"label":"Radiopaedia - US physics","href":"https://radiopaedia.org/articles/ultrasound-physics-basics"}]}
  ]}',1,30,'ultrasound'),
('a2000000-0000-0000-0000-000000000002','Core Anatomy - Abdomen','Liver/GB, IVC vs Aorta cues, kidneys', '{
  "sections":[
    {"title":"Landmarks","items":["Liver RUQ, GB beneath liver","IVC compressible vs aorta pulsatile","Kidneys retroperitoneal"]},
    {"title":"Views","items":["GB long/short","CBD view","Kidney long/short, cortex/medulla distinction"]}]
  }',2,25,'ultrasound'),
('a2000000-0000-0000-0000-000000000003','Scanning Fundamentals & Artifacts','Orientation, sweep patterns, optimization ladder', '{
  "sections":[
    {"title":"Orientation","items":["Indicator to head/right","Sagittal/transverse/coronal planes"]},
    {"title":"Sweep pattern","items":["Long then short","Fan/rock/rotate systematically","Document in 2 planes"]},
    {"title":"Optimization ladder","items":["Positioning","Probe/preset","Depth/Gain/TGC","Focus/Frequency","Change window","Document limitation"]}]
  }',3,30,'ultrasound'),
('a2000000-0000-0000-0000-000000000004','Abdomen/Gallbladder Protocol','RUQ protocol, CBD, mobility, shadowing', '{
  "sections":[
    {"title":"Protocol","items":["GB long/short","Measure GB wall if indicated","CBD with color if needed","Liver survey"]},
    {"title":"Tips","items":["LLD to move stones/gas","Inspiration breath-hold","Heel-toe to avoid ribs"]},
    {"title":"Artifacts","items":["Shadowing confirms stones","Posterior enhancement for fluid"]}]
  }',4,25,'ultrasound'),
('a2000000-0000-0000-0000-000000000005','Renal/Bladder Protocol','Kidneys in 2 planes, bladder volume, hydronephrosis', '{
  "sections":[
    {"title":"Protocol","items":["Kidneys long/short with cortex","Measure if indicated","Bladder transverse/sagittal, post-void if ordered"]},
    {"title":"Tips","items":["Full bladder improves pelvic views","Supine and decubitus if needed","Posterior enhancement in bladder normal"]}]
  }',5,20,'ultrasound'),
('a2000000-0000-0000-0000-000000000006','Thyroid & Superficial','High-frequency linear, small movements, vessels/structures', '{
  "sections":[
    {"title":"Technique","items":["High frequency linear","Light pressure, small sweeps","Color for vascular mapping"]},
    {"title":"Views","items":["Long/transverse each lobe","Isthmus midline"]}]
  }',6,20,'ultrasound'),
('a2000000-0000-0000-0000-000000000007','Vascular Access Guidance','Identify artery vs vein, compressibility, needle path', '{
  "sections":[
    {"title":"Identify","items":["Compression test veins","Color: phasic vs pulsatile","Depth and diameter for plan"]},
    {"title":"Approach","items":["In-plane vs out-of-plane","Sterile technique per policy","Document vessel and depth"]}]
  }',7,15,'ultrasound'),
('a2000000-0000-0000-0000-000000000008','Ultrasound Troubleshooting','Poor images due to gas, habitus; optimization ladder', '{
  "sections":[
    {"title":"Obesity","items":["Lower frequency","Harmonics if available","Use subcostal for RUQ liver/GB"]},
    {"title":"Gas/ribs","items":["Change window/intercostal","Patient position changes","Breath-hold to move diaphragm"]},
    {"title":"Document limits","items":["Body habitus","Bowel gas","Patient cooperation"]}]
  }',8,15,'ultrasound'),

-- Echo track
('e3000000-0000-0000-0000-000000000001','Focused Echo Goals & Scope','Binary questions, emergencies, limits vs full echo', '{
  "sections":[
    {"title":"Goals","items":["Effusion/tamponade?","Gross function?","Volume status via IVC"]},
    {"title":"Scope limits","items":["Not full valve workup","Not surgical planning","Escalate concerning findings"]}]
  }',1,20,'echo'),
('e3000000-0000-0000-0000-000000000002','Parasternal Views (PLAX/PSAX)','Probe placement, looks-right cues, PSAX levels', '{
  "sections":[
    {"title":"PLAX","items":["Left parasternal 3rd-4th ICS","Indicator to right shoulder","Aim to right scapula","RV anterior, LV/LA, Ao root visible"]},
    {"title":"PSAX levels","items":["Rotate 90° from PLAX","Base (AV), Mid (MV), Papillary"]}]
  }',2,25,'echo'),
('e3000000-0000-0000-0000-000000000003','Apical Views (4/2/3)','Apex find, avoid foreshortening, chamber layout', '{
  "sections":[
    {"title":"Apical 4","items":["Probe at PMI, indicator left","All 4 chambers, both AV valves"]},
    {"title":"Apical 2/3","items":["Rotate 90° (A2C) then 60° (A3C)","Include LV, LA, Ao root"]}]
  }',3,25,'echo'),
('e3000000-0000-0000-0000-000000000004','Subcostal & IVC','Subxiphoid 4-ch, IVC measurement, collapsibility', '{
  "sections":[
    {"title":"Subcostal 4ch","items":["Probe subxiphoid, indicator left","Aim to left shoulder","Useful in COPD/ventilated"]},
    {"title":"IVC","items":["Indicator to head","Measure 2-3 cm from RA","Normal >50% collapse with sniff"]}]
  }',4,20,'echo'),
('e3000000-0000-0000-0000-000000000005','Poor Windows Strategies','Obesity, COPD, post-op; alternate windows', '{
  "sections":[
    {"title":"Obesity","items":["Lower freq, harmonics","Subcostal priority","More time for windows"]},
    {"title":"COPD","items":["Very low parasternal utility","Subcostal primary","Sit up if tolerated"]}]
  }',5,15,'echo'),
('e3000000-0000-0000-0000-000000000006','Focused Findings & Escalation','What to report/escalate: tamponade, severe dysfunction', '{
  "sections":[
    {"title":"Escalate","items":["Pericardial effusion with RA/RV collapse","Severely reduced global function","No visual windows -> document"]},
    {"title":"Document","items":["Views obtained and limits","Patient tolerance","Arrhythmia noted"]}]
  }',6,15,'echo'),

-- EKG track
('b4000000-0000-0000-0000-000000000001','Prep & Machine Setup','Skin prep, electrodes, machine calibration', '{
  "sections":[
    {"title":"Prep","items":["Expose needed areas respectfully","Clean/dry/abrade/shave if needed","Check electrode dates/gel"]},
    {"title":"Machine","items":["Paper speed 25 mm/sec","Calibration 10 mm/mV","Lead integrity test","Filters 0.5-40 Hz adults"]}]
  }',1,15,'ekg'),
('b4000000-0000-0000-0000-000000000002','Limb & Precordial Placement','Standard positions and color mnemonics', '{
  "sections":[
    {"title":"Limb leads","items":["RA white (right)","LA black (left arm)","RL green (ground)","LL red (left leg)"]},
    {"title":"Chest leads","items":["V1 4th ICS RSB","V2 4th ICS LSB","V3 midway V2-V4","V4 5th ICS MCL","V5 same level AAL","V6 same level MAL"]}]
  }',2,15,'ekg'),
('b4000000-0000-0000-0000-000000000003','Artifact Recognition & Fixes','Muscle, 60-cycle, wandering baseline, loose lead', '{
  "sections":[
    {"title":"Muscle tremor","items":["Warm patient","Support arms","Reduce anxiety"]},
    {"title":"60-cycle","items":["Remove electronics","Check grounding","Replace electrodes if needed"]},
    {"title":"Wandering baseline","items":["Clean skin better","Replace dry electrodes","Coach stillness"]}]
  }',3,15,'ekg'),
('b4000000-0000-0000-0000-000000000004','Rhythm Strip & Escalation','Lead II strip, dangerous rhythms to escalate', '{
  "sections":[
    {"title":"Rhythm strip","items":["Lead II 6-10s","Check P-QRS-T","Rate/rhythm regularity"]},
    {"title":"Escalate immediately","items":["VF/VT","Asystole","Complete heart block with symptoms"]}]
  }',4,15,'ekg');

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
    {"id":"q34","type":"multiple_choice","question":"Escalate immediately for:","options":["Sinus brady 55","PACs","VF/VT","Sinus tach 120"],"answer":"VF/VT","rationale":"Life-threatening rhythms need immediate action."}
  ]'::jsonb),
('c1111111-2222-4111-8111-111111111111',null,'Comprehensive Scenario Quiz','comprehensive',80,40,3,
  '[
    {"id":"q21","type":"scenario","question":"RUQ pain with gas obscuring GB, first step?","options":["Increase gain","Higher frequency probe","Reposition to LLD","Call non-diagnostic"],"answer":"Reposition to LLD","rationale":"Optimization ladder starts with positioning."},
    {"id":"q23","type":"multiple_choice","question":"No parasternal windows in obese COPD patient. Best alternative?","options":["Higher frequency","Subcostal windows","More pressure","Stop study"],"answer":"Subcostal windows","rationale":"Subcostal often succeeds when parasternal fails."},
    {"id":"q25","type":"multiple_choice","question":"60-cycle interference first fix:","options":["Replace electrodes","Remove nearby electrical devices","Move rooms","Add gel"],"answer":"Remove nearby electrical devices","rationale":"Eliminate external electrical noise first."},
    {"id":"q30","type":"multiple_choice","question":"Good PLAX view shows:","options":["All 4 chambers","RV, LV, LA, aortic root","Left heart only","Valves in cross-section"],"answer":"RV, LV, LA, aortic root","rationale":"Standard PLAX contents."},
    {"id":"q36","type":"multiple_choice","question":"Normal IVC collapse with inspiration:","options":["25%","50%","75%","90%"],"answer":"50%","rationale":">50% collapse is normal filling pressures."}
  ]'::jsonb);

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
('d8888888-8888-8888-8888-888888888888','Rhythm Recognition (Escalation)','Recognize dangerous rhythms for escalation','ekg',25,0,'["VF/VT recognition","Complete heart block recognition","Escalation steps"]'::jsonb);

