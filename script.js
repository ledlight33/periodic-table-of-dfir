const CATEGORIES = {
    disk:      { name: 'Disk & Memory Forensics',    color: '#42A5F5' },
    network:   { name: 'Network Forensics',           color: '#FF7043' },
    malware:   { name: 'Malware Analysis & RE',       color: '#EF5350' },
    ir:        { name: 'Incident Response',            color: '#AB47BC' },
    mobile:    { name: 'Mobile Forensics',             color: '#26C6DA' },
    logti:     { name: 'Log Analysis & Threat Intel',  color: '#FFCA28' },
    framework: { name: 'Frameworks & Standards',       color: '#66BB6A' },
    cloud:     { name: 'Cloud Forensics',              color: '#26A69A' },
    hybrid:    { name: 'Hybrid Platforms',              color: '#9E9E9E' }
};

// Platform support indicators (shown in tooltip on hover)
const OS_LABELS = {
    win:       { icon: '🪟', label: 'Windows' },
    lin:       { icon: '🐧', label: 'Linux' },
    mac:       { icon: '🍎', label: 'macOS' },
    web:       { icon: '🌐', label: 'Web-based' },
    standard:  { icon: '📋', label: 'Framework / Standard' },
    appliance: { icon: '🔌', label: 'Hardware Appliance' }
};

// License types: 'os' = Open Source, 'fr' = Free, 'cm' = Commercial, 'fm' = Freemium, 'std' = Standard/Framework
const ELEMENTS = [
    // === Row 1 — Iconic anchors (like H and He) ===
    { n:1,   s:'CT', name:'Cyber Triage',     cat:'ir',        l:'cm',  r:1,  c:1,  os:['win','lin'],          url:'https://www.cybertriage.com', d:'Automated incident response forensics' },
    { n:2,   s:'Sp', name:'Splunk',           cat:'logti',     l:'cm',  r:1,  c:18, os:['win','lin','mac'],    url:'https://www.splunk.com', d:'Enterprise SIEM and data analytics platform' },

    // === Row 2 — Frameworks (left) + LogTI (right) ===
    { n:3,   s:'NF', name:'NIST CSF',         cat:'framework', l:'std', r:2,  c:1,  os:['standard'],           url:'https://www.nist.gov/cyberframework', d:'Cybersecurity framework for managing risk' },
    { n:4,   s:'NI', name:'NIST 800-61',      cat:'framework', l:'std', r:2,  c:2,  os:['standard'],           url:'https://csrc.nist.gov/pubs/sp/800/61/r2/final', d:'Computer security incident handling guide' },
    { n:5,   s:'EK', name:'Elastic Stack',    cat:'logti',     l:'os',  r:2,  c:13, os:['win','lin','mac'],    url:'https://www.elastic.co/elastic-stack', d:'Open-source log analysis and search (ELK)' },
    { n:6,   s:'Gl', name:'Graylog',          cat:'logti',     l:'os',  r:2,  c:14, os:['lin'],                url:'https://www.graylog.org', d:'Centralized log management platform' },
    { n:7,   s:'QR', name:'QRadar',           cat:'logti',     l:'cm',  r:2,  c:15, os:['web'],                url:'https://www.ibm.com/qradar', d:'IBM SIEM for threat detection and compliance' },
    { n:8,   s:'Se', name:'Sentinel',         cat:'logti',     l:'cm',  r:2,  c:16, os:['web'],                url:'https://azure.microsoft.com/en-us/products/microsoft-sentinel', d:'Microsoft cloud-native SIEM solution' },
    { n:9,   s:'Si', name:'Sigma',            cat:'logti',     l:'os',  r:2,  c:17, os:['standard'],           url:'https://github.com/SigmaHQ/sigma', d:'Generic signature format for log events' },
    { n:10,  s:'OC', name:'OpenCTI',          cat:'logti',     l:'os',  r:2,  c:18, os:['web'],                url:'https://www.opencti.io', d:'Open-source cyber threat intelligence platform' },

    // === Row 3 — Frameworks (left) + LogTI (right) ===
    { n:11,  s:'SR', name:'SANS IR',          cat:'framework', l:'std', r:3,  c:1,  os:['standard'],           url:'https://www.sans.org/white-papers/33901/', d:'SANS incident response process methodology' },
    { n:12,  s:'DM', name:'Diamond Model',    cat:'framework', l:'std', r:3,  c:2,  os:['standard'],           url:'https://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf', d:'Intrusion analysis methodology' },
    { n:13,  s:'MI', name:'MISP',             cat:'logti',     l:'os',  r:3,  c:13, os:['web'],                url:'https://www.misp-project.org', d:'Threat intelligence sharing platform' },
    { n:14,  s:'VT', name:'VirusTotal',       cat:'logti',     l:'fm',  r:3,  c:14, os:['web'],                url:'https://www.virustotal.com', d:'Multi-engine file and URL scanner' },
    { n:15,  s:'GN', name:'GreyNoise',        cat:'logti',     l:'fm',  r:3,  c:15, os:['web'],                url:'https://www.greynoise.io', d:'Internet noise and mass scanning analyzer' },
    { n:16,  s:'Ts', name:'Timesketch',       cat:'logti',     l:'os',  r:3,  c:16, os:['web'],                url:'https://timesketch.org', d:'Collaborative forensic timeline analysis' },
    { n:17,  s:'Sh', name:'Shodan',           cat:'logti',     l:'fm',  r:3,  c:17, os:['web'],                url:'https://www.shodan.io', d:'Internet-connected device search engine' },
    { n:18,  s:'Ar', name:'Aurora',           cat:'logti',     l:'cm',  r:3,  c:18, os:['win'],                url:'https://www.nextron-systems.com/aurora/', d:'Sigma-based endpoint detection agent' },

    // === Row 4 — FW(c:1-2) + Disk(c:3-7) + Hybrid(c:8-9) + Network(c:10-17) + LogTI(c:18) ===
    { n:19,  s:'D3', name:'D3FEND',           cat:'framework', l:'fr',  r:4,  c:1,  os:['standard'],           url:'https://d3fend.mitre.org', d:'MITRE defensive techniques knowledge graph' },
    { n:20,  s:'RE', name:'RE&CT',            cat:'framework', l:'os',  r:4,  c:2,  os:['standard'],           url:'https://atc-project.github.io/atc-react/', d:'Framework of incident response actions' },
    { n:21,  s:'Au', name:'Autopsy',          cat:'disk',      l:'os',  r:4,  c:3,  os:['win','lin','mac'],    url:'https://www.autopsy.com', d:'Open-source digital forensics platform' },
    { n:22,  s:'FT', name:'FTK Imager',       cat:'disk',      l:'fr',  r:4,  c:4,  os:['win'],                url:'https://www.exterro.com/digital-forensics-software/ftk-imager', d:'Forensic disk imaging and preview tool' },
    { n:23,  s:'Vo', name:'Volatility',       cat:'disk',      l:'os',  r:4,  c:5,  os:['win','lin','mac'],    url:'https://www.volatilityfoundation.org', d:'Advanced memory forensics framework' },
    { n:24,  s:'TK', name:'Sleuth Kit',       cat:'disk',      l:'os',  r:4,  c:6,  os:['win','lin','mac'],    url:'https://www.sleuthkit.org', d:'Filesystem forensic analysis toolkit' },
    { n:25,  s:'XW', name:'X-Ways',           cat:'disk',      l:'cm',  r:4,  c:7,  os:['win'],                url:'https://www.x-ways.net/forensics/', d:'Advanced forensics work environment' },
    { n:26,  s:'En', name:'EnCase',           cat:'hybrid',    l:'cm',  r:4,  c:8,  os:['win'],                url:'https://www.opentext.com/products/encase-forensic', d:'Enterprise digital investigation solution' },
    { n:27,  s:'Ax', name:'AXIOM',            cat:'hybrid',    l:'cm',  r:4,  c:9,  os:['win'],                url:'https://www.magnetforensics.com/products/magnet-axiom/', d:'Magnet forensics investigation suite' },
    { n:28,  s:'Wk', name:'Wireshark',        cat:'network',   l:'os',  r:4,  c:10, os:['win','lin','mac'],    url:'https://www.wireshark.org', d:'Network protocol analyzer and packet inspector' },
    { n:29,  s:'Td', name:'tcpdump',          cat:'network',   l:'os',  r:4,  c:11, os:['lin','mac'],          url:'https://www.tcpdump.org', d:'Command-line packet capture and analysis' },
    { n:30,  s:'Zk', name:'Zeek',             cat:'network',   l:'os',  r:4,  c:12, os:['lin','mac'],          url:'https://zeek.org', d:'Network security monitoring framework' },
    { n:31,  s:'Su', name:'Suricata',         cat:'network',   l:'os',  r:4,  c:13, os:['win','lin','mac'],    url:'https://suricata.io', d:'High-performance IDS/IPS/NSM engine' },
    { n:32,  s:'Sn', name:'Snort',            cat:'network',   l:'os',  r:4,  c:14, os:['win','lin','mac'],    url:'https://www.snort.org', d:'Open-source intrusion detection system' },
    { n:33,  s:'NM', name:'NetworkMiner',     cat:'network',   l:'fm',  r:4,  c:15, os:['win','lin','mac'],    url:'https://www.netresec.com/?page=NetworkMiner', d:'Network forensic analysis tool (NFAT)' },
    { n:34,  s:'Am', name:'Arkime',           cat:'network',   l:'os',  r:4,  c:16, os:['lin'],                url:'https://arkime.com', d:'Full packet capture and search system' },
    { n:35,  s:'Ri', name:'RITA',             cat:'network',   l:'os',  r:4,  c:17, os:['win','lin','mac'],    url:'https://github.com/activecm/rita', d:'Real intelligence threat analytics for Zeek' },
    { n:36,  s:'Sk', name:'Strelka',          cat:'logti',     l:'os',  r:4,  c:18, os:['lin'],                url:'https://github.com/target/strelka', d:'File analysis and scanning at scale' },

    // === Row 5 — FW(c:1-2) + Disk(c:3-6) + Hybrid(c:7-8) + Network(c:9-13) + IR(c:14-18) ===
    { n:37,  s:'I5', name:'ISO 27035',        cat:'framework', l:'std', r:5,  c:1,  os:['standard'],           url:'https://www.iso.org/standard/78973.html', d:'Incident management standard' },
    { n:38,  s:'I7', name:'ISO 27037',        cat:'framework', l:'std', r:5,  c:2,  os:['standard'],           url:'https://www.iso.org/standard/44381.html', d:'Digital evidence handling guidelines' },
    { n:39,  s:'Kp', name:'KAPE',             cat:'disk',      l:'fr',  r:5,  c:3,  os:['win'],                url:'https://github.com/EricZimmerman/KapeFiles', d:'Kroll artifact parser and extractor' },
    { n:40,  s:'BE', name:'Bulk Extractor',   cat:'disk',      l:'os',  r:5,  c:4,  os:['win','lin','mac'],    url:'https://github.com/simsong/bulk_extractor', d:'Extract useful artifacts from disk images' },
    { n:41,  s:'PR', name:'PhotoRec',         cat:'disk',      l:'os',  r:5,  c:5,  os:['win','lin','mac'],    url:'https://www.cgsecurity.org/wiki/PhotoRec', d:'Recover lost files from disk images' },
    { n:42,  s:'Hs', name:'Hindsight',        cat:'disk',      l:'os',  r:5,  c:6,  os:['win','lin','mac'],    url:'https://github.com/obsidianforensics/hindsight', d:'Chrome/Chromium browser forensics tool' },
    { n:43,  s:'Bx', name:'Belkasoft X',      cat:'hybrid',    l:'cm',  r:5,  c:7,  os:['win'],                url:'https://belkasoft.com/x', d:'All-in-one forensic acquisition and analysis platform' },
    { n:44,  s:'Ba', name:'Binalyze AIR',     cat:'hybrid',    l:'cm',  r:5,  c:8,  os:['web'],                url:'https://binalyze.com', d:'Rapid remote forensic acquisition and triage' },
    { n:45,  s:'Tw', name:'tshark',           cat:'network',   l:'os',  r:5,  c:9,  os:['win','lin','mac'],    url:'https://www.wireshark.org/docs/man-pages/tshark.html', d:'CLI network protocol analyzer' },
    { n:46,  s:'Zu', name:'Zui',              cat:'network',   l:'os',  r:5,  c:10, os:['win','lin','mac'],    url:'https://zui.brimdata.io', d:'Desktop app for network data exploration' },
    { n:47,  s:'St', name:'Stenographer',     cat:'network',   l:'os',  r:5,  c:11, os:['lin'],                url:'https://github.com/google/stenographer', d:'Full packet capture to disk at scale' },
    { n:48,  s:'Ml', name:'Malcolm',          cat:'network',   l:'os',  r:5,  c:12, os:['lin'],                url:'https://github.com/cisagov/Malcolm', d:'CISA network traffic analysis tool suite' },
    { n:49,  s:'NW', name:'NetWitness',       cat:'network',   l:'cm',  r:5,  c:13, os:['win','lin'],          url:'https://www.netwitness.com', d:'Network detection and response platform' },
    { n:50,  s:'Vr', name:'Velociraptor',     cat:'ir',        l:'os',  r:5,  c:14, os:['win','lin','mac'],    url:'https://docs.velociraptor.app', d:'Endpoint monitoring and forensic collection' },
    { n:51,  s:'GR', name:'GRR',              cat:'ir',        l:'os',  r:5,  c:15, os:['win','lin','mac'],    url:'https://github.com/google/grr', d:'Google rapid response IR framework' },
    { n:52,  s:'TH', name:'TheHive',          cat:'ir',        l:'os',  r:5,  c:16, os:['lin'],                url:'https://thehive-project.org', d:'Scalable incident response platform' },
    { n:53,  s:'Cx', name:'Cortex',           cat:'ir',        l:'os',  r:5,  c:17, os:['lin'],                url:'https://github.com/TheHive-Project/Cortex', d:'Observable analysis and active response' },
    { n:54,  s:'Oq', name:'osquery',          cat:'ir',        l:'os',  r:5,  c:18, os:['win','lin','mac'],    url:'https://osquery.io', d:'SQL-powered endpoint visibility tool' },

    // === Row 6 — FW(c:1-2) + [57-71 marker c:3] + Disk(c:4-6) + Hybrid(c:7-10) + IR(c:11-18) ===
    { n:55,  s:'RF', name:'RFC 3227',         cat:'framework', l:'std', r:6,  c:1,  os:['standard'],           url:'https://datatracker.ietf.org/doc/html/rfc3227', d:'Evidence collection and archiving guidelines' },
    { n:56,  s:'CP', name:'CISA Playbooks',   cat:'framework', l:'fr',  r:6,  c:2,  os:['standard'],           url:'https://www.cisa.gov/incident-response-playbooks', d:'Federal cybersecurity IR playbooks' },
    { n:72,  s:'AI', name:'Arsenal IM',       cat:'disk',      l:'fm',  r:6,  c:4,  os:['win'],                url:'https://arsenalrecon.com/weapons/image-mounter', d:'Mount forensic disk images as drives' },
    { n:73,  s:'RX', name:'Reg Explorer',     cat:'disk',      l:'fr',  r:6,  c:5,  os:['win'],                url:'https://ericzimmerman.github.io/', d:'Windows registry hive analysis tool' },
    { n:74,  s:'Mf', name:'MFTECmd',          cat:'disk',      l:'fr',  r:6,  c:6,  os:['win','lin','mac'],    url:'https://github.com/EricZimmerman/MFTECmd', d:'NTFS Master File Table parser' },
    { n:75,  s:'So', name:'Security Onion',   cat:'hybrid',    l:'os',  r:6,  c:7,  os:['lin'],                url:'https://securityonionsolutions.com', d:'Open-source threat hunting and NIDS/NSM platform' },
    { n:76,  s:'CF', name:'CrowdStrike',      cat:'hybrid',    l:'cm',  r:6,  c:8,  os:['win','lin','mac'],    url:'https://www.crowdstrike.com', d:'Cloud-native endpoint detection (EDR)' },
    { n:77,  s:'CB', name:'Carbon Black',     cat:'hybrid',    l:'cm',  r:6,  c:9,  os:['win','lin','mac'],    url:'https://www.carbonblack.com', d:'Endpoint detection and response platform' },
    { n:78,  s:'Ox', name:'Oxygen',           cat:'hybrid',    l:'cm',  r:6,  c:10, os:['win'],                url:'https://www.oxygenforensics.com', d:'Mobile forensic investigation suite' },
    { n:79,  s:'Lk', name:'LOKI',             cat:'ir',        l:'os',  r:6,  c:11, os:['win','lin','mac'],    url:'https://github.com/Neo23x0/Loki', d:'Simple IOC and YARA rule scanner' },
    { n:80,  s:'Th', name:'Thor',             cat:'ir',        l:'cm',  r:6,  c:12, os:['win','lin','mac'],    url:'https://www.nextron-systems.com/thor/', d:'Advanced APT and forensic scanner' },
    { n:81,  s:'Cy', name:'CyLR',             cat:'ir',        l:'os',  r:6,  c:13, os:['win','lin','mac'],    url:'https://github.com/orlikoski/CyLR', d:'Live response forensic artifact collector' },
    { n:82,  s:'Ch', name:'Chainsaw',         cat:'ir',        l:'os',  r:6,  c:14, os:['win','lin','mac'],    url:'https://github.com/WithSecureLabs/chainsaw', d:'Rapid Windows event log analysis' },
    { n:83,  s:'Hb', name:'Hayabusa',         cat:'ir',        l:'os',  r:6,  c:15, os:['win','lin','mac'],    url:'https://github.com/Yamato-Security/hayabusa', d:'Windows event log fast forensic analyzer' },
    { n:84,  s:'DB', name:'DeepBlueCLI',      cat:'ir',        l:'os',  r:6,  c:16, os:['win'],                url:'https://github.com/sans-blue-team/DeepBlueCLI', d:'PowerShell-based event log threat hunter' },
    { n:85,  s:'Sy', name:'Sysmon',           cat:'ir',        l:'fr',  r:6,  c:17, os:['win','lin'],          url:'https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon', d:'Windows system activity monitor' },
    { n:86,  s:'UA', name:'UAC',              cat:'ir',        l:'os',  r:6,  c:18, os:['lin','mac'],          url:'https://github.com/tclahr/uac', d:'Unix-like artifacts collector for IR' },

    // === Row 7 — FW(c:1-2) + [89-103 marker c:3] + Disk(c:4) + Cloud(c:5-15) + IR(c:16-18) ===
    { n:87,  s:'AT', name:'MITRE ATT&CK',     cat:'framework', l:'fr',  r:7,  c:1,  os:['standard'],           url:'https://attack.mitre.org', d:'Adversary tactics and techniques knowledge base' },
    { n:88,  s:'DF', name:'DFIR Report',       cat:'framework', l:'fr',  r:7,  c:2,  os:['standard'],           url:'https://thedfirreport.com', d:'Community knowledge resource — real-world intrusion analysis & threat research reports' },
    { n:104, s:'Mp', name:'MemProcFS',         cat:'disk',      l:'os',  r:7,  c:4,  os:['win','lin','mac'],    url:'https://github.com/ufrisk/MemProcFS', d:'Memory analysis via virtual filesystem' },
    { n:105, s:'Cl', name:'CloudTrail',        cat:'cloud',     l:'cm',  r:7,  c:5,  os:['web'],                url:'https://aws.amazon.com/cloudtrail/', d:'AWS API activity logging and auditing' },
    { n:106, s:'GD', name:'GuardDuty',         cat:'cloud',     l:'cm',  r:7,  c:6,  os:['web'],                url:'https://aws.amazon.com/guardduty/', d:'AWS intelligent threat detection service' },
    { n:107, s:'SS', name:'ScoutSuite',        cat:'cloud',     l:'os',  r:7,  c:7,  os:['win','lin','mac'],    url:'https://github.com/nccgroup/ScoutSuite', d:'Multi-cloud security auditing tool' },
    { n:108, s:'Pw', name:'Prowler',           cat:'cloud',     l:'os',  r:7,  c:8,  os:['win','lin','mac'],    url:'https://github.com/prowler-cloud/prowler', d:'Cloud security assessment CLI tool' },
    { n:109, s:'CQ', name:'CloudQuery',        cat:'cloud',     l:'os',  r:7,  c:9,  os:['win','lin','mac'],    url:'https://www.cloudquery.io', d:'Cloud asset inventory and compliance queries' },
    { n:110, s:'AH', name:'AzureHound',        cat:'cloud',     l:'os',  r:7,  c:10, os:['win','lin','mac'],    url:'https://github.com/BloodHoundAD/AzureHound', d:'Azure AD attack path enumeration' },
    { n:111, s:'Ro', name:'ROADtools',         cat:'cloud',     l:'os',  r:7,  c:11, os:['win','lin','mac'],    url:'https://github.com/dirkjanm/ROADtools', d:'Azure AD exploration and forensics' },
    { n:112, s:'Iv', name:'Invictus IR',       cat:'cloud',     l:'os',  r:7,  c:12, os:['web'],                url:'https://github.com/invictus-ir', d:'Azure and M365 incident response tools' },
    { n:113, s:'Cd', name:'Cado Response',     cat:'cloud',     l:'cm',  r:7,  c:13, os:['web'],                url:'https://www.cadosecurity.com', d:'Cloud-native forensics and IR platform' },
    { n:114, s:'Wd', name:'Wiz Defend',        cat:'cloud',     l:'cm',  r:7,  c:14, os:['web'],                url:'https://www.wiz.io/product/wiz-defend', d:'Cloud detection and response platform' },
    { n:115, s:'Fa', name:'Falco',             cat:'cloud',     l:'os',  r:7,  c:15, os:['lin'],                url:'https://falco.org', d:'Kubernetes and cloud runtime threat detection' },
    { n:116, s:'OR', name:'DFIR-ORC',          cat:'ir',        l:'os',  r:7,  c:16, os:['win'],                url:'https://github.com/DFIR-ORC/dfir-orc', d:'Forensic artifact collection framework' },
    { n:117, s:'Wz', name:'Wazuh',             cat:'ir',        l:'os',  r:7,  c:17, os:['win','lin','mac'],    url:'https://wazuh.com', d:'Open-source XDR and SIEM platform' },
    { n:118, s:'Ed', name:'Elastic EDR',       cat:'ir',        l:'fm',  r:7,  c:18, os:['win','lin','mac'],    url:'https://www.elastic.co/security/endpoint-security', d:'Elastic endpoint detection and response' },

    // === Row 9 — Malware Analysis & RE (cols 3-17) — numbers 57-71 like lanthanides ===
    { n:57,  s:'Gh', name:'Ghidra',            cat:'malware',   l:'os',  r:9,  c:3,  os:['win','lin','mac'],    url:'https://ghidra-sre.org', d:'NSA reverse engineering framework' },
    { n:58,  s:'ID', name:'IDA Pro',           cat:'malware',   l:'cm',  r:9,  c:4,  os:['win','lin','mac'],    url:'https://hex-rays.com/ida-pro/', d:'Industry-standard disassembler and debugger' },
    { n:59,  s:'Xd', name:'x64dbg',            cat:'malware',   l:'os',  r:9,  c:5,  os:['win'],                url:'https://x64dbg.com', d:'Open-source Windows x64/x32 debugger' },
    { n:60,  s:'R2', name:'Radare2',           cat:'malware',   l:'os',  r:9,  c:6,  os:['win','lin','mac'],    url:'https://rada.re', d:'Portable reverse engineering framework' },
    { n:61,  s:'CS', name:'CAPE Sandbox',      cat:'malware',   l:'os',  r:9,  c:7,  os:['lin'],                url:'https://github.com/kevoreilly/CAPEv2', d:'Config and payload extraction sandbox' },
    { n:62,  s:'Ay', name:'Any.Run',           cat:'malware',   l:'fm',  r:9,  c:8,  os:['web'],                url:'https://any.run', d:'Interactive online malware sandbox' },
    { n:63,  s:'Ya', name:'YARA',              cat:'malware',   l:'os',  r:9,  c:9,  os:['win','lin','mac'],    url:'https://virustotal.github.io/yara/', d:'Pattern matching for malware researchers' },
    { n:64,  s:'PE', name:'PEStudio',          cat:'malware',   l:'fm',  r:9,  c:10, os:['win'],                url:'https://www.winitor.com', d:'Static analysis of PE executables' },
    { n:65,  s:'Rx', name:'REMnux',            cat:'malware',   l:'os',  r:9,  c:11, os:['lin'],                url:'https://remnux.org', d:'Linux distro for malware analysis' },
    { n:66,  s:'CC', name:'CyberChef',         cat:'malware',   l:'os',  r:9,  c:12, os:['web'],                url:'https://gchq.github.io/CyberChef/', d:'Data encoding/decoding Swiss army knife' },
    { n:67,  s:'FL', name:'FLOSS',             cat:'malware',   l:'os',  r:9,  c:13, os:['win','lin','mac'],    url:'https://github.com/mandiant/flare-floss', d:'Obfuscated string extraction from malware' },
    { n:68,  s:'Ca', name:'Capa',              cat:'malware',   l:'os',  r:9,  c:14, os:['win','lin','mac'],    url:'https://github.com/mandiant/capa', d:'Detect capabilities in executable files' },
    { n:69,  s:'OL', name:'OLETools',          cat:'malware',   l:'os',  r:9,  c:15, os:['win','lin','mac'],    url:'https://github.com/decalage2/oletools', d:'Analyze malicious Office documents' },
    { n:70,  s:'Fr', name:'Frida',             cat:'malware',   l:'os',  r:9,  c:16, os:['win','lin','mac'],    url:'https://frida.re', d:'Dynamic instrumentation toolkit for RE and hooking' },
    { n:71,  s:'Di', name:'Detect It Easy',    cat:'malware',   l:'os',  r:9,  c:17, os:['win','lin','mac'],    url:'https://github.com/horsicq/Detect-It-Easy', d:'PE/ELF identifier for packers and compilers' },

    // === Row 10 — Mobile Forensics (cols 3-17) — numbers 89-103 like actinides ===
    { n:89,  s:'Pt', name:'PiRogue Tool Suite', cat:'mobile',    l:'os',  r:10, c:3,  os:['lin'],                url:'https://pts-project.org', d:'Network traffic analysis suite for mobile device forensics' },
    { n:90,  s:'Ce', name:'Cellebrite',        cat:'mobile',    l:'cm',  r:10, c:4,  os:['win'],                url:'https://cellebrite.com/en/ufed/', d:'Mobile device extraction and analysis' },
    { n:91,  s:'Ud', name:'UFADE',             cat:'mobile',    l:'os',  r:10, c:5,  os:['win','lin','mac'],    url:'https://github.com/prosch88/UFADE', d:'Universal forensic acquisition and decoding engine' },
    { n:92,  s:'AL', name:'ALEAPP',            cat:'mobile',    l:'os',  r:10, c:6,  os:['win','lin','mac'],    url:'https://github.com/abrignoni/ALEAPP', d:'Android logs events and protobuf parser' },
    { n:93,  s:'iL', name:'iLEAPP',            cat:'mobile',    l:'os',  r:10, c:7,  os:['win','lin','mac'],    url:'https://github.com/abrignoni/iLEAPP', d:'iOS logs events and plists parser' },
    { n:94,  s:'Mv', name:'MVT',               cat:'mobile',    l:'os',  r:10, c:8,  os:['win','lin','mac'],    url:'https://github.com/mvt-project/mvt', d:'Mobile verification toolkit for spyware' },
    { n:95,  s:'Lx', name:'ALEX',              cat:'mobile',    l:'os',  r:10, c:9,  os:['win','lin','mac'],    url:'https://github.com/prosch88/ALEX', d:'Android logical extraction and analysis tool' },
    { n:96,  s:'XR', name:'MSAB XRY',          cat:'mobile',    l:'cm',  r:10, c:10, os:['win'],                url:'https://www.msab.com/products/xry/', d:'Mobile device examination platform' },
    { n:97,  s:'Mq', name:'Magnet ACQUIRE',    cat:'mobile',    l:'fr',  r:10, c:11, os:['win'],                url:'https://www.magnetforensics.com/resources/magnet-acquire/', d:'Mobile and cloud evidence acquisition' },
    { n:98,  s:'Li', name:'libimobiledevice',  cat:'mobile',    l:'os',  r:10, c:12, os:['lin','mac'],          url:'https://libimobiledevice.org', d:'Cross-platform iOS device communication' },
    { n:99,  s:'Ad', name:'ADB',               cat:'mobile',    l:'os',  r:10, c:13, os:['win','lin','mac'],    url:'https://developer.android.com/tools/adb', d:'Android Debug Bridge for device access' },
    { n:100, s:'Ec', name:'Elcomsoft',          cat:'mobile',    l:'cm',  r:10, c:14, os:['win'],                url:'https://www.elcomsoft.com/eift.html', d:'iOS forensic toolkit and extraction' },
    { n:101, s:'Ap', name:'APOLLO',             cat:'mobile',    l:'os',  r:10, c:15, os:['win','lin','mac'],    url:'https://github.com/mac4n6/APOLLO', d:'Apple pattern of life analysis tool' },
    { n:102, s:'GK', name:'Magnet GrayKey',     cat:'mobile',    l:'cm',  r:10, c:16, os:['appliance'],          url:'https://www.magnetforensics.com/products/magnet-graykey/', d:'Mobile device passcode unlock and extraction' },
    { n:103, s:'Fj', name:'FUJI',               cat:'mobile',    l:'os',  r:10, c:17, os:['mac'],                url:'https://github.com/Lazza/Fuji', d:'iOS full filesystem acquisition tool' }
];

const LICENSE = {
    os:  { label: 'Open Source', color: '#FFFFFF' },
    fr:  { label: 'Free',        color: '#B0BEC5' },
    fm:  { label: 'Freemium',    color: '#FFD54F' },
    cm:  { label: 'Commercial',  color: '#EF9A9A' },
    std: { label: 'Standard',    color: '#90CAF9' }
};

// State
let activeFilters = new Set();
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    renderLegend();
    renderFilters();

    const searchInput = document.getElementById('search');
    const searchClear = document.getElementById('searchClear');

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        searchClear.classList.toggle('visible', e.target.value.length > 0);
        applyFilters();
    });

    searchClear.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        searchClear.classList.remove('visible');
        applyFilters();
        searchInput.focus();
    });

    // Apply filter from URL hash on load
    applyHashFilter();
    window.addEventListener('hashchange', applyHashFilter);
});

// Build the OS line for the tooltip — emoji icons + readable label
function renderOS(osArr) {
    if (!osArr || osArr.length === 0) return '';

    const icons = osArr.map(k => OS_LABELS[k] ? OS_LABELS[k].icon : '').filter(Boolean).join(' ');

    let label;
    const desktop = ['win', 'lin', 'mac'];
    if (osArr.length === 3 && desktop.every(k => osArr.includes(k))) {
        label = 'Cross-platform';
    } else if (osArr.length === 1) {
        label = OS_LABELS[osArr[0]] ? OS_LABELS[osArr[0]].label : '';
    } else {
        label = osArr.map(k => OS_LABELS[k] ? OS_LABELS[k].label : '').filter(Boolean).join(' / ');
    }

    return `<div class="tooltip-os"><span class="tooltip-os-icons">${icons}</span><span class="tooltip-os-label">${label}</span></div>`;
}

function renderTable() {
    const grid = document.getElementById('table');

    ELEMENTS.forEach(el => {
        const cat = CATEGORIES[el.cat];
        const lic = LICENSE[el.l];
        const tile = document.createElement('a');
        tile.className = 'element' + (el.cat === 'logti' ? ' dark-text' : '');
        tile.href = el.url;
        tile.target = '_blank';
        tile.rel = 'noopener noreferrer';
        tile.dataset.cat = el.cat;
        tile.dataset.row = el.r;
        tile.dataset.col = el.c;
        tile.style.cssText = `grid-row:${el.r};grid-column:${el.c};background:${cat.color};--cat-color:${cat.color}`;

        const shortUrl = el.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
        tile.innerHTML =
            `<span class="number">${el.n}</span>` +
            `<span class="license-dot" style="background:${lic.color}" title="${lic.label}"></span>` +
            `<span class="symbol">${el.s}</span>` +
            `<span class="name">${el.name}</span>` +
            `<div class="tooltip">` +
                `<div class="tooltip-name">${el.name}</div>` +
                `<div class="tooltip-cat" style="background:${cat.color};color:${el.cat === 'logti' ? '#1a1a1a' : '#fff'}">${cat.name}</div>` +
                `<div class="tooltip-desc">${el.d}</div>` +
                `<div class="tooltip-url">${shortUrl}</div>` +
                renderOS(el.os) +
                `<div class="tooltip-lic"><span class="tooltip-lic-dot" style="background:${lic.color}"></span>${lic.label}</div>` +
            `</div>`;

        grid.appendChild(tile);
    });

    // Row 6 c:3 — Malware series marker (like lanthanide indicator, 57–71)
    const mwMarker = document.createElement('div');
    mwMarker.className = 'element row-marker';
    mwMarker.dataset.row = '6';
    mwMarker.dataset.col = '3';
    mwMarker.dataset.cat = 'malware';
    mwMarker.style.cssText = `grid-row:6;grid-column:3;background:${CATEGORIES.malware.color};--cat-color:${CATEGORIES.malware.color};`;
    mwMarker.innerHTML =
        `<span class="symbol" style="font-size:1.0rem;line-height:1.15;font-weight:800">57–71</span>` +
        `<span class="name" style="font-size:0.62rem;opacity:1;font-weight:700;white-space:normal;text-align:center">MA·RE</span>`;
    mwMarker.addEventListener('mouseenter', () => {
        document.querySelectorAll('.element[data-cat="malware"]').forEach(el => el.classList.add('row-highlight'));
    });
    mwMarker.addEventListener('mouseleave', () => {
        document.querySelectorAll('.element[data-cat="malware"]').forEach(el => el.classList.remove('row-highlight'));
    });
    grid.appendChild(mwMarker);

    // Row 7 c:3 — Mobile series marker (like actinide indicator, 89–103)
    const mobMarker = document.createElement('div');
    mobMarker.className = 'element row-marker';
    mobMarker.dataset.row = '7';
    mobMarker.dataset.col = '3';
    mobMarker.dataset.cat = 'mobile';
    mobMarker.style.cssText = `grid-row:7;grid-column:3;background:${CATEGORIES.mobile.color};--cat-color:${CATEGORIES.mobile.color};`;
    mobMarker.innerHTML =
        `<span class="symbol" style="font-size:1.0rem;line-height:1.15;font-weight:800">89–103</span>` +
        `<span class="name" style="font-size:0.62rem;opacity:1;font-weight:700;white-space:normal;text-align:center">MOB</span>`;
    mobMarker.addEventListener('mouseenter', () => {
        document.querySelectorAll('.element[data-cat="mobile"]').forEach(el => el.classList.add('row-highlight'));
    });
    mobMarker.addEventListener('mouseleave', () => {
        document.querySelectorAll('.element[data-cat="mobile"]').forEach(el => el.classList.remove('row-highlight'));
    });
    grid.appendChild(mobMarker);

    // Key element — "How to read this table" (SVG with angled lines like real periodic table)
    const key = document.createElement('div');
    key.className = 'table-key';
    key.style.cssText = 'grid-row:2/4;grid-column:4/12;';
    key.innerHTML =
        '<svg viewBox="0 0 700 138" xmlns="http://www.w3.org/2000/svg" class="key-svg">' +
            // Sample tile (Velociraptor, IR purple, n:50) — shifted LEFT by 15px (rect 200→185)
            '<rect x="185" y="10" width="76" height="76" rx="5" fill="' + CATEGORIES.ir.color + '"/>' +
            '<text x="196" y="27" fill="white" font-size="10" font-family="Inter,sans-serif" opacity="0.8">50</text>' +
            '<circle cx="253" cy="21" r="5" fill="' + LICENSE.os.color + '" stroke="rgba(0,0,0,0.4)" stroke-width="0.5"/>' +
            '<text x="223" y="58" fill="white" font-size="24" font-weight="800" font-family="Inter,sans-serif" text-anchor="middle">Vr</text>' +
            '<text x="223" y="75" fill="white" font-size="9" font-weight="500" font-family="Inter,sans-serif" text-anchor="middle" opacity="0.9">Velociraptor</text>' +

            // Tool Number (annotation shifted with tile)
            '<line x1="103" y1="13" x2="194" y2="24" stroke="#aaa" stroke-width="1.4"/>' +
            '<circle cx="194" cy="24" r="3" fill="#aaa"/>' +
            '<text x="98" y="16" fill="#ddd" font-size="11" font-family="Inter,sans-serif" text-anchor="end" font-weight="500">Tool Number</text>' +

            // License Type (line shortened — ends near tile, label close)
            '<line x1="259" y1="21" x2="290" y2="13" stroke="#aaa" stroke-width="1.4"/>' +
            '<circle cx="259" cy="21" r="3" fill="#aaa"/>' +
            '<text x="295" y="16" fill="#ddd" font-size="11" font-family="Inter,sans-serif" font-weight="500">License Type</text>' +

            // Tool Abbreviation (annotation shifted with tile)
            '<line x1="103" y1="55" x2="184" y2="51" stroke="#aaa" stroke-width="1.4"/>' +
            '<circle cx="184" cy="51" r="3" fill="#aaa"/>' +
            '<text x="98" y="58" fill="#ddd" font-size="11" font-family="Inter,sans-serif" text-anchor="end" font-weight="500">Tool Abbreviation</text>' +

            // Full Tool Name (annotation shifted with tile)
            '<line x1="103" y1="92" x2="184" y2="74" stroke="#aaa" stroke-width="1.4"/>' +
            '<circle cx="184" cy="74" r="3" fill="#aaa"/>' +
            '<text x="98" y="95" fill="#ddd" font-size="11" font-family="Inter,sans-serif" text-anchor="end" font-weight="500">Full Tool Name</text>' +

            // Color = Category (line shortened — ends near tile, label close)
            '<line x1="263" y1="51" x2="290" y2="45" stroke="#aaa" stroke-width="1.4"/>' +
            '<circle cx="263" cy="51" r="3" fill="#aaa"/>' +
            '<text x="295" y="48" fill="#ddd" font-size="11" font-family="Inter,sans-serif" font-weight="500">Color = Category</text>' +

            // LICENSE legend header — moved further RIGHT (was x=408 → x=470)
            '<text x="470" y="74" fill="#fff" font-size="14" font-family="Inter,sans-serif" font-weight="800" letter-spacing="2.2">LICENSE</text>' +

            // Row 1 — left col x=478/488, right col x=608/618 (much wider gap so Open Source ↔ Free can breathe)
            '<circle cx="478" cy="91" r="5" fill="#FFFFFF" stroke="rgba(0,0,0,0.4)" stroke-width="0.5"/>' +
            '<text x="488" y="95" fill="#ddd" font-size="10" font-family="Inter,sans-serif">Open Source</text>' +
            '<circle cx="608" cy="91" r="5" fill="' + LICENSE.fr.color + '"/>' +
            '<text x="618" y="95" fill="#ddd" font-size="10" font-family="Inter,sans-serif">Free</text>' +

            // Row 2
            '<circle cx="478" cy="110" r="5" fill="' + LICENSE.fm.color + '"/>' +
            '<text x="488" y="114" fill="#ddd" font-size="10" font-family="Inter,sans-serif">Freemium</text>' +
            '<circle cx="608" cy="110" r="5" fill="' + LICENSE.cm.color + '"/>' +
            '<text x="618" y="114" fill="#ddd" font-size="10" font-family="Inter,sans-serif">Commercial</text>' +

            // Row 3
            '<circle cx="478" cy="129" r="5" fill="' + LICENSE.std.color + '"/>' +
            '<text x="488" y="133" fill="#ddd" font-size="10" font-family="Inter,sans-serif">Standard</text>' +
        '</svg>';
    grid.appendChild(key);
}

function renderLegend() {
    const legend = document.getElementById('legend');
    Object.values(CATEGORIES).forEach(cat => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        item.innerHTML = `<div class="legend-swatch" style="background:${cat.color}"></div><span>${cat.name}</span>`;
        legend.appendChild(item);
    });
}

function renderFilters() {
    const container = document.getElementById('filters');

    const allBtn = document.createElement('button');
    allBtn.className = 'filter-btn active';
    allBtn.textContent = 'All';
    allBtn.style.setProperty('--btn-color', '#888');
    allBtn.addEventListener('click', () => {
        activeFilters.clear();
        container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        allBtn.classList.add('active');
        applyFilters();
    });
    container.appendChild(allBtn);

    Object.entries(CATEGORIES).forEach(([key, cat]) => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn';
        btn.textContent = cat.name;
        btn.style.setProperty('--btn-color', cat.color);
        btn.addEventListener('click', () => {
            if (activeFilters.has(key)) {
                activeFilters.delete(key);
                btn.classList.remove('active');
            } else {
                activeFilters.add(key);
                btn.classList.add('active');
            }
            allBtn.classList.toggle('active', activeFilters.size === 0);
            applyFilters();
        });
        container.appendChild(btn);
    });
}

function applyFilters() {
    document.querySelectorAll('.element').forEach(el => {
        const cat = el.dataset.cat;
        const text = (el.textContent || '').toLowerCase();

        const matchesFilter = activeFilters.size === 0 || activeFilters.has(cat);
        const matchesSearch = !searchQuery || text.includes(searchQuery);

        el.classList.toggle('dimmed', !(matchesFilter && matchesSearch));
    });

    // Update URL hash
    if (activeFilters.size > 0) {
        const slug = [...activeFilters].map(k => CATEGORIES[k].name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '')).join(',');
        history.replaceState(null, '', '#' + slug);
    } else {
        history.replaceState(null, '', window.location.pathname);
    }
}

function applyHashFilter() {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const slugs = hash.split(',');
    const container = document.getElementById('filters');
    Object.entries(CATEGORIES).forEach(([key, cat]) => {
        const catSlug = cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');
        if (slugs.includes(catSlug)) {
            activeFilters.add(key);
            container.querySelectorAll('.filter-btn').forEach(btn => {
                if (btn.textContent === cat.name) btn.classList.add('active');
                if (btn.textContent === 'All') btn.classList.remove('active');
            });
        }
    });
    applyFilters();
}
