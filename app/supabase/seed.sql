-- Seed data for clinical training platform
-- Run in Supabase SQL editor or psql (service role recommended)

-- Modules (11 from manual)
insert into modules (id, title, description, content, order_index, estimated_duration)
values
('11111111-1111-1111-1111-111111111111','Orientation & Fundamentals','Ultrasound, echo, EKG basics, roles, safety, patient interaction', '{
  "sections":[
    {"title":"Plain English definitions","items":["Ultrasound = sound waves imaging","Echo = ultrasound focused on heart","EKG = electrical recording of heart"]},
    {"title":"Your role vs interpretation","items":["Acquire images/data","Optimize quality","Document without diagnosing","Escalate safety concerns"]},
    {"title":"Safety essentials","items":["ALARA","Probe disinfection steps","Electrical safety checks","Stop/escalate red flags"]},
    {"title":"Patient interaction scripts","items":["Two-identifier verification","Explain ultrasound/EKG simply","Offer chaperone and draping","Stop if distress"]}]
}',1,45),
('22222222-2222-2222-2222-222222222222','Essential Anatomy','Abdominal, cardiac, conduction anatomy with labeled images', '{
  "sections":[
    {"title":"Abdominal landmarks","items":["Liver/Gallbladder RUQ","IVC vs Aorta cues","Kidneys retroperitoneal"]},
    {"title":"Cardiac chambers/valves","items":["RA/RV right side, LA/LV left","Mitral/Tricuspid/Aortic/Pulmonary locations"]},
    {"title":"Conduction system","items":["SA node 60-100","AV node delay","Bundle branches/Purkinje distribution"]}]
}',2,40),
('33333333-3333-3333-3333-333333333333','Machine Overviews','Portable ultrasound/echo + EKG machine setup and controls', '{
  "sections":[
    {"title":"Ultrasound controls","items":["Depth first","Gain then TGC","Focus at target depth","Frequency for penetration vs resolution"]},
    {"title":"Probe types","items":["Linear 7-15 MHz superficial","Curved 2-5 MHz deep abdomen","Phased 2-5 MHz cardiac"]},
    {"title":"EKG machine setup","items":["Paper speed 25 mm/sec","Calibration 10 mm/mV","Lead integrity test","Filter settings adults 0.5-40 Hz"]}]
}',3,35),
('44444444-4444-4444-4444-444444444444','Pre-Exam Workflow','Orders, ID verification, room setup, device self-test, documentation', '{
  "sections":[
    {"title":"Verify orders & ID","items":["Name + DOB","Exam matches order","Allergy alerts","Previous studies if available"]},
    {"title":"Room + supplies","items":["Gloves, wipes, gel, probe covers","Lighting, privacy, emergency button","Paper/razors/electrodes"]},
    {"title":"Device self-test","items":["Probe selection/preset","Calibration check","Filter/time/date","Gain/depth/focus test"]},
    {"title":"Documentation basics","items":["Date/time, indication","Views obtained and limitations","Patient tolerance, technical quality"]}]
}',4,35),
('55555555-5555-5555-5555-555555555555','Portable Ultrasound Scanning','Probe orientation, sweep patterns, artifacts, optimization steps', '{
  "sections":[
    {"title":"Orientation & planes","items":["Indicator to head/right","Scan sagittal/transverse/coronal"]},
    {"title":"Sweep patterns","items":["Long axis then short axis","Fan/rock/rotate systematically"]},
    {"title":"Common artifacts","items":["Shadowing (stones/bone)","Posterior enhancement (fluid)","Reverberation, mirror, side lobe"]},
    {"title":"Optimization ladder","items":["Positioning","Probe choice/pressure","Depth/Gain/TGC","Focus/Frequency","Change window","Document limitation"]}]
}',5,45),
('66666666-6666-6666-6666-666666666666','Focused Echocardiography','PLAX/PSAX/Apical/Subcostal views, goals, IVC', '{
  "sections":[
    {"title":"Focused echo goals","items":["Binary: major dysfunction?","Effusion/tamponade screen","Volume status via IVC"]},
    {"title":"Standard views","items":["PLAX steps and looks-right cues","PSAX base/mid/papillary","Apical 4/2/3 chamber","Subcostal 4ch and IVC"]},
    {"title":"IVC assessment","items":[">50% collapse normal","<50% collapse elevated RA pressure"]}]
}',6,45),
('77777777-7777-7777-7777-777777777777','EKG Acquisition','Prep, lead placement V1-V6, artifacts and fixes, rhythm strip basics', '{
  "sections":[
    {"title":"Prep & skin","items":["Clean/dry/abrade/shave if needed","Check electrode dates and gel"]},
    {"title":"Lead placement","items":["Limb leads: RA white, LA black, RL green, LL red","V1/V2 4th ICS, V4 5th ICS MCL, V5-V6 same level AAL/MAL"]},
    {"title":"Artifacts & fixes","items":["Muscle tremor: warm/support","60-cycle: remove electronics","Wandering baseline: clean/replace electrodes"]},
    {"title":"Rhythm strip","items":["Lead II 6-10s","Check P-QRS-T morphology","Escalate VF/VT/asystole/block"]}]
}',7,35),
('88888888-8888-8888-8888-888888888888','Troubleshooting','Poor images, poor windows, messy EKG data, decision trees', '{
  "sections":[
    {"title":"US optimization ladder","items":["Reposition patient","Change probe/preset","Depth/Gain/TGC","Change window","Document limitation"]},
    {"title":"Echo poor windows","items":["Obesity: harmonic/low freq/subcostal","COPD: subcostal primary","Cannot lie LLD: supine/subcostal"]},
    {"title":"EKG messy data","items":["Sweat: dry/clean/press","Tremor: warm/support","Electrical: remove devices","Loose lead: reattach/replace"]},
    {"title":"Decision trees","items":["Image not clear -> ladder","EKG artifact -> identify/fix","Patient distress -> stop/escalate"]}]
}',8,30),
('99999999-9999-9999-9999-999999999999','Quizzes & Flashcards','Micro-quizzes, comprehensive exam, flashcards, drills', '{
  "sections":[
    {"title":"Micro-quizzes","items":["Physics/knobs","Core anatomy","Required views","Safety/workflow"]},
    {"title":"Comprehensive exam","items":["Scenario-based items","Optimization reasoning"]},
    {"title":"Flashcards","items":["Physics + knobs","Anatomy","Lead placement","Safety rules"]},
    {"title":"Spot-the-problem drills","items":["GB shadowing scenario","EKG artifact scenario","Echo poor window scenario","Safety refusal scenario"]}]
}',9,30),
('aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa','Competency & Practice Plan','Counts, timelines, milestones, progressive independence', '{
  "sections":[
    {"title":"Required counts","items":["Abdominal 25 supervised, 10 independent","Renal 20/10, Thyroid 15/5, Vascular 10","Echo 30/20 focused","EKG 50 + 25 rhythms"]},
    {"title":"Timeline","items":["Weeks 1-4 foundation","Weeks 5-8 guided independence","Weeks 9-12 independent practice"]},
    {"title":"Milestones","items":["Mid-training evaluation","Final sign-off","Continuing education plan"]}]
}',10,30),
('bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb','Appendices & References','Cheat sheets, glossaries, troubleshooting tables, templates', '{
  "sections":[
    {"title":"Cheat sheets","items":["Probe selection","Image optimization order","Echo views quick ref","Lead placement quick ref"]},
    {"title":"Glossary","items":["ALARA, TGC, PLAX, PSAX, PMI, etc."]},
    {"title":"Troubleshooting tables","items":["US problems vs causes/fixes","EKG artifacts vs fixes"]},
    {"title":"Templates","items":["Ultrasound documentation","Echo documentation","EKG documentation"]}]
}',11,25);

-- Quizzes (sample: micro + comprehensive)
insert into quizzes (id, module_id, title, type, passing_score, time_limit, max_attempts, questions)
values
('c1111111-1111-1111-1111-111111111111','99999999-9999-9999-9999-999999999999','Micro Quiz - Physics & Basics','micro',80,15,3,
  '[
    {"id":"q1","type":"multiple_choice","question":"Higher frequency ultrasound provides:","options":["Better penetration","Better resolution","Both","Neither"],"answer":"Better resolution","rationale":"Higher frequency improves resolution but reduces penetration."},
    {"id":"q2","type":"multiple_choice","question":"Probe choice for deep abdominal structures:","options":["7-15 MHz linear","2-5 MHz curved","Any probe works","High frequency phased"],"answer":"2-5 MHz curved","rationale":"Low frequency curved for penetration and FOV."},
    {"id":"q3","type":"multiple_choice","question":"In Doppler, BART means:","options":["Blue Always Red Toward","Blue Away Red Toward","Blue Away Red Through","Blue And Red Together"],"answer":"Blue Away Red Toward","rationale":"Standard color convention."},
    {"id":"q4","type":"multiple_choice","question":"If the whole image is dark, adjust:","options":["Depth","Focus","Overall gain","TGC only"],"answer":"Overall gain","rationale":"Overall gain impacts the full image first."},
    {"id":"q5","type":"multiple_choice","question":"TGC is used to:","options":["Overall brightness","Depth-specific brightness","Change probe frequency","Doppler sensitivity"],"answer":"Depth-specific brightness","rationale":"TGC compensates for attenuation by depth."}
  ]'::jsonb),
('c2222222-2222-2222-2222-222222222222','99999999-9999-9999-9999-999999999999','Comprehensive Exam A','comprehensive',80,40,3,
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

