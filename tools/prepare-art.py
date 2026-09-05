# Re-extract original artwork images from the supplied portfolio. Requires pymupdf.
import pathlib,json,pymupdf
root=pathlib.Path(__file__).resolve().parent.parent
works=json.loads((root/'content/works.json').read_text(encoding='utf-8-sig'))
d=pymupdf.open(root/'assets/Master_Thesis_Portfolio.pdf')
for w in works:
 images=d[int(w['id'][1:])].get_images(full=True)
 im=max(images,key=lambda x:x[2]*x[3])
 pix=pymupdf.Pixmap(d,im[0])
 if pix.n>3: pix=pymupdf.Pixmap(pymupdf.csRGB,pix)
 pix.save(root/('assets/art/'+w['id']+'.jpg'))
