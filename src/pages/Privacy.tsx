const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
        
        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. 
              Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz 
              entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Verantwortliche Stelle</h2>
            <p className="text-sm text-muted-foreground mb-2">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>Hagen Kuno Häußler</p>
            <p>Wilhelm-Busch-Str. 7</p>
            <p>06118 Halle (Saale)</p>
            <p>Germany</p>
            <p className="mt-2">E-Mail: <a href="mailto:hagen.haeussler@gmx.de" className="text-primary hover:underline">hagen.haeussler@gmx.de</a></p>
            <p className="text-sm text-muted-foreground mt-4">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der 
              Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">3. Datenerfassung auf dieser Website</h2>
            
            <h3 className="text-lg font-medium mb-2 mt-4">Server-Log-Dateien</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Diese Website wird auf GitHub Pages (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) gehostet. 
              Der Hosting-Provider erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-sm text-muted-foreground mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. 
              Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die 
              Server-Log-Files erfasst werden.
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: 
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-data-protection-agreement" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                GitHub Data Protection Agreement
              </a>.
            </p>

            <h3 className="text-lg font-medium mb-2 mt-4">Cookies</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Diese Website verwendet keine Cookies.
            </p>

            <h3 className="text-lg font-medium mb-2 mt-4">Analyse-Tools und Tools von Drittanbietern</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Diese Website verwendet keine Analyse-Tools oder Tracking-Software. Es werden keine Daten über Ihr Nutzungsverhalten erhoben, 
              gespeichert oder ausgewertet.
            </p>

            <h3 className="text-lg font-medium mb-2 mt-4">Eingebettete Inhalte von anderen Websites</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Diese Website enthält keine eingebetteten Inhalte von Drittanbietern (z.B. Videos, Bilder, Artikel, etc.). Sollten in Zukunft 
              eingebettete Inhalte hinzugefügt werden, können diese Websites möglicherweise Daten über Sie sammeln, Cookies benutzen, zusätzliche 
              Tracking-Dienste von Dritten einbetten und Ihre Interaktion mit diesen Inhalten aufzeichnen. Dies wird dann entsprechend in dieser 
              Datenschutzerklärung dokumentiert.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Ihre Rechte</h2>
            <p className="text-sm text-muted-foreground mb-2">
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground mb-4 space-y-1">
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen;</li>
              <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen;</li>
              <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist;</li>
              <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen;</li>
              <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen;</li>
              <li>gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen;</li>
              <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes oder unseres Sitzes wenden.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">5. Widerspruchsrecht</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO verarbeitet werden, 
              haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten einzulegen, soweit dafür Gründe 
              vorliegen, die sich aus Ihrer besonderen Situation ergeben oder sich der Widerspruch gegen Direktwerbung richtet. Im letzteren Fall haben 
              Sie ein generelles Widerspruchsrecht, das ohne Angabe einer besonderen Situation von uns umgesetzt wird.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Datenschutzbeauftragter</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Für diese Website ist kein Datenschutzbeauftragter erforderlich. Bei Fragen zum Datenschutz wenden Sie sich bitte direkt an: 
              <a href="mailto:hagen.haeussler@gmx.de" className="text-primary hover:underline ml-1">hagen.haeussler@gmx.de</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Änderungen dieser Datenschutzerklärung</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder 
              um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
          </section>

          <section className="text-sm text-muted-foreground italic">
            <p>Stand: Januar 2026</p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <a href="/" className="text-primary hover:underline">← Zurück zur Startseite</a>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
