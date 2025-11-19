// Optics - Aberrations - Chapter 11
// 6 programs

export const programs = [
  {
    "id": "A2SPASSS",
    "title": "A2SPASSS - A2SPASSS\r",
    "description": "A2SPASSS\r",
    "category": "Optics - Aberrations",
    "chapter": "11",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# A2SPASSS\n# Spherical aberration of a single refracting surface.\n# Definiton: Longitudinal spherical Aberration L.S.A. = xi - xiisph\n# Calculation of image point xi and corrected image point xiisph\n# All lengths in cm.\n\n# 1. Calculation of xi(xo) for negative values of xo\nro = 2\nn = 1.5\nr = 10\nxo = np.arange(-20, -101, -1)\nxi = 1 / (((n - 1) / (n * r)) + 1 / (n * xo))\n\n# 2. Calculation of xiisph(xo) depending on xo for the corrected case of L.S.A\nxiisph = n / (\n    ((n - 1) / r)\n    + 1 / xo\n    + ((n - 1) / (n ** 2)) * ((ro ** 2) / 2) * (((1 / r - 1 / xo) ** 2) * (1 / r - ((n + 1) / xo)))\n)\n\nfig = plt.figure(figsize=(10, 12))\n\nplt.subplot(4, 2, 1)\nplt.plot(xo, xi, label='xi(xo)')\nplt.plot(xo, xiisph, label='xiisph(xo)')\nplt.xlim(-100, 0)\nplt.ylim(0, 100)\nplt.xlabel('xo')\nplt.legend(['xi(xo)', 'xiisph(xo)'])\n\nplt.subplot(4, 2, 2)\nplt.plot(xo, xi - xiisph, label='xi - xiisph')\nplt.xlim(-100, 0)\nplt.ylim(-10, 20)\nplt.xlabel('xo')\nplt.legend(['xi(xo)-xiisph(xo)'])\n\n# 3. Calculation of xiisph(nn) depending on the refractive index nn\nxxo = -30\nrr = 10\nnn = np.arange(1.4, 4.01, 0.01)\nxi = 1 / ((nn - 1) / (nn * rr) + 1 / (nn * xxo))\nxiisph = nn / (\n    ((nn - 1) / r)\n    + 1 / xxo\n    + ((nn - 1) / (nn ** 2)) * ((ro ** 2) / 2) * (((1 / r - 1 / xxo) ** 2) * (1 / r - ((nn + 1) / xxo)))\n)\n\nplt.subplot(4, 2, 3)\nplt.plot(nn, xi, label='xi(nn)')\nplt.xlim(1, 4)\nplt.ylim(0, 300)\nplt.xlabel('nn')\nplt.legend(['xi(nn)'])\n\nplt.subplot(4, 2, 4)\nplt.plot(nn, xiisph, label='xiisph(nn)')\nplt.xlim(1, 4)\nplt.ylim(0, 200)\nplt.xlabel('nn')\nplt.legend(['xiisph(nn)'])\n\nplt.subplot(4, 2, 5)\nplt.plot(nn, xi - xiisph, label='xi - xiisph')\nplt.xlim(1, 4)\nplt.ylim(0, 100)\nplt.xlabel('nn')\nplt.legend(['xi(nn)-xiisph(nn)'])\n\n# 4. Calculation of xiisph(rrr) depending on the radius of curvature rrr\nnnn = 1.5\nxxxo = 10\nrrr = np.arange(1, 21, 1)\nxi = 1 / ((nnn - 1) / (nnn * rrr) + 1 / (nnn * xxxo))\nxiisph = nnn / (\n    ((nnn - 1) / rrr)\n    + 1 / xxxo\n    + ((nnn - 1) / (nnn ** 2)) * ((ro ** 2) / 2) * (((1 / rrr - 1 / xxxo) ** 2) * (1 / rrr - ((nnn + 1) / xxxo)))\n)\n\nplt.subplot(4, 2, 6)\nplt.plot(rrr, xi, label='xi(rrr)')\nplt.xlim(0, 20)\nplt.ylim(0, 15)\nplt.xlabel('rrr')\nplt.legend(['xi(rrr)'])\n\nplt.subplot(4, 2, 7)\nplt.plot(rrr, xiisph, label='xiisph(rrr)')\nplt.xlim(0, 20)\nplt.ylim(0, 15)\nplt.xlabel('rrr')\nplt.legend(['xiisph(rrr)'])\n\nplt.subplot(4, 2, 8)\nplt.plot(rrr, xi - xiisph, label='xi - xiisph')\nplt.xlim(0, 20)\nplt.ylim(-0.5, 1)\nplt.xlabel('rrr')\nplt.legend(['xi(rrr)-xiisph(rrr)'])\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% A2SPASSS\n% Spherical aberration of a single refracting surface.\n% Definiton: Longitudinal spherical Aberration L.S.A. = xi - xiisph\n% Calculation of image point xi and corrected image point xiisph\n% All length in cm.\n\nfunction A2SPASSS;\n% 1. Calculation of xi(xo) for negative values of xo\nro = 2;\nn = 1.5;\nr = 10;\nxo = (-20:-1:-100);\nxi = 1./(((n-1)/(n*r))+1./(n*xo));\n\n% 2. Calculation of xiisph(xo) depending on xo for the corrected case of L.S.A\n\nxiisph = n./(((n-1)/r)+1./xo+((n-1)/(n^2))*((ro^2)/2)*(((1/r-1./xo).^2).*(1/r-((n+1)./xo))));\n\nfigure(1);\nsubplot(4,2,1);\nplot(xo,xi,xo,xiisph);\naxis([-100 0 0 100]);\nxlabel('xo');\nlegend('xi(xo)','xiisph(xo)');\n\nsubplot(4,2,2);\nplot(xo,xi-xiisph);\naxis([-100 0 -10 20]);\nxlabel('xo');\nlegend('xi(xo)-xiisph(xo)');\n\n% 3. Calculation of xiisph(nn) depending on the refractive index nn\nxxo = -30;\nrr = 10;\nnn = (1.4:0.01:4);\nxi = 1./((nn-1)./(nn*rr)+1./(nn*xxo));\nxiisph = n./(((nn-1)/r)+1/xxo+((nn-1)./(nn.^2))*((ro^2)/2).*(((1/r-1/xxo)^2).*(1/r-((nn+1)/xxo))));\n\nsubplot(4,2,3);\nplot(nn,xi);\naxis([1 4 0 300]);\nxlabel('nn');\nlegend('xi(nn)');\n\nsubplot(4,2,4);\nplot(nn,xiisph);\naxis([1 4 0 200]);\nxlabel('nn');\nlegend('xiisph(nn)');\n\n% There is no value for which LSA = 0\nsubplot(4,2,5);\nplot(nn,xi-xiisph);\naxis([1 4 0 100]);\nxlabel('nn');\nlegend('xi(nn)-xiisph(nn)');\n\n\n% 4. Calculation of xiisph(rrr) depending on the radius of curvature rrrr\nnnn = 1.5;\nxxxo = 10;\nrrr = (1:1:20);\nxi = 1./((nnn-1)./(nnn*rrr)+1./(nnn*xxxo));\nxiisph = n./(((nnn-1)./rrr)+1/xxxo+((nnn-1)/(nnn.^2))*((ro^2)/2)*(((1./rrr-1/xxxo).^2).*(1./rrr-((nnn+1)/xxxo))));\n\nsubplot(4,2,6);\nplot(rrr,xi);\naxis([0 20 0 15]);\nxlabel('rrr');\nlegend('xi(rrr)');\n\nsubplot(4,2,7);\nplot(rrr,xiisph);\naxis([0 20 0 15]);\nxlabel('rrr');\nlegend('xiisph(rrr)');\n\nsubplot(4,2,8);\nplot(rrr,xi-xiisph);\naxis([0 20 -0.5 1]);\nxlabel('rrr');\nlegend('xi(rrr)-xiisph(rrr)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "A2SPASSS",
    "tags": [
      "chapter11",
      "aberrations",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Optical aberration",
        "url": "https://en.wikipedia.org/wiki/Optical_aberration"
      },
      {
        "title": "Spherical aberration",
        "url": "https://en.wikipedia.org/wiki/Spherical_aberration"
      },
      {
        "title": "Chromatic aberration",
        "url": "https://en.wikipedia.org/wiki/Chromatic_aberration"
      }
    ]
  },
  {
    "id": "A4SPHLSIPIS",
    "title": "A4SPHLSIPIS - A4SPHLSIPIS\r",
    "description": "A4SPHLSIPIS\r",
    "category": "Optics - Aberrations",
    "chapter": "11",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# A4SPHLSIPIS\n\n# Spherical Aberration. The pi_val-sigma equation\n# We assume n=1.5 and compare the cases of real and virtual images.\n\n# 1. Image for f = 10, and xo to the left of focal point, LSA may not be eliminated\n\nr1 = 10\nr2 = -10\nn = 1.5\nro = 4\nxo = 4\nf = 1/((n-1)*(1/r1-1/r2))   # f = 10\nxi = 1/(1/f+1/xo)           # xi = 2.857\n\n# 2. Definitions\n# Definition: Sigma = (r2-r1)/(r2+r1)\nSigma = np.arange(-10, 10+0.1, 0.1)\n# 3. pi_val-Sigma Equation\npi_val = (xi+xo)/(xi-xo)       # pi_val = -6\n\n\n\nfig = plt.figure(1)\n\nplt.plot(Sigma,Y(Sigma)\n)\nplt.xlim(-10, 10)\nplt.ylim(0, 0.1)\n\nplt.xlabel('sigma')\nplt.legend(['Y(sigma)'])\n# 4. Minimum value of Y(?)\n# The value of Y(?) at the minimum is obtained by differentiation and equating equal to 0.\n# The result is\nSigmamin = -B(n)*(pi_val/(2*A(n)))  # Sigmamin = 4.286\n\n# Calculation of the corresponding value of Y(Sigmamin)\nYmin = Y(Sigmamin)     # Ymin = -0.013\n\n\n\n\nOut = (n+2)/(8*n*((n-1)**2))\nOut = (n+1)/(2*n*(n-1))\nOut = (3*n+2)/(8*n)\nOut = (n**2)/(8*((n-1)**2))\nOut = ((ro**2)/(f**3))*(A(n)*(Sigma**2)+B(n)*Sigma*pi_val+C(n)*(pi_val**2)+D(n))\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% A4SPHLSIPIS\n\n% Spherical Aberration. The pi-sigma equation\n% We assume n=1.5 and compare the cases of real and virtual images.\nfunction A4SPHLSIPIS;\n% 1. Image for f = 10, and xo to the left of focal point, LSA may not be eliminated\nglobal ro f pi n;\nr1 = 10;\nr2 = -10;\nn = 1.5;\nro = 4;\nxo = 4;\n\nf = 1/((n-1)*(1/r1-1/r2))   % f = 10\nxi = 1/(1/f+1/xo)           % xi = 2.857\n\n% 2. Definitions\n% Definition: Sigma = (r2-r1)/(r2+r1)\nSigma = (-10:0.1:10);\n\n% 3. pi-Sigma Equation\npi = (xi+xo)/(xi-xo)       % pi = -6\n\n\n\nfigure(1);\nplot(Sigma,Y(Sigma));\naxis([-10 10 0 0.1]);\nxlabel('sigma');\nlegend('Y(sigma)');\n% 4. Minimum value of Y(?)\n% The value of Y(?) at the minimum is obtained by differentiation and equating equal to 0.\n% The result is\nSigmamin = -B(n)*(pi/(2*A(n)))  % Sigmamin = 4.286\n\n% Calculation of the corresponding value of Y(Sigmamin)\nYmin = Y(Sigmamin)     % Ymin = -0.013\n\n\n\nfunction Out=A(n)\nOut = (n+2)./(8*n.*((n-1).^2));\n\nfunction Out=B(n)\nOut = (n+1)./(2*n.*(n-1));\n\nfunction Out=C(n)\nOut = (3*n+2)./(8*n);\n\nfunction Out=D(n)\nOut = (n.^2)./(8*((n-1).^2));\n\nfunction Out=Y(Sigma)\nglobal ro f pi n;\nOut = ((ro^2)/(f^3))*(A(n)*(Sigma.^2)+B(n)*Sigma*pi+C(n)*(pi^2)+D(n));\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "A4SPHLSIPIS",
    "tags": [
      "chapter11",
      "aberrations",
      "focal-length"
    ],
    "wikipediaLinks": [
      {
        "title": "Optical aberration",
        "url": "https://en.wikipedia.org/wiki/Optical_aberration"
      },
      {
        "title": "Focal length",
        "url": "https://en.wikipedia.org/wiki/Focal_length"
      },
      {
        "title": "Spherical aberration",
        "url": "https://en.wikipedia.org/wiki/Spherical_aberration"
      },
      {
        "title": "Chromatic aberration",
        "url": "https://en.wikipedia.org/wiki/Chromatic_aberration"
      }
    ]
  },
  {
    "id": "A5COMAS",
    "title": "A5COMAS - A5COMAS\r",
    "description": "A5COMAS\r",
    "category": "Optics - Aberrations",
    "chapter": "11",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# A5COMAS\n\n# The tangential coma CT and the sagittal coma CS are calulated depending on\n# using expressions of the third order theory. For similar expressions see\n# Jenkins and White, 4th Ed, p.163.\n\n\n# 1. No coma and spherical aberration\nr1 = 11\nr2 = -10\nxo = -30\nn = 1.3168\nf = 1/((1/r1-1/r2)*(n-1))\nxi = 1/(1/f + 1/xo)         # xi = 36.837\n\n# 2. Definitions for calculations on coma\n\npi_val = (xi + xo)/(xi-xo)      # pi_val = 0.102\nSigma = (r2+r1)/(r2-r1)     # Sigma = -0.048\nRho = 1.5\nG = (3*(2*n+1))/(4*n)       # G = 2.07\nW = (3*(n+1))/(4*n*(n-1))   # W = 4.165\n\nZZ = W*Sigma + G*pi_val\n# Tangential Coma CT as function of Rho\n\nRho =np.arange(0, 1+0.01, 0.01)\nBeta = 0.05\nCT = (Rho**2)*((ZZ*np.tan(Beta))/(f**2))\nfig = plt.figure(1)\n\nplt.plot(Rho,CT)\n\nplt.xlim(0, 1)\nplt.ylim(0, 3e-6)\n\nplt.xlabel('\rho')\nplt.legend(['CT(\rho)'])\n# Condition for elimination of coma\n# if Rho = -((2n+1)(n-1)/(n+1))pi_val:\n# CT is zero for all zones\n# CS = 1/3 CT\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% A5COMAS\n\n% The tangential coma CT and the sagittal coma CS are calulated depending on\n% using expressions of the third order theory. For similar expressions see\n% Jenkins and White, 4th Ed, p.163.\n\nfunction A5COMAS;\n% 1. No coma and spherical aberration\nr1 = 11;\nr2 = -10;\nxo = -30;\nn = 1.3168;\nf = 1/((1/r1-1/r2)*(n-1));\nxi = 1/(1/f + 1/xo)         % xi = 36.837\n\n% 2. Definitions for calculations on coma\n\npi = (xi + xo)/(xi-xo)      % pi = 0.102\nSigma = (r2+r1)/(r2-r1)     % Sigma = -0.048\nRho = 1.5;\nG = (3*(2*n+1))/(4*n)       % G = 2.07\nW = (3*(n+1))/(4*n*(n-1))   % W = 4.165\n\nZZ = W*Sigma + G*pi;\n\n% Tangential Coma CT as function of Rho\n\nRho =(0:0.01:1);\nBeta = 0.05;\n\n\nCT = (Rho.^2)*((ZZ*tan(Beta))/(f^2));\nfigure(1);\nplot(Rho,CT);\naxis([0 1 0 3e-6]);\nxlabel('\rho');\nlegend('CT(\rho)');\n% Condition for elimination of coma\n% if Rho = -((2n+1)(n-1)/(n+1))pi\n% CT is zero for all zones\n% CS = 1/3 CT",
    "cCode": "",
    "defaultParams": {},
    "displayName": "A5COMAS",
    "tags": [
      "chapter11",
      "aberrations"
    ],
    "wikipediaLinks": [
      {
        "title": "Optical aberration",
        "url": "https://en.wikipedia.org/wiki/Optical_aberration"
      },
      {
        "title": "Spherical aberration",
        "url": "https://en.wikipedia.org/wiki/Spherical_aberration"
      },
      {
        "title": "Chromatic aberration",
        "url": "https://en.wikipedia.org/wiki/Chromatic_aberration"
      }
    ]
  },
  {
    "id": "A6COMPLANS",
    "title": "A6COMPLANS - A6COMPLANS\r",
    "description": "A6COMPLANS\r",
    "category": "Optics - Aberrations",
    "chapter": "11",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# A6COMPLANS\n# For the aplanatic lens, both, spherical aberration and coma are zero. For the\n# calculation of coma, the incident light is assumed to be parallel.\n\n\n# 1.The aplanatic lens\nr1 = -30\nxo = r1\nn = 1.5\nRho = 1\nBeta = 0.05\nr2 = (xo*n)/(n+1)\nxi = n*xo\nf = ((n+1)/(n-1))*r2\n# and for pi_val, sigma, W, G\npi_val = (xi+xo)/(xi-xo)    # pi_val = 5\nSigma = (r2+xo)/(r2-xo) # Sigma = -4\n\n# 2. The correction for coma\n# Coma is eliminated if Co = 0, that is (W(n)Sigma + G(n)pi_val) is 0, or Sigma = -pi_val(G(n)/W(n)):\n# 3. Graph of y(n) = W(n)*Sigma + G(n)*pi_val\n# we double up and use nn\nnn = np.arange(1, 4+0.01, 0.01)\npp = (nn*xo + xo)/(nn*xo - xo)\nr2 = xo*((nn)/(nn+1))\nss = (r2+r1)/(r2-r1)\ny = W(nn)*ss+G(nn)*pp\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(nn,y)\n\nplt.xlim(1, 4)\nplt.ylim(-1e-12, 5e-13)\n\nplt.xlabel('nn')\nplt.legend(['y(nn)'])\n# Coma is zero for most values of nn\nplt.subplot(2, 1, 2)\n\nplt.plot(nn,ss)\n\nplt.xlim(1, 4)\nplt.ylim(-10, 0)\n\nplt.xlabel('nn')\nplt.legend(['ss(nn)'])\nOut = (3*(n+1))/(4*n*(n-1))\nOut = (3*(2*n+1))/(4*n)\nOut = ((Rho**2*np.tan(Beta))/(f**2))*(W(Rho)*Sigma+G(Rho)*pi_val)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% A6COMPLANS\n% For the aplanatic lens, both, spherical aberration and coma are zero. For the\n% calculation of coma, the incident light is assumed to be parallel.\n\nfunction A6COMPLANS;\nglobal Beta f Sigma pi n;\n% 1.The aplanatic lens\nr1 = -30\nxo = r1;\nn = 1.5;\nRho = 1;\nBeta = 0.05;\nr2 = (xo*n)/(n+1);\nxi = n*xo;\nf = ((n+1)/(n-1))*r2;\n% and for pi, sigma, W, G\npi = (xi+xo)/(xi-xo)    % pi = 5\nSigma = (r2+xo)/(r2-xo) % Sigma = -4\n\n% 2. The correction for coma\n% Coma is eliminated if Co = 0, that is (W(n)Sigma + G(n)pi) is 0, or Sigma = -pi(G(n)/W(n))\n\n% 3. Graph of y(n) = W(n)*Sigma + G(n)*pi\n% we double up and use nn\nnn = (1:0.01:4);\npp = (nn*xo + xo)./(nn*xo - xo);\nr2 = xo*((nn)./(nn+1));\nss = (r2+r1)./(r2-r1);\ny = W(nn).*ss+G(nn).*pp;\n\nfigure(1);\nsubplot(2,1,1);\nplot(nn,y);\naxis([1 4 -1e-12 5e-13]);\nxlabel('nn');\nlegend('y(nn)');\n\n% Coma is zero for most values of nn\nsubplot(2,1,2);\nplot(nn,ss);\naxis([1 4 -10 0]);\nxlabel('nn');\nlegend('ss(nn)');\n\n\nfunction Out=W(n)\nOut = (3*(n+1))./(4*n.*(n-1));\n\nfunction Out=G(n)\nOut = (3*(2*n+1))./(4*n);\n\nfunction Out=Co(Rho)\nglobal Beta f Sigma pi n;\nOut = ((Rho.^2*tan(Beta))/(f^2))*(W(Rho)*Sigma+G(Rho)*pi);",
    "cCode": "",
    "defaultParams": {},
    "displayName": "A6COMPLANS",
    "tags": [
      "chapter11",
      "aberrations",
      "lens"
    ],
    "wikipediaLinks": [
      {
        "title": "Optical aberration",
        "url": "https://en.wikipedia.org/wiki/Optical_aberration"
      },
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Spherical aberration",
        "url": "https://en.wikipedia.org/wiki/Spherical_aberration"
      },
      {
        "title": "Chromatic aberration",
        "url": "https://en.wikipedia.org/wiki/Chromatic_aberration"
      }
    ]
  },
  {
    "id": "A7ASTSINS",
    "title": "A7ASTSINS - A7ASTSINS\r",
    "description": "A7ASTSINS\r",
    "category": "Optics - Aberrations",
    "chapter": "11",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# A7ASTSINS\n\n# Astigmatism on a single surface.\n\n# We have for the horizontal and vertical direction each an imaging equation which\n# looks like the imaging equation for the single spherical surface, but the expressions\n# depend on angles.\n\n\n# 1. The vertical and horizontal imaging equations.\n# We have for horizontal -1/xo +n/xih = (n cos?' -cos?)/r\n# and for vertical -cos?**2/xo +ncos?'**2/xiv = (ncos?'-cos?)/r\n# using the law of refraction we can replace ?' by ?. We call np.cos( ? ') = c(?)\n\n# 2. For fixed n we make calculate xih(?) as a function of ?\n\nPhi = (.1:0.01:0.5)\nxo = -100\nr = 10\nn = 1.2\nc = np.sqrt(1-((np.sin(2*np.pi*(Phi/360)))**2)/(n**2))\nxih = n/((n*c-np.cos(2*Phi*(np.pi/360)))/r + 1/xo)\n# 3. For fixed n we make calculate xiv(?) as a function of ?\n\nxiv = (n*(c**2))/((n*c-np.cos(2*Phi*(np.pi/360)))/r+((np.cos(2*np.pi*(Phi/360)))**2)/xo)\n# 4. Graph of the difference ASD for fixed n\nASD = xih - xiv\nfig = plt.figure(1)\n\nplt.plot(Phi,ASD)\n\nplt.xlim(0.1, 0.5)\nplt.ylim(0, 0.015)\n\nplt.xlabel('phi')\nplt.legend(['ASD(phi)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% A7ASTSINS\n\n% Astigmatism on a single surface.\n\n% We have for the horizontal and vertical direction each an imaging equation which\n% looks like the imaging equation for the single spherical surface, but the expressions\n% depend on angles.\n\nfunction A7ASTSINS;\n% 1. The vertical and horizontal imaging equations.\n% We have for horizontal -1/xo +n/xih = (n cos?' -cos?)/r\n% and for vertical -cos?^2/xo +ncos?'^2/xiv = (ncos?'-cos?)/r\n% using the law of refraction we can replace ?' by ?. We call cos( ? ') = c(?)\n\n% 2. For fixed n we make calculate xih(?) as a function of ?\n\nPhi = (.1:0.01:0.5);\nxo = -100;\nr = 10;\nn = 1.2\nc = sqrt(1-((sin(2*pi*(Phi/360))).^2)/(n^2));\nxih = n./((n*c-cos(2*Phi*(pi/360)))/r + 1/xo);\n\n% 3. For fixed n we make calculate xiv(?) as a function of ?\n\nxiv = (n*(c.^2))./((n*c-cos(2*Phi*(pi/360)))/r+((cos(2*pi*(Phi/360))).^2)/xo);\n\n% 4. Graph of the difference ASD for fixed n\nASD = xih - xiv;\n\nfigure(1);\nplot(Phi,ASD);\naxis([0.1 0.5 0 0.015]);\nxlabel('phi');\nlegend('ASD(phi)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "A7ASTSINS",
    "tags": [
      "chapter11",
      "aberrations",
      "refraction",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Optical aberration",
        "url": "https://en.wikipedia.org/wiki/Optical_aberration"
      },
      {
        "title": "Refraction",
        "url": "https://en.wikipedia.org/wiki/Refraction"
      },
      {
        "title": "Spherical aberration",
        "url": "https://en.wikipedia.org/wiki/Spherical_aberration"
      },
      {
        "title": "Chromatic aberration",
        "url": "https://en.wikipedia.org/wiki/Chromatic_aberration"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - A8ASTISMS\r",
    "description": "A8ASTISMS\r",
    "category": "Optics - Aberrations",
    "chapter": "11",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# A8ASTISMS\n# Astigmatism of a thin lens.\n\n# We have for the horizontal and vertical direction each an imaging equation which\n# looks like the imaging equation for the thin lens, but the expressions depend on angles.\n\n# We have for horizontal -1/xo +1/xih = (cos?)(cos?'/cos? - 1)(1/r1-1/r2)\n# and for vertical -1/xo +1/xiv = (1/cos?)(cos?'/cos? - 1)(1/r1-1/r2)\n\n# using the law of refraction we can replace ?' by ? and make a plot of the difference\n# xih-xiv as function of ?.\n\n# 1. Graph of ASD for fixed n and dependence on ?\nPhi = np.arange(1, 10+1, 1)\nxoo = -400\nr1 = 10\nr2 = -12\nn = 1.3\nc = np.sqrt(1-(((np.sin(2*np.pi*(Phi/360)))**2)/(n**2)))\nxih = 1/(((np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)\nxiv = 1/(((1/np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)\nASD = xih - xiv\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(Phi,ASD)\n\nplt.xlim(0, 10)\nplt.ylim(0, 20)\n\nplt.xlabel('phi')\nplt.legend(['ASD(phi)'])\n# 2. Graph of ASD for fixed ? and dependence on n\n\nPhi = 5\nxoo = -400\nr1 = 10\nr2 = -12\nn=np.arange(1.3, 3+0.001, 0.001)\nc = np.sqrt(1-(((np.sin(2*np.pi*(Phi/360)))**2)/(n**2)))\nxih = 1/(((np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)\nxiv = 1/(((1/np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)\nASD = xih - xiv\nplt.subplot(2, 1, 2)\n\nplt.plot(n,ASD)\n\nplt.xlim(1, 3)\nplt.ylim(0, 2)\n\nplt.xlabel('n')\nplt.legend(['ASD(n)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% A8ASTISMS\n% Astigmatism of a thin lens.\n\n% We have for the horizontal and vertical direction each an imaging equation which\n% looks like the imaging equation for the thin lens, but the expressions depend on angles.\n\n% We have for horizontal -1/xo +1/xih = (cos?)(cos?'/cos? - 1)(1/r1-1/r2)\n% and for vertical -1/xo +1/xiv = (1/cos?)(cos?'/cos? - 1)(1/r1-1/r2)\n\n% using the law of refraction we can replace ?' by ? and make a plot of the difference\n% xih-xiv as function of ?.\nfunction A8ASTISMS;\n% 1. Graph of ASD for fixed n and dependence on ?\nPhi = (1:1:10);\nxoo = -400;\nr1 = 10;\nr2 = -12;\nn = 1.3;\nc = sqrt(1-(((sin(2*pi*(Phi/360))).^2)/(n^2)));\nxih = 1./(((cos(2*pi*(Phi/360))).*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);\nxiv = 1./(((1./cos(2*pi*(Phi/360))).*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);\n\nASD = xih - xiv;\n\nfigure(1);\nsubplot(2,1,1);\nplot(Phi,ASD);\naxis([0 10 0 20]);\nxlabel('phi');\nlegend('ASD(phi)');\n\n% 2. Graph of ASD for fixed ? and dependence on n\n\nPhi = 5;\nxoo = -400;\nr1 = 10;\nr2 = -12\nn=(1.3:0.001:3);\nc = sqrt(1-(((sin(2*pi*(Phi/360)))^2)./(n.^2)));\n\nxih = 1./(((cos(2*pi*(Phi/360)))*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);\nxiv = 1./(((1/cos(2*pi*(Phi/360)))*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);\nASD = xih - xiv;\n\nsubplot(2,1,2);\nplot(n,ASD);\naxis([1 3 0 2]);\nxlabel('n');\nlegend('ASD(n)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "A8ASTISMS",
    "tags": [
      "chapter11",
      "aberrations",
      "lens",
      "refraction"
    ],
    "wikipediaLinks": [
      {
        "title": "Optical aberration",
        "url": "https://en.wikipedia.org/wiki/Optical_aberration"
      },
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Refraction",
        "url": "https://en.wikipedia.org/wiki/Refraction"
      },
      {
        "title": "Spherical aberration",
        "url": "https://en.wikipedia.org/wiki/Spherical_aberration"
      },
      {
        "title": "Chromatic aberration",
        "url": "https://en.wikipedia.org/wiki/Chromatic_aberration"
      }
    ]
  }
];
