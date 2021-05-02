type Props = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

function GalleryDialog({ isOpen, setIsOpen }: Props) {
  let galleryDialog: JSX.Element | null = (
    <div className="dialog">
      <h2>Save to gallery</h2>
      <button onClick={(event) => setIsOpen(false)}>Close</button>
    </div>
  );

  if (!isOpen) {
    galleryDialog = null;
  }

  return <div>{galleryDialog}</div>;
}

export default GalleryDialog;
