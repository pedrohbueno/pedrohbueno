'use client';
 
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="section-shell py-40 text-center">
      <h1 className="font-display text-3xl font-bold">Algo deu errado</h1>
      <button type="button" onClick={reset} className="chip mt-6">
        Tentar novamente
      </button>
    </div>
  );
}
