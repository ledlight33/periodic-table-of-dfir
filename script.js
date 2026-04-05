const CATEGORIES = {
    disk:      { name: 'Disk & Memory Forensics',    color: '#42A5F5' },
    network:   { name: 'Network Forensics',           color: '#FF7043' },
    malware:   { name: 'Malware Analysis & RE',       color: '#EF5350' },
    ir:        { name: 'Incident Response',            color: '#AB47BC' },
    mobile:    { name: 'Mobile Forensics',             color: '#26C6DA' },
    logti:     { name: 'Log Analysis & Threat Intel',  color: '#FFCA28' },
    framework: { name: 'Frameworks & Standards',       color: '#66BB6A' },
    cloud:     { name: 'Cloud Forensics',              color: '#26A69A' }
};

// License types: 'os' = Open Source, 'fr' = Free, 'cm' = Commercial, 'fm' = Freemium, 'std' = Standard/Framework
const ELEMENTS = [
    // === Row 1 — Iconic anchors (like H and He) ===
    { n:1,  s:'CT', name:'Cyber Triage',     cat:'ir',        l:'cm',  r:1, c:1,  url:'https://www.cybertriage.com', d:'Automated incident response forensics' },
    { n:2,  s:'Sp', name:'Splunk',           cat:'logti',     l:'cm',  r:1, c:18, url:'https://www.splunk.com', d:'Enterprise SIEM and data analytics platform' },

    // === Row 2 — Frameworks (left) + LogTI (right) ===
    { n:3,  s:'NF', name:'NIST CSF',         cat:'framework', l:'std', r:2, c:1,  url:'https://www.nist.gov/cyberframework', d:'Cybersecurity framework for managing risk' },
    { n:4,  s:'NI', name:'NIST 800-61',      cat:'framework', l:'std', r:2, c:2,  url:'https://csrc.nist.gov/pubs/sp/800/61/r2/final', d:'Computer security incident handling guide' },
    { n:5,  s:'EK', name:'Elastic Stack',    cat:'logti',     l:'os',  r:2, c:13, url:'https://www.elastic.co/elastic-stack', d:'Open-source log analysis and search (ELK)' },
    { n:6,  s:'Gl', name:'Graylog',          cat:'logti',     l:'os',  r:2, c:14, url:'https://www.graylog.org', d:'Centralized log management platform' },
    { n:7,  s:'QR', name:'QRadar',           cat:'logti',     l:'cm',  r:2, c:15, url:'https://www.ibm.com/qradar', d:'IBM SIEM for threat detection and compliance' },
    { n:8,  s:'Se', name:'Sentinel',         cat:'logti',     l:'cm',  r:2, c:16, url:'https://azure.microsoft.com/en-us/products/microsoft-sentinel', d:'Microsoft cloud-native SIEM solution' },
    { n:9,  s:'Si', name:'Sigma',            cat:'logti',     l:'os',  r:2, c:17, url:'https://github.com/SigmaHQ/sigma', d:'Generic signature format for log events' },
    { n:10, s:'OC', name:'OpenCTI',          cat:'logti',     l:'os',  r:2, c:18, url:'https://www.opencti.io', d:'Open-source cyber threat intelligence platform' },

    // === Row 3 — Frameworks (left) + LogTI (right) ===
    { n:11, s:'SR', name:'SANS IR',          cat:'framework', l:'std', r:3, c:1,  url:'https://www.sans.org/white-papers/33901/', d:'SANS incident response process methodology' },
    { n:12, s:'DM', name:'Diamond Model',    cat:'framework', l:'std', r:3, c:2,  url:'https://www.activeresponse.org/wp-content/uploads/2013/07/diamond.pdf', d:'Intrusion analysis methodology' },
    { n:13, s:'MI', name:'MISP',             cat:'logti',     l:'os',  r:3, c:13, url:'https://www.misp-project.org', d:'Threat intelligence sharing platform' },
    { n:14, s:'VT', name:'VirusTotal',       cat:'logti',     l:'fm',  r:3, c:14, url:'https://www.virustotal.com', d:'Multi-engine file and URL scanner' },
    { n:15, s:'GN', name:'GreyNoise',        cat:'logti',     l:'fm',  r:3, c:15, url:'https://www.greynoise.io', d:'Internet noise and mass scanning analyzer' },
    { n:16, s:'Ts', name:'Timesketch',       cat:'logti',     l:'os',  r:3, c:16, url:'https://timesketch.org', d:'Collaborative forensic timeline analysis' },
    { n:17, s:'Sh', name:'Shodan',           cat:'logti',     l:'fm',  r:3, c:17, url:'https://www.shodan.io', d:'Internet-connected device search engine' },
    { n:18, s:'Ar', name:'Aurora',           cat:'logti',     l:'cm',  r:3, c:18, url:'https://www.nextron-systems.com/aurora/', d:'Sigma-based endpoint detection agent' },

    // === Row 4 — FW(2) + Disk(7, cols 3-9) + Network(8, cols 10-17) + Strelka(col 18) ===
    { n:19, s:'D3', name:'D3FEND',           cat:'framework', l:'fr',  r:4, c:1,  url:'https://d3fend.mitre.org', d:'MITRE defensive techniques knowledge graph' },
    { n:20, s:'RE', name:'RE&CT',            cat:'framework', l:'os',  r:4, c:2,  url:'https://atc-project.github.io/atc-react/', d:'Framework of incident response actions' },
    { n:21, s:'Au', name:'Autopsy',          cat:'disk',      l:'os',  r:4, c:3,  url:'https://www.autopsy.com', d:'Open-source digital forensics platform' },
    { n:22, s:'FT', name:'FTK Imager',       cat:'disk',      l:'fr',  r:4, c:4,  url:'https://www.exterro.com/ftk-imager', d:'Forensic disk imaging and preview tool' },
    { n:23, s:'Vo', name:'Volatility',       cat:'disk',      l:'os',  r:4, c:5,  url:'https://www.volatilityfoundation.org', d:'Advanced memory forensics framework' },
    { n:24, s:'TK', name:'Sleuth Kit',       cat:'disk',      l:'os',  r:4, c:6,  url:'https://www.sleuthkit.org', d:'Filesystem forensic analysis toolkit' },
    { n:25, s:'En', name:'EnCase',           cat:'disk',      l:'cm',  r:4, c:7,  url:'https://www.opentext.com/products/encase-forensic', d:'Enterprise digital investigation solution' },
    { n:26, s:'XW', name:'X-Ways',           cat:'disk',      l:'cm',  r:4, c:8,  url:'https://www.x-ways.net/forensics/', d:'Advanced forensics work environment' },
    { n:27, s:'Ax', name:'AXIOM',            cat:'disk',      l:'cm',  r:4, c:9,  url:'https://www.magnetforensics.com/products/magnet-axiom/', d:'Magnet forensics investigation suite' },
    { n:28, s:'Wk', name:'Wireshark',        cat:'network',   l:'os',  r:4, c:10, url:'https://www.wireshark.org', d:'Network protocol analyzer and packet inspector' },
    { n:29, s:'Td', name:'tcpdump',          cat:'network',   l:'os',  r:4, c:11, url:'https://www.tcpdump.org', d:'Command-line packet capture and analysis' },
    { n:30, s:'Zk', name:'Zeek',             cat:'network',   l:'os',  r:4, c:12, url:'https://zeek.org', d:'Network security monitoring framework' },
    { n:31, s:'Su', name:'Suricata',         cat:'network',   l:'os',  r:4, c:13, url:'https://suricata.io', d:'High-performance IDS/IPS/NSM engine' },
    { n:32, s:'Sn', name:'Snort',            cat:'network',   l:'os',  r:4, c:14, url:'https://www.snort.org', d:'Open-source intrusion detection system' },
    { n:33, s:'NM', name:'NetworkMiner',     cat:'network',   l:'fm',  r:4, c:15, url:'https://www.netresec.com/?page=NetworkMiner', d:'Network forensic analysis tool (NFAT)' },
    { n:34, s:'Am', name:'Arkime',           cat:'network',   l:'os',  r:4, c:16, url:'https://arkime.com', d:'Full packet capture and search system' },
    { n:35, s:'Ri', name:'RITA',             cat:'network',   l:'os',  r:4, c:17, url:'https://github.com/activecm/rita', d:'Real intelligence threat analytics for Zeek' },
    { n:36, s:'Sk', name:'Strelka',          cat:'logti',     l:'os',  r:4, c:18, url:'https://github.com/target/strelka', d:'File analysis and scanning at scale' },

    // === Row 5 — FW(2) + Disk(6, cols 3-8) + Network(5, cols 9-13) + IR(5, cols 14-18) ===
    { n:37, s:'I5', name:'ISO 27035',        cat:'framework', l:'std', r:5, c:1,  url:'https://www.iso.org/standard/78973.html', d:'Incident management standard' },
    { n:38, s:'I7', name:'ISO 27037',        cat:'framework', l:'std', r:5, c:2,  url:'https://www.iso.org/standard/44381.html', d:'Digital evidence handling guidelines' },
    { n:39, s:'Kp', name:'KAPE',             cat:'disk',      l:'fr',  r:5, c:3,  url:'https://github.com/EricZimmerman/KapeFiles', d:'Kroll artifact parser and extractor' },
    { n:40, s:'BE', name:'Bulk Extractor',   cat:'disk',      l:'os',  r:5, c:4,  url:'https://github.com/simsong/bulk_extractor', d:'Extract useful artifacts from disk images' },
    { n:41, s:'Fo', name:'Foremost',         cat:'disk',      l:'os',  r:5, c:5,  url:'https://foremost.sourceforge.net', d:'File carving tool for data recovery' },
    { n:42, s:'Sc', name:'Scalpel',          cat:'disk',      l:'os',  r:5, c:6,  url:'https://github.com/sleuthkit/scalpel', d:'High-performance file carving utility' },
    { n:43, s:'PR', name:'PhotoRec',         cat:'disk',      l:'os',  r:5, c:7,  url:'https://www.cgsecurity.org/wiki/PhotoRec', d:'Recover lost files from disk images' },
    { n:44, s:'Hs', name:'Hindsight',        cat:'disk',      l:'os',  r:5, c:8,  url:'https://github.com/obsidianforensics/hindsight', d:'Chrome/Chromium browser forensics tool' },
    { n:45, s:'Tw', name:'tshark',           cat:'network',   l:'os',  r:5, c:9,  url:'https://www.wireshark.org/docs/man-pages/tshark.html', d:'CLI network protocol analyzer' },
    { n:46, s:'Zu', name:'Zui',              cat:'network',   l:'os',  r:5, c:10, url:'https://zui.brimdata.io', d:'Desktop app for network data exploration' },
    { n:47, s:'St', name:'Stenographer',     cat:'network',   l:'os',  r:5, c:11, url:'https://github.com/google/stenographer', d:'Full packet capture to disk at scale' },
    { n:48, s:'Ml', name:'Malcolm',          cat:'network',   l:'os',  r:5, c:12, url:'https://github.com/cisagov/Malcolm', d:'CISA network traffic analysis tool suite' },
    { n:49, s:'NW', name:'NetWitness',       cat:'network',   l:'cm',  r:5, c:13, url:'https://www.netwitness.com', d:'Network detection and response platform' },
    { n:50, s:'Vr', name:'Velociraptor',     cat:'ir',        l:'os',  r:5, c:14, url:'https://docs.velociraptor.app', d:'Endpoint monitoring and forensic collection' },
    { n:51, s:'GR', name:'GRR',              cat:'ir',        l:'os',  r:5, c:15, url:'https://github.com/google/grr', d:'Google rapid response IR framework' },
    { n:52, s:'TH', name:'TheHive',          cat:'ir',        l:'os',  r:5, c:16, url:'https://thehive-project.org', d:'Scalable incident response platform' },
    { n:53, s:'Cx', name:'Cortex',           cat:'ir',        l:'os',  r:5, c:17, url:'https://github.com/TheHive-Project/Cortex', d:'Observable analysis and active response' },
    { n:54, s:'Oq', name:'osquery',          cat:'ir',        l:'os',  r:5, c:18, url:'https://osquery.io', d:'SQL-powered endpoint visibility tool' },

    // === Row 6 — FW(2) + Disk(5, cols 3-7) + IR(11, cols 8-18) ===
    { n:55, s:'RF', name:'RFC 3227',         cat:'framework', l:'std', r:6, c:1,  url:'https://datatracker.ietf.org/doc/html/rfc3227', d:'Evidence collection and archiving guidelines' },
    { n:56, s:'CP', name:'CISA Playbooks',   cat:'framework', l:'fr',  r:6, c:2,  url:'https://www.cisa.gov/incident-response-playbooks', d:'Federal cybersecurity IR playbooks' },
    { n:57, s:'Mp', name:'MemProcFS',        cat:'disk',      l:'os',  r:6, c:3,  url:'https://github.com/ufrisk/MemProcFS', d:'Memory analysis via virtual filesystem' },
    { n:58, s:'Gy', name:'Guymager',         cat:'disk',      l:'os',  r:6, c:4,  url:'https://guymager.sourceforge.io', d:'Forensic disk imager for Linux' },
    { n:59, s:'AI', name:'Arsenal IM',       cat:'disk',      l:'fm',  r:6, c:5,  url:'https://arsenalrecon.com/weapons/image-mounter', d:'Mount forensic disk images as drives' },
    { n:60, s:'RX', name:'Reg Explorer',     cat:'disk',      l:'fr',  r:6, c:6,  url:'https://ericzimmerman.github.io/', d:'Windows registry hive analysis tool' },
    { n:61, s:'Mf', name:'MFTECmd',          cat:'disk',      l:'fr',  r:6, c:7,  url:'https://github.com/EricZimmerman/MFTECmd', d:'NTFS Master File Table parser' },
    { n:62, s:'CF', name:'CrowdStrike',      cat:'ir',        l:'cm',  r:6, c:8,  url:'https://www.crowdstrike.com', d:'Cloud-native endpoint detection (EDR)' },
    { n:63, s:'CB', name:'Carbon Black',     cat:'ir',        l:'cm',  r:6, c:9,  url:'https://www.carbonblack.com', d:'Endpoint detection and response platform' },
    { n:64, s:'Rl', name:'Redline',          cat:'ir',        l:'fr',  r:6, c:10, url:'https://fireeye.market/apps/211364', d:'Host investigation and IOC collection' },
    { n:65, s:'Lk', name:'LOKI',             cat:'ir',        l:'os',  r:6, c:11, url:'https://github.com/Neo23x0/Loki', d:'Simple IOC and YARA rule scanner' },
    { n:66, s:'Th', name:'Thor',             cat:'ir',        l:'cm',  r:6, c:12, url:'https://www.nextron-systems.com/thor/', d:'Advanced APT and forensic scanner' },
    { n:67, s:'Cy', name:'CyLR',             cat:'ir',        l:'os',  r:6, c:13, url:'https://github.com/orlikoski/CyLR', d:'Live response forensic artifact collector' },
    { n:68, s:'Ch', name:'Chainsaw',         cat:'ir',        l:'os',  r:6, c:14, url:'https://github.com/WithSecureLabs/chainsaw', d:'Rapid Windows event log analysis' },
    { n:69, s:'Hb', name:'Hayabusa',         cat:'ir',        l:'os',  r:6, c:15, url:'https://github.com/Yamato-Security/hayabusa', d:'Windows event log fast forensic analyzer' },
    { n:70, s:'DB', name:'DeepBlueCLI',      cat:'ir',        l:'os',  r:6, c:16, url:'https://github.com/sans-blue-team/DeepBlueCLI', d:'PowerShell-based event log threat hunter' },
    { n:71, s:'Sy', name:'Sysmon',           cat:'ir',        l:'fr',  r:6, c:17, url:'https://learn.microsoft.com/en-us/sysinternals/downloads/sysmon', d:'Windows system activity monitor' },
    { n:72, s:'UA', name:'UAC',              cat:'ir',        l:'os',  r:6, c:18, url:'https://github.com/tclahr/uac', d:'Unix-like artifacts collector for IR' },

    // === Row 7 — Frameworks (left) + Cloud Forensics (middle) + IR (right) — full row ===
    { n:73,  s:'AT', name:'MITRE ATT&CK',    cat:'framework', l:'fr',  r:7, c:1,  url:'https://attack.mitre.org', d:'Adversary tactics and techniques knowledge base' },
    { n:74,  s:'DF', name:'DFIR Report',      cat:'framework', l:'fr',  r:7, c:2,  url:'https://thedfirreport.com', d:'Community knowledge resource — real-world intrusion analysis & threat research reports' },
    { n:75,  s:'FC', name:'FIRST CSIRT',      cat:'framework', l:'std', r:7, c:3,  url:'https://www.first.org/standards/frameworks/', d:'CSIRT services and maturity framework' },
    { n:76,  s:'Cl', name:'CloudTrail',       cat:'cloud',     l:'cm',  r:7, c:4,  url:'https://aws.amazon.com/cloudtrail/', d:'AWS API activity logging and auditing' },
    { n:77,  s:'Sw', name:'Sparrow',          cat:'cloud',     l:'os',  r:7, c:5,  url:'https://github.com/cisagov/Sparrow', d:'CISA M365 compromise assessment tool' },
    { n:78,  s:'GD', name:'GuardDuty',        cat:'cloud',     l:'cm',  r:7, c:6,  url:'https://aws.amazon.com/guardduty/', d:'AWS intelligent threat detection service' },
    { n:79,  s:'SS', name:'ScoutSuite',       cat:'cloud',     l:'os',  r:7, c:7,  url:'https://github.com/nccgroup/ScoutSuite', d:'Multi-cloud security auditing tool' },
    { n:80,  s:'Pw', name:'Prowler',          cat:'cloud',     l:'os',  r:7, c:8,  url:'https://github.com/prowler-cloud/prowler', d:'Cloud security assessment CLI tool' },
    { n:81,  s:'CQ', name:'CloudQuery',       cat:'cloud',     l:'os',  r:7, c:9,  url:'https://www.cloudquery.io', d:'Cloud asset inventory and compliance queries' },
    { n:82,  s:'AH', name:'AzureHound',       cat:'cloud',     l:'os',  r:7, c:10, url:'https://github.com/BloodHoundAD/AzureHound', d:'Azure AD attack path enumeration' },
    { n:83,  s:'Ro', name:'ROADtools',        cat:'cloud',     l:'os',  r:7, c:11, url:'https://github.com/dirkjanm/ROADtools', d:'Azure AD exploration and forensics' },
    { n:84,  s:'Iv', name:'Invictus IR',      cat:'cloud',     l:'os',  r:7, c:12, url:'https://github.com/invictus-ir', d:'Azure and M365 incident response tools' },
    { n:85,  s:'Cd', name:'Cado Response',    cat:'cloud',     l:'cm',  r:7, c:13, url:'https://www.cadosecurity.com', d:'Cloud-native forensics and IR platform' },
    { n:86,  s:'Wd', name:'Wiz Defend',       cat:'cloud',     l:'cm',  r:7, c:14, url:'https://www.wiz.io/product/wiz-defend', d:'Cloud detection and response platform' },
    { n:87,  s:'Fa', name:'Falco',            cat:'cloud',     l:'os',  r:7, c:15, url:'https://falco.org', d:'Kubernetes and cloud runtime threat detection' },
    { n:88,  s:'OR', name:'DFIR-ORC',         cat:'ir',        l:'os',  r:7, c:16, url:'https://github.com/DFIR-ORC/dfir-orc', d:'Forensic artifact collection framework' },
    { n:89,  s:'Wz', name:'Wazuh',            cat:'ir',        l:'os',  r:7, c:17, url:'https://wazuh.com', d:'Open-source XDR and SIEM platform' },
    { n:90,  s:'Ed', name:'Elastic EDR',      cat:'ir',        l:'fm',  r:7, c:18, url:'https://www.elastic.co/security/endpoint-security', d:'Elastic endpoint detection and response' },

    // === Row 9 — Malware Analysis & RE (cols 3-17, like actinides) ===
    { n:91,  s:'Gh', name:'Ghidra',           cat:'malware',   l:'os',  r:9, c:3,  url:'https://ghidra-sre.org', d:'NSA reverse engineering framework' },
    { n:92,  s:'ID', name:'IDA Pro',          cat:'malware',   l:'cm',  r:9, c:4,  url:'https://hex-rays.com/ida-pro/', d:'Industry-standard disassembler and debugger' },
    { n:93,  s:'Xd', name:'x64dbg',           cat:'malware',   l:'os',  r:9, c:5,  url:'https://x64dbg.com', d:'Open-source Windows x64/x32 debugger' },
    { n:94,  s:'R2', name:'Radare2',          cat:'malware',   l:'os',  r:9, c:6,  url:'https://rada.re', d:'Portable reverse engineering framework' },
    { n:95,  s:'CS', name:'CAPE Sandbox',     cat:'malware',   l:'os',  r:9, c:7,  url:'https://github.com/kevoreilly/CAPEv2', d:'Config and payload extraction sandbox' },
    { n:96,  s:'Ay', name:'Any.Run',          cat:'malware',   l:'fm',  r:9, c:8,  url:'https://any.run', d:'Interactive online malware sandbox' },
    { n:97,  s:'Ya', name:'YARA',             cat:'malware',   l:'os',  r:9, c:9,  url:'https://virustotal.github.io/yara/', d:'Pattern matching for malware researchers' },
    { n:98,  s:'PE', name:'PEStudio',         cat:'malware',   l:'fm',  r:9, c:10, url:'https://www.winitor.com', d:'Static analysis of PE executables' },
    { n:99,  s:'Rx', name:'REMnux',           cat:'malware',   l:'os',  r:9, c:11, url:'https://remnux.org', d:'Linux distro for malware analysis' },
    { n:100, s:'CC', name:'CyberChef',        cat:'malware',   l:'os',  r:9, c:12, url:'https://gchq.github.io/CyberChef/', d:'Data encoding/decoding Swiss army knife' },
    { n:101, s:'FL', name:'FLOSS',            cat:'malware',   l:'os',  r:9, c:13, url:'https://github.com/mandiant/flare-floss', d:'Obfuscated string extraction from malware' },
    { n:102, s:'Ca', name:'Capa',             cat:'malware',   l:'os',  r:9, c:14, url:'https://github.com/mandiant/capa', d:'Detect capabilities in executable files' },
    { n:103, s:'OL', name:'OLETools',         cat:'malware',   l:'os',  r:9, c:15, url:'https://github.com/decalage2/oletools', d:'Analyze malicious Office documents' },
    { n:117, s:'Fr', name:'Frida',            cat:'malware',   l:'os',  r:9, c:16, url:'https://frida.re', d:'Dynamic instrumentation toolkit for RE and hooking' },
    { n:118, s:'Di', name:'Detect It Easy',   cat:'malware',   l:'os',  r:9, c:17, url:'https://github.com/horsicq/Detect-It-Easy', d:'PE/ELF identifier for packers and compilers' },

    // === Row 10 — Mobile Forensics (cols 3-15, like lanthanides) ===
    { n:104, s:'Ce', name:'Cellebrite',       cat:'mobile',    l:'cm',  r:10, c:3,  url:'https://cellebrite.com/en/ufed/', d:'Mobile device extraction and analysis' },
    { n:105, s:'Ox', name:'Oxygen',           cat:'mobile',    l:'cm',  r:10, c:4,  url:'https://www.oxygenforensics.com', d:'Mobile forensic investigation suite' },
    { n:106, s:'AL', name:'ALEAPP',           cat:'mobile',    l:'os',  r:10, c:5,  url:'https://github.com/abrignoni/ALEAPP', d:'Android logs events and protobuf parser' },
    { n:107, s:'iL', name:'iLEAPP',           cat:'mobile',    l:'os',  r:10, c:6,  url:'https://github.com/abrignoni/iLEAPP', d:'iOS logs events and plists parser' },
    { n:108, s:'Mv', name:'MVT',              cat:'mobile',    l:'os',  r:10, c:7,  url:'https://github.com/mvt-project/mvt', d:'Mobile verification toolkit for spyware' },
    { n:109, s:'An', name:'Andriller',        cat:'mobile',    l:'os',  r:10, c:8,  url:'https://github.com/den4uk/andriller', d:'Android forensic data extraction tool' },
    { n:110, s:'XR', name:'MSAB XRY',         cat:'mobile',    l:'cm',  r:10, c:9,  url:'https://www.msab.com/products/xry/', d:'Mobile device examination platform' },
    { n:111, s:'Mq', name:'Magnet ACQUIRE',   cat:'mobile',    l:'fr',  r:10, c:10, url:'https://www.magnetforensics.com/resources/magnet-acquire/', d:'Mobile and cloud evidence acquisition' },
    { n:112, s:'Li', name:'libimobiledevice', cat:'mobile',    l:'os',  r:10, c:11, url:'https://libimobiledevice.org', d:'Cross-platform iOS device communication' },
    { n:113, s:'Ad', name:'ADB',              cat:'mobile',    l:'os',  r:10, c:12, url:'https://developer.android.com/tools/adb', d:'Android Debug Bridge for device access' },
    { n:114, s:'Ec', name:'Elcomsoft',         cat:'mobile',    l:'cm',  r:10, c:13, url:'https://www.elcomsoft.com/eift.html', d:'iOS forensic toolkit and extraction' },
    { n:115, s:'Ap', name:'APOLLO',            cat:'mobile',    l:'os',  r:10, c:14, url:'https://github.com/mac4n6/APOLLO', d:'Apple pattern of life analysis tool' },
    { n:116, s:'GK', name:'Magnet GrayKey',    cat:'mobile',    l:'cm',  r:10, c:15, url:'https://www.magnetforensics.com/products/magnet-graykey/', d:'Mobile device passcode unlock and extraction' }
];

const LICENSE = {
    os:  { label: 'Open Source', color: '#FFFFFF' },
    fr:  { label: 'Free',        color: '#B0BEC5' },
    fm:  { label: 'Freemium',    color: '#78909C' },
    cm:  { label: 'Commercial',  color: '#1a1a1a' },
    std: { label: 'Standard',    color: '#546E7A' }
};

// State
let activeFilters = new Set();
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    renderTable();
    renderLegend();
    renderFilters();

    document.getElementById('search').addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        applyFilters();
    });

    // Apply filter from URL hash on load
    applyHashFilter();
    window.addEventListener('hashchange', applyHashFilter);

    // Generate LinkedIn QR code
    if (typeof QRCode !== 'undefined') {
        new QRCode(document.getElementById('qrcode'), {
            text: 'https://linkedin.com/in/marbekios',
            width: 80,
            height: 80,
            colorDark: '#ffffff',
            colorLight: '#0f0f1f',
            correctLevel: QRCode.CorrectLevel.M
        });
    }
});

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
                `<div class="tooltip-lic"><span class="tooltip-lic-dot" style="background:${lic.color}"></span>${lic.label}</div>` +
            `</div>`;

        grid.appendChild(tile);
    });

    // Key element — "How to read this table" (SVG with angled lines like real periodic table)
    const key = document.createElement('div');
    key.className = 'table-key';
    key.style.cssText = 'grid-row:2/4;grid-column:4/12;';
    key.innerHTML =
        '<svg viewBox="0 0 560 110" xmlns="http://www.w3.org/2000/svg" class="key-svg">' +
            // Sample tile
            '<rect x="200" y="8" width="76" height="76" rx="5" fill="' + CATEGORIES.ir.color + '"/>' +
            '<text x="210" y="24" fill="white" font-size="9" font-family="Inter,sans-serif" opacity="0.75">50</text>' +
            '<circle cx="267" cy="18" r="3.5" fill="' + LICENSE.os.color + '" stroke="rgba(0,0,0,0.3)" stroke-width="0.5"/>' +
            '<text x="238" y="55" fill="white" font-size="24" font-weight="700" font-family="Inter,sans-serif" text-anchor="middle">Vr</text>' +
            '<text x="238" y="72" fill="white" font-size="7" font-family="Inter,sans-serif" text-anchor="middle" opacity="0.85">Velociraptor</text>' +

            // Tool Number — top-left, angled line down to number
            '<line x1="115" y1="10" x2="208" y2="20" stroke="#555" stroke-width="0.8"/>' +
            '<circle cx="208" cy="20" r="1.5" fill="#555"/>' +
            '<text x="110" y="13" fill="#888" font-size="10" font-family="Inter,sans-serif" text-anchor="end">Tool Number</text>' +

            // License Type — top-right, angled line to dot
            '<line x1="273" y1="18" x2="370" y2="10" stroke="#555" stroke-width="0.8"/>' +
            '<circle cx="273" cy="18" r="1.5" fill="#555"/>' +
            '<text x="375" y="13" fill="#888" font-size="10" font-family="Inter,sans-serif">License Type</text>' +

            // Tool Abbreviation — mid-left, angled line to center
            '<line x1="115" y1="52" x2="198" y2="48" stroke="#555" stroke-width="0.8"/>' +
            '<circle cx="198" cy="48" r="1.5" fill="#555"/>' +
            '<text x="110" y="55" fill="#888" font-size="10" font-family="Inter,sans-serif" text-anchor="end">Tool Abbreviation</text>' +

            // Full Tool Name — bottom-left, angled line up to name
            '<line x1="115" y1="90" x2="198" y2="70" stroke="#555" stroke-width="0.8"/>' +
            '<circle cx="198" cy="70" r="1.5" fill="#555"/>' +
            '<text x="110" y="93" fill="#888" font-size="10" font-family="Inter,sans-serif" text-anchor="end">Full Tool Name</text>' +

            // Color = Category — right side, mid
            '<line x1="278" y1="48" x2="370" y2="42" stroke="#555" stroke-width="0.8"/>' +
            '<circle cx="278" cy="48" r="1.5" fill="#555"/>' +
            '<text x="375" y="45" fill="#888" font-size="10" font-family="Inter,sans-serif">Color = Category</text>' +

            // License legend
            '<text x="375" y="68" fill="#777" font-size="8" font-family="Inter,sans-serif" font-weight="600" letter-spacing="0.5">LICENSE</text>' +
            '<circle cx="380" cy="78" r="3" fill="#FFFFFF" stroke="rgba(0,0,0,0.3)" stroke-width="0.5"/><text x="388" y="81" fill="#888" font-size="8" font-family="Inter,sans-serif">Open Source</text>' +
            '<circle cx="445" cy="78" r="3" fill="#B0BEC5"/><text x="453" y="81" fill="#888" font-size="8" font-family="Inter,sans-serif">Free</text>' +
            '<circle cx="480" cy="78" r="3" fill="#78909C"/><text x="488" y="81" fill="#888" font-size="8" font-family="Inter,sans-serif">Freemium</text>' +
            '<circle cx="380" cy="92" r="3" fill="#1a1a1a" stroke="#666" stroke-width="0.5"/><text x="388" y="95" fill="#888" font-size="8" font-family="Inter,sans-serif">Commercial</text>' +
            '<circle cx="445" cy="92" r="3" fill="#546E7A"/><text x="453" y="95" fill="#888" font-size="8" font-family="Inter,sans-serif">Standard</text>' +
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