export default function BlobBackground() {
  return (
    <div className="blob-background" aria-hidden="true">
      <div className="blob" style={{ top: '-10%', left: '-20%' }} />
      <div className="blob" style={{ bottom: '-15%', right: '-10%', transform: 'scale(0.8)' }} />
      <div className="blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%) scale(0.6)' }} />
    </div>
  );
}
