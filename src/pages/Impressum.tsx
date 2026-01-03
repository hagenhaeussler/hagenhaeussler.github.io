const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Impressum</h1>
        
        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="text-xl font-semibold mb-3">Angaben gemäß § 5 TMG</h2>
            <p>Hagen Kuno Häußler (Haeussler)</p>
            <p>Wilhelm-Busch-Str. 7</p>
            <p>06118 Halle (Saale)</p>
            <p>Germany</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
            <p>E-Mail: <a href="mailto:hagen.haeussler@gmx.de" className="text-primary hover:underline">hagen.haeussler@gmx.de</a></p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>Hagen Kuno Häußler</p>
            <p>Wilhelm-Busch-Str. 7</p>
            <p>06118 Halle (Saale)</p>
            <p>Germany</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Haftung für Inhalte</h2>
            <p className="text-sm text-muted-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
              oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von 
              Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis 
              einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Haftung für Links</h2>
            <p className="text-sm text-muted-foreground">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden 
              Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. 
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der 
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung 
              nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Urheberrecht</h2>
            <p className="text-sm text-muted-foreground">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, 
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
              Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte 
              auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche 
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei 
              Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <a href="/" className="text-primary hover:underline">← Zurück zur Startseite</a>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
