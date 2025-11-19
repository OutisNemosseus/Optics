// Optics - Wavefront Analysis - Chapter 10
// 18 programs

export const programs = [
  {
    "id": "W10BES3DS",
    "title": "W10BES3DS - W10BES3DS\r",
    "description": "W10BES3DS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\nfrom mpl_toolkits.mplot3d import Axes3D\n\n# W10BES3DS\n# 1. Rayleigh distance corresponding to \"resolution\" is determined for two round\n# apertures at distance d between them.\n# 2. 3D graph of pattern of two round apertures at distance d.\n\n# Radius of apertures is a, coordinate on the observation screen R, wavelength Lamda, and\n# distance from aperture to screen is X\n\n\n# 1. Determination of Rayleigh distance.\nLamda = 0.0005\na = 0.05\nd = 24.5\nX = 4000\nR = np.arange(0, 50+0.1, 0.1)\ng1R = (besselj(1,(2*np.pi*a*(R/(X*Lamda))))/(2*np.pi*a*(R/(X*Lamda))))**2\ngg1R = (besselj(1,(2*np.pi*a*((R-d)/(X*Lamda))))/(2*np.pi*a*((R-d)/(X*Lamda))))**2\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(R,g1R,R,gg1R)\n\nplt.xlim(0, 50)\nplt.ylim(0, 0.25)\n\nplt.xlabel('R')\nplt.legend(['g1(R)', 'gg1(R)'])\n# 2. 3D Graph Distance d\n\nN = 60\nX = 4000\nM = zeros(N,N)\nfor i=0:N\n    for j=0:N\n        \n        xi = (-40) + 2.0001*i\n        yj = (-40) + 2.0001*j\n        M(i+1,j+1) = g2(xi,yj)+gg2(xi,yj)\nplt.subplot(2, 1, 2)\n\nax = plt.gca()\nif not hasattr(ax, 'plot_surface'):\n    fig = plt.figure()\n    ax = fig.add_subplot(111, projection='3d')\n    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))\n    ax.plot_surface(X, Y, M, cmap='viridis')\naxis([0 N 0 N 0 0.3])\nplt.legend(['M'])\n\n\n\nOut = np.sqrt(x**2+y**2)\nOut = (besselj(1,(2*np.pi*a*(RR(x,y)/(X*Lamda))))/(2*np.pi*a*(RR(x,y)/(X*Lamda))))**2\nOut = (besselj(1,(2*np.pi*a*(RR(x,y-d)/(X*Lamda))))/(2*np.pi*a*(RR(x,y-d)/(X*Lamda))))**2\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W10BES3DS\n% 1. Rayleigh distance corresponding to \"resolution\" is determined for two round\n% apertures at distance d between them.\n% 2. 3D graph of pattern of two round apertures at distance d.\n\n% Radius of apertures is a, coordinate on the observation screen R, wavelength Lamda, and\n% distance from aperture to screen is X\n\nfunction W10BES3DS;\nglobal a d X Lamda;\n% 1. Determination of Rayleigh distance.\nLamda = 0.0005;\na = 0.05;\nd = 24.5;\nX = 4000;\nR = (0:0.1:50);\ng1R = (besselj(1,(2*pi*a*(R/(X*Lamda))))./(2*pi*a*(R/(X*Lamda)))).^2;\ngg1R = (besselj(1,(2*pi*a*((R-d)/(X*Lamda))))./(2*pi*a*((R-d)/(X*Lamda)))).^2;\n\nfigure(1);\nsubplot(2,1,1);\nplot(R,g1R,R,gg1R);\naxis([0 50 0 0.25]);\nxlabel('R');\nlegend('g1(R)','gg1(R)');\n\n% 2. 3D Graph Distance d\n\nN = 60;\nX = 4000;\nM = zeros(N,N);\nfor i=0:N\n    for j=0:N\n        \n        xi = (-40) + 2.0001*i;\n        yj = (-40) + 2.0001*j;\n        M(i+1,j+1) = g2(xi,yj)+gg2(xi,yj);\n    end;\nend;\n\nsubplot(2,1,2);\nmesh(M);\naxis([0 N 0 N 0 0.3]);\nlegend('M');\n\n\nfunction Out=RR(x,y)\nOut = sqrt(x.^2+y.^2);\n\nfunction Out=g2(x,y)\nglobal a X Lamda;\nOut = (besselj(1,(2*pi*a*(RR(x,y)/(X*Lamda))))./(2*pi*a*(RR(x,y)/(X*Lamda)))).^2;\n\nfunction Out=gg2(x,y)\nglobal a d X Lamda;\nOut = (besselj(1,(2*pi*a*(RR(x,y-d)/(X*Lamda))))./(2*pi*a*(RR(x,y-d)/(X*Lamda)))).^2;\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W10BES3DS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "aperture",
      "wavelength",
      "pattern",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Aperture",
        "url": "https://en.wikipedia.org/wiki/Aperture"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "W11TWOROJ1Sl",
    "title": "W11TWOROJ1Sl - W11TWOROJ1S\r",
    "description": "W11TWOROJ1S\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W11TWOROJ1S\n\n# Imaging: Object of \"Two round apertures\", at Rayleigh distance\n# and round lens, Y is used for R'\n\n\n# Object\n# For choice of f# f/10=f/2a\nf = 500\na = 25\nLamda = 0.0005\nk = (2*np.pi)/Lamda\nY = np.arange(-0.01, 0.02+0.0001, 0.0001)\n# limits of integration\nb1 = -0.00025\nb2 = 0.00025\nb3 = 0.00585\nb4 = 0.00635\nIo1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0)\nIo2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0)\nIo = Io1 + Io2\n# Tol = 0.1\n# Image\n\n\nfor ind in range(len(Y)):\n    Iim(ind)=quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind))\nfig = plt.figure(1)\n\nplt.subplot(1, 2, 1)\n\nplt.plot(Y,Io)\n\nplt.xlabel('Y')\nplt.legend(['Io(Y)'])\nplt.xlim(-0.01, 0.02)\nplt.ylim(0, 2)\n\nplt.subplot(1, 2, 2)\n\nplt.plot(Y,Iim)\n\nplt.xlabel('Y')\nplt.legend(['Iim(Y)'])\nplt.xlim(-0.01, 0.02)\nplt.ylim(0, 0.4)\n\nOut = 4*(a**2)*(besselj(1,(k*a*(Y-YY))/f)/(k*a*((Y-YY)/f)))**2\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W11TWOROJ1S\n\n% Imaging: Object of \"Two round apertures\", at Rayleigh distance\n% and round lens, Y is used for R'\n\nfunction W11TWOROJ1Sl;\nglobal k a f;\n% Object\n% For choice of f# f/10=f/2a\nf = 500;\na = 25;\nLamda = 0.0005;\nk = (2*pi)/Lamda;\nY = (-0.01:0.0001:0.02);\n% limits of integration\nb1 = -0.00025;\nb2 = 0.00025;\nb3 = 0.00585;\nb4 = 0.00635;\n\n\n\nIo1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);\nIo2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0);\nIo = Io1 + Io2;\n% Tol = 0.1;\n\n\n% Image\n\n\nfor ind=1:length(Y)\n    Iim(ind)=quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind));    \nend;\n\nfigure(1);\nsubplot(1,2,1);\nplot(Y,Io);\nxlabel('Y');\nlegend('Io(Y)');\naxis([-0.01 0.02 0 2]);\nsubplot(1,2,2);\nplot(Y,Iim);\nxlabel('Y');\nlegend('Iim(Y)');\naxis([-0.01 0.02 0 0.4]);\n\n\n\nfunction Out=Iimfun(YY,Y)\nglobal k a f;\nOut = 4*(a^2)*(besselj(1,(k*a*(Y-YY))/f)./(k*a*((Y-YY)/f))).^2;\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W11TWOROJ1S",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "lens",
      "aperture"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Aperture",
        "url": "https://en.wikipedia.org/wiki/Aperture"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "W12TWOROCOHS",
    "title": "W12TWOROCOHS - W12TWOROCOHS\r",
    "description": "W12TWOROCOHS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W12TWOROCOHS\n\n# Imaging with coherent light:\n# Two round apertures at Rayleigh distance, and round lens(T is R')\n\n\n# Object\n# For choice of f# f/10=f/2a\nf = 500\na = 25\nLamda = 0.0005\nk = (2*np.pi)/Lamda\nY = np.arange(-0.01, 0.02+0.00011, 0.00011)\n# limits of integration\nb1 = -0.00025\nb2 = 0.00025\nb3 = 0.00585\nb4 = 0.00635\n# Object Amplitudes:\nIob1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0)\nIob2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0)\nIob = Iob1 + Iob2\n# Tol = 0.1\n# Image\n\n\nfor ind in range(len(Y)):\n    Iim(ind)=(quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind)))**2\nfig = plt.figure(1)\n\nplt.subplot(1, 2, 1)\n\nplt.plot(Y,Iob)\n\nplt.xlabel('Y')\nplt.legend(['Io(Y)'])\nplt.xlim(-0.01, 0.02)\nplt.ylim(0, 2)\n\nplt.subplot(1, 2, 2)\n\nplt.plot(Y,Iim)\n\nplt.xlabel('Y')\nplt.legend(['Iim(Y)'])\nplt.xlim(-0.01, 0.02)\nplt.ylim(0, 1)\n\nOut = 4*(a**2)*(besselj(1,(k*a*(Y-YY))/f)/(k*a*((Y-YY)/f)))\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W12TWOROCOHS\n\n% Imaging with coherent light:\n% Two round apertures at Rayleigh distance, and round lens(T is R')\n\nfunction W12TWOROCOHS;\nglobal k a f;\n% Object\n% For choice of f# f/10=f/2a\nf = 500;\na = 25;\nLamda = 0.0005;\nk = (2*pi)/Lamda;\nY = (-0.01:0.00011:0.02);\n% limits of integration\nb1 = -0.00025;\nb2 = 0.00025;\nb3 = 0.00585;\nb4 = 0.00635;\n\n\n% Object Amplitudes:\nIob1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);\nIob2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0);\nIob = Iob1 + Iob2;\n% Tol = 0.1;\n\n\n% Image\n\n\nfor ind=1:length(Y)\n    Iim(ind)=(quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind))).^2;    \nend;\n\nfigure(1);\nsubplot(1,2,1);\nplot(Y,Iob);\nxlabel('Y');\nlegend('Io(Y)');\naxis([-0.01 0.02 0 2]);\nsubplot(1,2,2);\nplot(Y,Iim);\nxlabel('Y');\nlegend('Iim(Y)');\naxis([-0.01 0.02 0 1]);\n\n\n\nfunction Out=Iimfun(YY,Y)\nglobal k a f;\nOut = 4*(a^2)*(besselj(1,(k*a*(Y-YY))/f)./(k*a*((Y-YY)/f)));\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W12TWOROCOHS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "lens",
      "aperture",
      "amplitude"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Aperture",
        "url": "https://en.wikipedia.org/wiki/Aperture"
      },
      {
        "title": "Amplitude",
        "url": "https://en.wikipedia.org/wiki/Amplitude"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "function",
    "title": "function - W13TRANCOHSIS\r",
    "description": "W13TRANCOHSIS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W13TRANCOHSIS\n# Coherent light.\n# Fourier transformation of a periodic structure using FT of sinx/x as\n# transfer function\n\n# Object: Sum of step functions\ni = np.arange(0, 255+1, 1)\nb = 2\nqq = 14\nLamda = 0.0005\nfn = 10\nyi = 0\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)\nfig = plt.figure(1)\n\nplt.subplot(3, 2, 1)\n\nplt.plot(i,yi)\n\nplt.xlim(0, 300)\nplt.ylim(0, 1.5)\n\nplt.xlabel('i')\nplt.legend(['yi'])\n\n# FT of the Object y is Omega\n\nOmega = fft(yi)\nN = length(Omega)\nplt.subplot(3, 2, 2)\n\nplt.plot(i,real(Omega)\n/np.sqrt(N))\nplt.xlim(0, 255)\nplt.ylim(-2, 4)\n\nplt.xlabel('i')\nplt.legend(['real(omega)/sqrt(N)'])\n# The transfer function is FT of\n# s (and not s squared)\n\n# FT of s is transfer function Tau\nSi = 4*(np.sin((np.pi*i)/(fn*Lamda*255))/((np.pi*i)/(fn*Lamda*255)))\nSi(1) = 0; # Error correction\nTau = fft(Si)\nN = length(Tau)\nplt.subplot(3, 2, 3)\n\nplt.plot(i,real(Tau)\n/np.sqrt(N))\nplt.xlim(0, 300)\nplt.ylim(-0.2, 0.1)\n\nplt.xlabel('i')\nplt.legend(['real(\tau)/sqrt(N)'])\n# Product of FT of object and transform function is the modified FT:Phi\nPhi = Tau*Omega\nplt.subplot(3, 2, 4)\n\nplt.plot(i,real(Phi)\n/N)\nplt.xlim(0, 300)\nplt.ylim(-0.2, 0.5)\n\nplt.xlabel('i')\nplt.legend(['real(phi)/N'])\n# FT(inverse) of the modified FT is the amplitude of the image yy\nyy = ifft(Phi/np.sqrt(N))\nN2 = length(Phi)\n# The image is the absolute value of yy squared\nplt.subplot(3, 1, 3)\n\nplt.plot(i,(yy)\n**2)\nplt.xlim(0, 300)\nplt.ylim(0, 0.005)\n\nplt.xlabel('i')\nplt.legend(['(yy)^2'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W13TRANCOHSIS\n% Coherent light.\n% Fourier transformation of a periodic structure using FT of sinx/x as\n% transfer function\nfunction W13TRANCOHSIS;\n% Object: Sum of step functions\ni = (0:1:255);\n\nb = 2;\nqq = 14;\nLamda = 0.0005;\nfn = 10;\nyi = 0;\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    \nend;\n\nfigure(1);\nsubplot(3,2,1);\nplot(i,yi);\naxis([0 300 0 1.5]);\nxlabel('i');\nlegend('yi');\n\n% FT of the Object y is Omega\n\nOmega = fft(yi);\nN = length(Omega);\n\nsubplot(3,2,2);\nplot(i,real(Omega)/sqrt(N));\naxis([0 255 -2 4]);\nxlabel('i');\nlegend('real(omega)/sqrt(N)');\n\n% The transfer function is FT of\n% s (and not s squared)\n\n% FT of s is transfer function Tau\nSi = 4*(sin((pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255)));\nSi(1) = 0; % Error correction\nTau = fft(Si);\nN = length(Tau);\n\nsubplot(3,2,3);\nplot(i,real(Tau)/sqrt(N));\naxis([0 300 -0.2 0.1]);\nxlabel('i');\nlegend('real(\tau)/sqrt(N)');\n\n% Product of FT of object and transform function is the modified FT:Phi\nPhi = Tau.*Omega;\n\nsubplot(3,2,4);\nplot(i,real(Phi)/N);\naxis([0 300 -0.2 0.5]);\nxlabel('i');\nlegend('real(phi)/N');\n\n% FT(inverse) of the modified FT is the amplitude of the image yy\nyy = ifft(Phi/sqrt(N));\nN2 = length(Phi);\n\n% The image is the absolute value of yy squared\nsubplot(3,1,3);\nplot(i,(yy).^2);\naxis([0 300 0 0.005]);\nxlabel('i');\nlegend('(yy)^2');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W13TRANCOHSIS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "amplitude",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Amplitude",
        "url": "https://en.wikipedia.org/wiki/Amplitude"
      },
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "function",
    "title": "function - W14TRANJ1S\r",
    "description": "W14TRANJ1S\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W14TRANJ1S\n# Coherent light.\n# Fourier transformation of a periodic structure using FT of Bessel as\n# transfer function\n\n# Object: Sum of step functions\ni = np.arange(0, 255+1, 1)\nb = 2\nqq = 14\nLamda = 0.0005\nfn = 10\nyi = 0\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)\nfig = plt.figure(1)\n\nplt.subplot(3, 2, 1)\n\nplt.plot(i,yi)\n\nplt.xlim(0, 300)\nplt.ylim(0, 1.5)\n\nplt.xlabel('i')\nplt.legend(['yi'])\n\n# FT of the Object y is Omega\n\nOmega = fft(yi)\nN = length(Omega)\nplt.subplot(3, 2, 2)\n\nplt.plot(i,real(Omega)\n/np.sqrt(N))\nplt.xlim(0, 255)\nplt.ylim(-2, 4)\n\nplt.xlabel('i')\nplt.legend(['real(omega)/sqrt(N)'])\n# The transfer function is FT of\n# s (and not s squared)\n\n# FT of s is transfer function Tau\nSi = 4*(besselj(1,(np.pi*i)/(fn*Lamda*255))/((np.pi*i)/(fn*Lamda*255)))\nSi(1) = 0; # Error correction\nTau = fft(Si)\nN = length(Tau)\nplt.subplot(3, 2, 3)\n\nplt.plot(i,real(Tau)\n/np.sqrt(N))\nplt.xlim(0, 300)\nplt.ylim(-0.1, 0.05)\n\nplt.xlabel('i')\nplt.legend(['real(\tau)/sqrt(N)'])\n# Product of FT of object and transform function is the modified FT:Phi\nPhi = Tau*Omega\nplt.subplot(3, 2, 4)\n\nplt.plot(i,real(Phi)\n/N)\nplt.xlim(0, 300)\nplt.ylim(-0.2, 0.5)\n\nplt.xlabel('i')\nplt.legend(['real(phi)/N'])\n# FT(inverse) of the modified FT is the modified amplitude of the image yy\nyy = ifft(Phi/np.sqrt(N))\nN2 = length(Phi)\n# The image is the absolute value of yy squared\nplt.subplot(3, 1, 3)\n\nplt.plot(i,(yy)\n**2)\nplt.xlim(0, 300)\nplt.ylim(0, 0.005)\n\nplt.xlabel('i')\nplt.legend(['(yy)^2'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W14TRANJ1S\n% Coherent light.\n% Fourier transformation of a periodic structure using FT of Bessel as\n% transfer function\nfunction W14TRANJ1S;\n% Object: Sum of step functions\ni = (0:1:255);\n\nb = 2;\nqq = 14;\nLamda = 0.0005;\nfn = 10;\nyi = 0;\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    \nend;\n\nfigure(1);\nsubplot(3,2,1);\nplot(i,yi);\naxis([0 300 0 1.5]);\nxlabel('i');\nlegend('yi');\n\n% FT of the Object y is Omega\n\nOmega = fft(yi);\nN = length(Omega);\n\nsubplot(3,2,2);\nplot(i,real(Omega)/sqrt(N));\naxis([0 255 -2 4]);\nxlabel('i');\nlegend('real(omega)/sqrt(N)');\n\n% The transfer function is FT of\n% s (and not s squared)\n\n% FT of s is transfer function Tau\nSi = 4*(besselj(1,(pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255)));\nSi(1) = 0; % Error correction\nTau = fft(Si);\nN = length(Tau);\n\nsubplot(3,2,3);\nplot(i,real(Tau)/sqrt(N));\naxis([0 300 -0.1 0.05]);\nxlabel('i');\nlegend('real(\tau)/sqrt(N)');\n\n% Product of FT of object and transform function is the modified FT:Phi\nPhi = Tau.*Omega;\n\nsubplot(3,2,4);\nplot(i,real(Phi)/N);\naxis([0 300 -0.2 0.5]);\nxlabel('i');\nlegend('real(phi)/N');\n\n% FT(inverse) of the modified FT is the modified amplitude of the image yy\nyy = ifft(Phi/sqrt(N));\nN2 = length(Phi);\n\n% The image is the absolute value of yy squared\nsubplot(3,1,3);\nplot(i,(yy).^2);\naxis([0 300 0 0.005]);\nxlabel('i');\nlegend('(yy)^2');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W14TRANJ1S",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "amplitude",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Amplitude",
        "url": "https://en.wikipedia.org/wiki/Amplitude"
      },
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "fow",
    "title": "fow - W15HOGRIBLOHIS\r",
    "description": "W15HOGRIBLOHIS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W15HOGRIBLOHIS\n# The object is a periodic structure. The FT of the object is multiplied\n# by a blocking function fow low frequencies.\n# The FT(inverse) of (FT of object)*(Blocking Function) is the \" new\" image.\n# The \"new\" image is compared to the original, that is the FT of (FT of object)\n# The blocking function removes certain high frequencies of the FT.\n\n# Object: Sum of step functions\ni = np.arange(1, 127+1, 1)\nb = 2\nqq = 7\nLamda = 0.0005\nfn = 10\nyi = 0\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(i,yi)\n\nplt.xlim(0, 150)\nplt.ylim(0, 2)\n\nplt.xlabel('i')\nplt.legend(['yi'])\n\n# FT of the Object y is Omega\n\nOmega = fft(yi)\nN = length(Omega)\nplt.subplot(2, 2, 2)\n\nplt.plot(i,real(Omega)\n/np.sqrt(N))\nplt.xlim(0, 150)\nplt.ylim(-2, 2)\n\nplt.xlabel('i')\nplt.legend(['real(omega)/sqrt(N)'])\n# Blocking function y\n\n# Low frequencies may pass\na = 25\nTau = (logical(a-i)>=0)+(logical(-(255-a)+i)>=0)\nplt.subplot(2, 2, 3)\n\nplt.plot(i,Tau)\n\nplt.xlim(0, 150)\nplt.ylim(0, 2)\n\nplt.xlabel('i')\nplt.legend(['\tau'])\n\n\n\n# Product of FT of object and blocking function is the modified FT:Phi\nPhi = Omega*Tau\nplt.subplot(2, 2, 4)\n\nplt.plot(i,real(Phi)\n/np.sqrt(N))\nplt.xlim(0, 150)\nplt.ylim(-1, 2)\n\nplt.xlabel('i')\nplt.legend(['real(phi)/sqrt(N)'])\n# The \"new\" image is the FT(inverse) of the modified FT\ny = ifft(Phi)\nN2 = length(Phi)\nfig = plt.figure(2)\n\nplt.subplot(1, 2, 1)\n\nplt.plot(i,real(y)\n)\nplt.xlim(0, 150)\nplt.ylim(-0.5, 1)\n\nplt.xlabel('i')\nplt.legend(['real(y)'])\n# For comparison: FT(inverse) of the unmodified FT\nplt.title('FT (inverse) of the modified FT')\nx = ifft(Omega)\nN2 = length(Omega)\nplt.subplot(1, 2, 2)\n\nplt.plot(i,real(x)\n)\nplt.xlim(0, 150)\nplt.ylim(-1, 2)\n\nplt.xlabel('i')\nplt.legend(['real(x)'])\nplt.title('FT (inverse) of the unmodified FT')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W15HOGRIBLOHIS\n% The object is a periodic structure. The FT of the object is multiplied\n% by a blocking function fow low frequencies.\n% The FT(inverse) of (FT of object)*(Blocking Function) is the \" new\" image.\n% The \"new\" image is compared to the original, that is the FT of (FT of object)\n% The blocking function removes certain high frequencies of the FT.\nfunction W15HOGRIBLOHIS;\n% Object: Sum of step functions\ni = (1:1:127);\n\nb = 2;\nqq = 7;\nLamda = 0.0005;\nfn = 10;\nyi = 0;\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    \nend;\nfigure(1);\nsubplot(2,2,1);\nplot(i,yi);\naxis([0 150 0 2]);\nxlabel('i');\nlegend('yi');\n\n% FT of the Object y is Omega\n\nOmega = fft(yi);\nN = length(Omega);\n\nsubplot(2,2,2);\nplot(i,real(Omega)/sqrt(N));\naxis([0 150 -2 2]);\nxlabel('i');\nlegend('real(omega)/sqrt(N)');\n\n% Blocking function y\n\n% Low frequencies may pass\na = 25;\nTau = (logical(a-i)>=0)+(logical(-(255-a)+i)>=0);\n\nsubplot(2,2,3);\nplot(i,Tau);\naxis([0 150 0 2]);\nxlabel('i');\nlegend('\tau');\n\n\n\n% Product of FT of object and blocking function is the modified FT:Phi\nPhi = Omega.*Tau;\n\nsubplot(2,2,4);\nplot(i,real(Phi)/sqrt(N));\naxis([0 150 -1 2]);\nxlabel('i');\nlegend('real(phi)/sqrt(N)');\n\n% The \"new\" image is the FT(inverse) of the modified FT\ny = ifft(Phi);\nN2 = length(Phi);\n\n\nfigure(2);\nsubplot(1,2,1);\nplot(i,real(y));\naxis([0 150 -0.5 1]);\nxlabel('i');\nlegend('real(y)');\n% For comparison: FT(inverse) of the unmodified FT\ntitle('FT (inverse) of the modified FT');\n\nx = ifft(Omega);\nN2 = length(Omega);\nsubplot(1,2,2);\nplot(i,real(x));\naxis([0 150 -1 2]);\nxlabel('i');\nlegend('real(x)');\ntitle('FT (inverse) of the unmodified FT');\n\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W15HOGRIBLOHIS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "for",
    "title": "for - W16HOGRIBLOLOS\r",
    "description": "W16HOGRIBLOLOS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W16HOGRIBLOLOS\n# The object is a periodic structure. The FT of the object is multiplied\n# by a blocking function for high frequencies.\n# The FT(inverse) of (FT of object)*(Blocking Function) is the \"new\" image.\n# The \"new\" image is compared to the original, that is the FT of (FT of object)\n# The blocking function removes certain high frequencies of the FT.\n\n# Object: Sum of step functions\ni = np.arange(1, 127+1, 1)\nb = 2\nqq = 7\nLamda = 0.0005\nfn = 10\nyi = 0\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(i,yi)\n\nplt.xlim(0, 150)\nplt.ylim(0, 2)\n\nplt.xlabel('i')\nplt.legend(['yi'])\n\n# FT of the Object y is Omega\n\nOmega = fft(yi)\nN = length(Omega)\nplt.subplot(2, 2, 2)\n\nplt.plot(i,real(Omega)\n/np.sqrt(N))\nplt.xlim(0, 150)\nplt.ylim(-2, 2)\n\nplt.xlabel('i')\nplt.legend(['real(omega)/sqrt(N)'])\n# Blocking function y\n\n\na = 15\nn = 1\nTau = (logical(i-(2*n+2)*a)>=0)-(logical(i-(4+4*n)*a)>=0)\nplt.subplot(2, 2, 3)\n\nplt.plot(i,Tau)\n\nplt.xlim(0, 150)\nplt.ylim(0, 2)\n\nplt.xlabel('i')\nplt.legend(['\tau'])\n\n\n\n# Product of FT of object and blocking function is the modified FT:Phi\nPhi = Omega*Tau\nplt.subplot(2, 2, 4)\n\nplt.plot(i,real(Phi)\n/np.sqrt(N))\nplt.xlim(0, 150)\nplt.ylim(-1, 2)\n\nplt.xlabel('i')\nplt.legend(['real(phi)/sqrt(N)'])\n# The \"new\" image is the FT(inverse) of the modified FT\ny = ifft(Phi)\nN2 = length(Phi)\nfig = plt.figure(2)\n\nplt.subplot(1, 2, 1)\n\nplt.plot(i,real(y)\n)\nplt.xlim(0, 150)\nplt.ylim(-0.5, 1)\n\nplt.xlabel('i')\nplt.legend(['Real(y)'])\n# For comparison: FT(inverse) of the unmodified FT\nplt.title('FT (inverse) of the modified FT')\nx = ifft(Omega)\nN2 = length(Omega)\nplt.subplot(1, 2, 2)\n\nplt.plot(i,real(x)\n)\nplt.xlim(0, 150)\nplt.ylim(-0.5, 1.5)\n\nplt.xlabel('i')\nplt.legend(['Real(x)'])\nplt.title('FT (inverse) of the unmodified FT')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W16HOGRIBLOLOS\n% The object is a periodic structure. The FT of the object is multiplied\n% by a blocking function for high frequencies.\n% The FT(inverse) of (FT of object)*(Blocking Function) is the \"new\" image.\n% The \"new\" image is compared to the original, that is the FT of (FT of object)\n% The blocking function removes certain high frequencies of the FT.\nfunction W16HOGRIBLOLOS;\n% Object: Sum of step functions\ni = (1:1:127);\n\nb = 2;\nqq = 7;\nLamda = 0.0005;\nfn = 10;\nyi = 0;\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    \nend;\nfigure(1);\nsubplot(2,2,1);\nplot(i,yi);\naxis([0 150 0 2]);\nxlabel('i');\nlegend('yi');\n\n% FT of the Object y is Omega\n\nOmega = fft(yi);\nN = length(Omega);\n\nsubplot(2,2,2);\nplot(i,real(Omega)/sqrt(N));\naxis([0 150 -2 2]);\nxlabel('i');\nlegend('real(omega)/sqrt(N)');\n% Blocking function y\n\n\na = 15;\nn = 1;\nTau = (logical(i-(2*n+2)*a)>=0)-(logical(i-(4+4*n)*a)>=0);\n\nsubplot(2,2,3);\nplot(i,Tau);\naxis([0 150 0 2]);\nxlabel('i');\nlegend('\tau');\n\n\n\n% Product of FT of object and blocking function is the modified FT:Phi\nPhi = Omega.*Tau;\n\nsubplot(2,2,4);\nplot(i,real(Phi)/sqrt(N));\naxis([0 150 -1 2]);\nxlabel('i');\nlegend('real(phi)/sqrt(N)');\n\n% The \"new\" image is the FT(inverse) of the modified FT\ny = ifft(Phi);\nN2 = length(Phi);\n\n\nfigure(2);\nsubplot(1,2,1);\nplot(i,real(y));\naxis([0 150 -0.5 1]);\nxlabel('i');\nlegend('Real(y)');\n% For comparison: FT(inverse) of the unmodified FT\ntitle('FT (inverse) of the modified FT');\n\nx = ifft(Omega);\nN2 = length(Omega);\nsubplot(1,2,2);\nplot(i,real(x));\naxis([0 150 -0.5 1.5]);\nxlabel('i');\nlegend('Real(x)');\ntitle('FT (inverse) of the unmodified FT');\n\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W16HOGRIBLOLOS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "has",
    "title": "has - W17HOGRPERS\r",
    "description": "W17HOGRPERS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W17HOGRPERS\n# The object is a periodic structure. The FT of the object is multiplied\n# by a blocking function. A blocking function has been chosen for blocking certain\n# frequencies such that there are twice as many peaks in the image.\n\n# The FT(inverse) of (FT of object)*(Blocking Function) is the \"new\" image.\n# The \"new\" image is compared to the original, that is the FT of (FT of object)\n# The blocking function removes certain high frequencies of the FT.\n\n# Object: Sum of step functions\ni = np.arange(1, 127+1, 1)\nb = 2\nqq = 7\nLamda = 0.0005\nfn = 10\nyi = 0\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(i,yi)\n\nplt.xlim(0, 150)\nplt.ylim(0, 2)\n\nplt.xlabel('i')\nplt.legend(['yi'])\n# FT of the Object y is Omega\n\nOmega = fft(yi)\nN = length(Omega)\nplt.subplot(3, 1, 2)\n\nplt.plot(i,real(Omega)\n/np.sqrt(N))\nplt.xlim(0, 150)\nplt.ylim(-2, 2)\n\nplt.xlabel('i')\nplt.legend(['real(omega)/sqrt(N)'])\n# Blocking function y\n\nq=5\na=5\nTau = 0\nfor n=0:q\n    \n    Tau = Tau + (logical(i-(4*n+2)*a)>=0)-(logical(i-(4*n+4)*a)>=0)\nplt.subplot(3, 1, 3)\n\nplt.plot(i,Tau)\n\nplt.xlim(0, 150)\nplt.ylim(0, 2)\n\nplt.xlabel('i')\nplt.legend(['\tau'])\n\n\n\n# Product of FT of object and blocking function is the modified FT:Phi\nPhi = Omega*Tau\n# The \"new\" image is the FT(inverse) of the modified FT\nyy = ifft(Phi)\nN2 = length(Phi)\nfig = plt.figure(2)\n\nplt.subplot(1, 2, 1)\n\nplt.plot(i,yy)\n\nplt.xlim(0, 150)\nplt.ylim(-1, 2)\n\nplt.xlabel('i')\nplt.legend(['yy'])\n\nplt.title('Product: FT (inverse) of object and Blocking Function')\n# For comparison: The original object\nplt.subplot(1, 2, 2)\n\nplt.plot(i,yi)\n\nplt.xlim(0, 150)\nplt.ylim(-0.5, 2)\n\nplt.xlabel('i')\nplt.legend(['yi'])\nplt.title('The Original Object')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W17HOGRPERS\n% The object is a periodic structure. The FT of the object is multiplied\n% by a blocking function. A blocking function has been chosen for blocking certain\n% frequencies such that there are twice as many peaks in the image.\n\n% The FT(inverse) of (FT of object)*(Blocking Function) is the \"new\" image.\n% The \"new\" image is compared to the original, that is the FT of (FT of object)\n% The blocking function removes certain high frequencies of the FT.\nfunction W17HOGRPERS;\n% Object: Sum of step functions\ni = (1:1:127);\n\nb = 2;\nqq = 7;\nLamda = 0.0005;\nfn = 10;\nyi = 0;\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    \nend;\nfigure(1);\nsubplot(3,1,1);\nplot(i,yi);\naxis([0 150 0 2]);\nxlabel('i');\nlegend('yi');\n% FT of the Object y is Omega\n\nOmega = fft(yi);\nN = length(Omega);\n\nsubplot(3,1,2);\nplot(i,real(Omega)/sqrt(N));\naxis([0 150 -2 2]);\nxlabel('i');\nlegend('real(omega)/sqrt(N)');\n% Blocking function y\n\nq=5;\na=5;\nTau = 0;\nfor n=0:q\n    \n    Tau = Tau + (logical(i-(4*n+2)*a)>=0)-(logical(i-(4*n+4)*a)>=0);\nend;\nsubplot(3,1,3);\nplot(i,Tau);\naxis([0 150 0 2]);\nxlabel('i');\nlegend('\tau');\n\n\n\n% Product of FT of object and blocking function is the modified FT:Phi\nPhi = Omega.*Tau;\n\n\n% The \"new\" image is the FT(inverse) of the modified FT\nyy = ifft(Phi);\nN2 = length(Phi);\n\n\nfigure(2);\nsubplot(1,2,1);\nplot(i,yy);\naxis([0 150 -1 2]);\nxlabel('i');\nlegend('yy');\n\ntitle('Product: FT (inverse) of object and Blocking Function');\n% For comparison: The original object\nsubplot(1,2,2);\nplot(i,yi);\naxis([0 150 -0.5 2]);\nxlabel('i');\nlegend('yi');\ntitle('The Original Object');\n\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W17HOGRPERS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "W18HOSTEPS",
    "title": "W18HOSTEPS - W18HOSTEPS\r",
    "description": "W18HOSTEPS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W18HOSTEPS\n\n# The object y has a complicated shape. Its FT is the hologram c. It may be\n# produced in the focal plane of a lens, using parallel light.\n\n# The illumination of the hologram with parallel light will reproduce the object,\n# that is the FT(inverse) of the FT, called here cc.\n\n# We want to study the reproduced object when the information in the hologram\n# is only partly used, that is we multiply cc with a filter f.\n# We show separately f and the FT of the product of f and cc.\n\n# The width of the filter f may be changed by using various values for \"a\" and \"b\",\n# corresponding to changing the size of the hologram.\n\n# The Object\nA = [33 80 80 50 20 99 160 200]\ni = np.arange(0, 255+1, 1)\nyi = 0\nfor n in range(1, 3+1):yi = yi +(-(logical(A(n)-i)>=0))\nfor n in range(4, 8+1):yi = yi +((logical(A(n)-i)>=0)*((-1)**n))\nfig = plt.figure(1)\n\nplt.subplot(3, 2, 1)\n\nplt.plot(i,yi)\n\nplt.xlim(0, 300)\nplt.ylim(-2, 2)\n\nplt.xlabel('i')\nplt.legend(['yi'])\n\n# The hologram\nc = fft(yi)\nN = length(c)\nk= (0:1:N-1)\nj= (0:1:N-1)\nplt.subplot(3, 2, 2)\n\nplt.plot(k,real(c)\n/np.sqrt(N))\nplt.xlim(0, 300)\nplt.ylim(-5, 5)\n\nplt.xlabel('k')\nplt.legend(['real(c)/sqrt(N)'])\n# The FT of the hologram\n# The FT of the FT(hologram)\n\ncc = c\nyy = ifft(cc)\nN = length(cc)\nj = (0:1:N-1)\nplt.subplot(3, 2, 3)\n\nplt.plot(j, real(yy)\n)\nplt.xlim(0, 255)\nplt.ylim(-4, 2)\n\nplt.xlabel('j')\nplt.legend(['real(yy)'])\n# The filter\na= 60\nb= 60\nf = (logical(a-j)>=0) + (logical(j-255+b)>=0)\nplt.subplot(3, 2, 4)\n\nplt.plot(j,f)\n\nplt.xlim(0, 300)\nplt.ylim(0, 2)\n\nplt.xlabel('j')\nplt.legend(['f'])\n\n# The product: hologram x filter\nplt.subplot(3, 1, 3)\n\nplt.plot(k,f*real(c)\n/np.sqrt(N))\nplt.xlim(0, 300)\nplt.ylim(-5, 5)\n\nplt.xlabel('k')\nplt.legend(['f*real(c)/sqrt(N)'])\n# The FT (inverse) of the changed hologram (hologram x filter),\n# similar to the object\nccc = c*f\nx = ifft(ccc)\nN = length(ccc)\nfig = plt.figure(2)\n\nplt.subplot(1, 2, 1)\n\nplt.plot(k, real(x)\n)\nplt.xlim(0, 300)\nplt.ylim(-4, 2)\n\nplt.xlabel('k')\nplt.title('The FT (inverse) of the changed hologram (hologram x filter)')\nplt.subplot(1, 2, 2)\n\n# For comparison: The object.\nplt.plot(i, yi)\n\nplt.xlim(0, 300)\nplt.ylim(-2, 2)\n\nplt.xlabel('i')\nplt.title('The Object')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W18HOSTEPS\n\n% The object y has a complicated shape. Its FT is the hologram c. It may be\n% produced in the focal plane of a lens, using parallel light.\n\n% The illumination of the hologram with parallel light will reproduce the object,\n% that is the FT(inverse) of the FT, called here cc.\n\n% We want to study the reproduced object when the information in the hologram\n% is only partly used, that is we multiply cc with a filter f.\n% We show separately f and the FT of the product of f and cc.\n\n% The width of the filter f may be changed by using various values for \"a\" and \"b\",\n% corresponding to changing the size of the hologram.\nfunction W18HOSTEPS;\n% The Object\nA = [33 80 80 50 20 99 160 200];\ni = (0:1:255);\nyi = 0;\nfor n=1:3\n    yi = yi +(-(logical(A(n)-i)>=0));\nend;\nfor n=4:8\n    yi = yi +((logical(A(n)-i)>=0)*((-1)^n));\nend;\nfigure(1);\nsubplot(3,2,1);\nplot(i,yi);\naxis([0 300 -2 2]);\nxlabel('i');\nlegend('yi');\n\n% The hologram\nc = fft(yi);\nN = length(c);\nk= (0:1:N-1);\nj= (0:1:N-1);\n\nsubplot(3,2,2);\nplot(k,real(c)/sqrt(N));\naxis([0 300 -5 5]);\nxlabel('k');\nlegend('real(c)/sqrt(N)');\n\n% The FT of the hologram\n% The FT of the FT(hologram)\n\ncc = c;\nyy = ifft(cc);\nN = length(cc);\nj = (0:1:N-1);\n\nsubplot(3,2,3);\nplot(j, real(yy));\naxis([0 255 -4 2]);\nxlabel('j');\nlegend('real(yy)');\n\n% The filter\na= 60;\nb= 60;\nf = (logical(a-j)>=0) + (logical(j-255+b)>=0);\n\nsubplot(3,2,4);\nplot(j,f);\naxis([0 300 0 2]);\nxlabel('j');\nlegend('f');\n\n% The product: hologram x filter\nsubplot(3,1,3);\nplot(k,f.*real(c)/sqrt(N));\naxis([0 300 -5 5]);\nxlabel('k');\nlegend('f*real(c)/sqrt(N)');\n\n% The FT (inverse) of the changed hologram (hologram x filter),\n% similar to the object\nccc = c.*f;\nx = ifft(ccc);\nN = length(ccc);\n\nfigure(2);\n\nsubplot(1,2,1);\nplot(k, real(x));\naxis([0 300 -4 2]);\nxlabel('k');\ntitle('The FT (inverse) of the changed hologram (hologram x filter)');\n\nsubplot(1,2,2);\n% For comparison: The object.\nplot(i, yi);\naxis([0 300 -2 2]);\nxlabel('i');\ntitle('The Object');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W18HOSTEPS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "lens",
      "focal-length",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Focal length",
        "url": "https://en.wikipedia.org/wiki/Focal_length"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "W1FTSERIS",
    "title": "W1FTSERIS - W1FTSERIS\r",
    "description": "W1FTSERIS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W1FTSERIS\n# Fourier serie of spatial wavelength ???? for the interval from -1 to 1( shown to 2).\n# For N = 0 the only term is a sine wave from -1 to 1, of wavelength ? = 2.\n# For N = 1 a sine-term with 1/3 of ? and smaller amplitude is added.\n# For N = 2 a term with 1/5 of ? and smaller amplitude, and so on.\n# If N is large, we see a perfect step function.\n# For smaller N ( in the 20th) we see \"Gibb's phenomenon\", the corners\n# are not round and there is \"overshooting\". For large N it disappears.\n\nx = np.arange(-1, 1.9+0.01, 0.01)\nn = np.arange(0, 200+1, 1)\nN = 100\nLamda = 1\n# For larger and larger N one can see how more and more\n# waves with shorter and shorter wavelength are used to build the step\n# function.\n\ng0 = (4*np.sin(np.pi*x*(1/Lamda)))/np.pi\ng1 = (4*np.sin(np.pi*x*((2*1+1)/Lamda)))/((2*1+1)*np.pi)\ng2 = (4*np.sin(np.pi*x*((2*2+1)/Lamda)))/((2*2+1)*np.pi)\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(x,g0,x,g1,x,g2)\n\nplt.xlim(-1, 2)\nplt.ylim(-2, 2)\n\nplt.xlabel('x')\nplt.legend(['g0(x)', 'g1(x)', 'g2(x)'])\nplt.subplot(2, 2, 2)\n\nplt.plot(x,g0+g1+g2)\n\nplt.xlim(-1, 2)\nplt.ylim(-2, 2)\n\nplt.xlabel('x')\nplt.legend(['g0(x)+g1(x)+g2(x)'])\nplt.subplot(2, 1, 2)\n\nplt.plot(x,g(x)\n)\nplt.xlim(-1, 2)\nplt.ylim(-2, 2)\n\nplt.xlabel('x')\nplt.legend(['g(x)'])\nOut = (2*n+1)/(2*Lamda)\nsum = 0\nfor n=0:N\n    sum = sum + (4*np.sin(2*np.pi*x*f(n)))/((2*n+1)*np.pi)\nOut = sum\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W1FTSERIS\n% Fourier serie of spatial wavelength ???? for the interval from -1 to 1( shown to 2).\n% For N = 0 the only term is a sine wave from -1 to 1, of wavelength ? = 2.\n% For N = 1 a sine-term with 1/3 of ? and smaller amplitude is added.\n% For N = 2 a term with 1/5 of ? and smaller amplitude, and so on.\n% If N is large, we see a perfect step function.\n% For smaller N ( in the 20th) we see \"Gibb's phenomenon\", the corners\n% are not round and there is \"overshooting\". For large N it disappears.\nfunction W1FTSERIS;\nglobal N Lamda;\nx = (-1:0.01:1.9);\nn = (0:1:200);\nN = 100;\nLamda = 1;\n\n\n% For larger and larger N one can see how more and more\n% waves with shorter and shorter wavelength are used to build the step\n% function.\n\ng0 = (4*sin(pi*x*(1/Lamda)))/pi;\ng1 = (4*sin(pi*x*((2*1+1)/Lamda)))/((2*1+1)*pi);\ng2 = (4*sin(pi*x*((2*2+1)/Lamda)))/((2*2+1)*pi);\n\nfigure(1);\nsubplot(2,2,1);\nplot(x,g0,x,g1,x,g2);\naxis([-1 2 -2 2]);\nxlabel('x');\nlegend('g0(x)','g1(x)','g2(x)');\n\nsubplot(2,2,2);\nplot(x,g0+g1+g2);\naxis([-1 2 -2 2]);\nxlabel('x');\nlegend('g0(x)+g1(x)+g2(x)');\n\nsubplot(2,1,2);\nplot(x,g(x));\naxis([-1 2 -2 2]);\nxlabel('x');\nlegend('g(x)');\n\n\n\n\nfunction Out=f(n)\nglobal Lamda;\nOut = (2*n+1)/(2*Lamda);\n\nfunction Out=g(x)\nglobal N;\nsum = 0;\nfor n=0:N\n    sum = sum + (4*sin(2*pi*x*f(n)))/((2*n+1)*pi);    \nend;\nOut = sum;\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W1FTSERIS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "wavelength",
      "amplitude",
      "fourier-transform"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Amplitude",
        "url": "https://en.wikipedia.org/wiki/Amplitude"
      },
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "W2FTCFTS",
    "title": "W2FTCFTS - W2FTCFTS\r",
    "description": "W2FTCFTS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W2FTCFTS\n# Example of real fft and complex cfft on a real object function.\n\n# 1. The real FT fft\n# The Object\ni = np.arange(0, 255+1, 1)\nA = [33 80 80 50 20 99 160 200]\nyi = y(i)\nfig = plt.figure(1)\n\nplt.subplot(3, 3, 1)\n\nplt.plot(i,yi)\n\nplt.xlim(0, 300)\nplt.ylim(-2, 2)\n\nplt.xlabel('i')\nplt.legend(['yi'])\n\n# The real Fourier Transformation\nc = fft(yi)\nN2 = length(c)\nj = (0:1:N2-1)\nplt.subplot(3, 3, 2)\n\nplt.plot(j,real(c)\n/np.sqrt(N2))\nplt.xlim(0, 150)\nplt.ylim(-5, 5)\n\nplt.xlabel('j')\nplt.legend(['real(c)/sqrt(N2)'])\n# The inverse fourier transformation\nx = ifft(c)\nNx = length(x)\nk = (0:1:Nx-1)\nplt.subplot(3, 3, 3)\n\nplt.plot(k,x)\n\nplt.xlim(0, 300)\nplt.ylim(-4, 2)\n\nplt.xlabel('k')\nplt.legend(['x'])\n\n# We can not use x = fft(c) we get\n# the \"Error Message\"\n# c must be real\n\n# 2. The complex Fourier Transformation\n# The Object\ni = np.arange(0, 255+1, 1)\nA = [33 80 80 50 20 99 160 200]\nyi = y(i)\nplt.subplot(3, 3, 4)\n\nplt.plot(i,yi)\n\nplt.xlim(0, 300)\nplt.ylim(-2, 2)\n\nplt.xlabel('i')\nplt.legend(['yi'])\n\n# The complex Fourier Transformation\ncc = fft(yi)\nNcc = length(cc)\nk = (0:1:Ncc-1)\nplt.subplot(3, 3, 5)\n\nplt.plot(k,real(cc)\n/np.sqrt(Ncc))\nplt.xlim(0, 300)\nplt.ylim(-5, 5)\n\nplt.xlabel('k')\nplt.legend(['real(cc)/sqrt(Ncc)'])\n# The inverse Fourier Transformation\nxx = ifft(cc)\nNxx = length(xx)\nk = (0:1:Nxx-1)\nplt.subplot(3, 3, 6)\n\nplt.plot(k,real(xx)\n)\nplt.xlim(0, 300)\nplt.ylim(-4, 2)\n\nplt.xlabel('k')\nplt.legend(['real(xx)'])\n# 3. Application of cfft the second time, instead of the inverse cifft\n\nxxx = fft(cc/np.sqrt(Ncc))\nNxxx = length(xxx)\nf = (0:1:Nxxx - 1)\nplt.subplot(3, 3, 8)\n\nplt.plot(f,real(xxx)\n/np.sqrt(Nxxx))\nplt.xlim(0, 300)\nplt.ylim(-4, 2)\n\nplt.xlabel('f')\nplt.legend(['real(xxx)/sqrt(Nxxx)'])\nfor k in range(len(i)):\n    \n    sum1 = 0\n    for n in range(1, 3+1):sum1 = sum1 - (logical(A(n)-i(k))>=0)\n    sum2 = 0\n    for n in range(4, 8+1):sum2 = sum2 + (logical(A(n)-i(k))>=0)*((-1)**n)\n    output(k) = sum1+sum2\nOut = output\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W2FTCFTS\n% Example of real fft and complex cfft on a real object function.\nfunction W2FTCFTS;\nglobal A;\n% 1. The real FT fft\n% The Object\ni = (0:1:255);\nA = [33 80 80 50 20 99 160 200];\nyi = y(i);\n\nfigure(1);\nsubplot(3,3,1);\nplot(i,yi);\naxis([0 300 -2 2]);\nxlabel('i');\nlegend('yi');\n\n% The real Fourier Transformation\nc = fft(yi);\nN2 = length(c);\nj = (0:1:N2-1);\n\nsubplot(3,3,2);\nplot(j,real(c)/sqrt(N2));\naxis([0 150 -5 5]);\nxlabel('j');\nlegend('real(c)/sqrt(N2)');\n\n% The inverse fourier transformation\nx = ifft(c);\nNx = length(x);\nk = (0:1:Nx-1);\n\nsubplot(3,3,3);\nplot(k,x);\naxis([0 300 -4 2]);\nxlabel('k');\nlegend('x');\n\n% We can not use x = fft(c) we get\n% the \"Error Message\"\n% c must be real\n\n% 2. The complex Fourier Transformation\n% The Object\ni = (0:1:255);\nA = [33 80 80 50 20 99 160 200];\nyi = y(i);\n\nsubplot(3,3,4);\nplot(i,yi);\naxis([0 300 -2 2]);\nxlabel('i');\nlegend('yi');\n\n% The complex Fourier Transformation\ncc = fft(yi);\nNcc = length(cc);\nk = (0:1:Ncc-1);\n\nsubplot(3,3,5);\nplot(k,real(cc)/sqrt(Ncc));\naxis([0 300 -5 5]);\nxlabel('k');\nlegend('real(cc)/sqrt(Ncc)');\n\n% The inverse Fourier Transformation\nxx = ifft(cc);\nNxx = length(xx);\nk = (0:1:Nxx-1);\n\nsubplot(3,3,6);\nplot(k,real(xx));\naxis([0 300 -4 2]);\nxlabel('k');\nlegend('real(xx)');\n\n% 3. Application of cfft the second time, instead of the inverse cifft\n\nxxx = fft(cc/sqrt(Ncc));\nNxxx = length(xxx);\nf = (0:1:Nxxx - 1);\n\nsubplot(3,3,8);\nplot(f,real(xxx)/sqrt(Nxxx));\naxis([0 300 -4 2]);\nxlabel('f');\nlegend('real(xxx)/sqrt(Nxxx)');\n\n\n\n\nfunction Out=y(i);\nglobal A;\nfor k=1:length(i)\n    \n    sum1 = 0;\n    for n=1:3\n        sum1 = sum1 - (logical(A(n)-i(k))>=0);\n    end;\n    sum2 = 0;\n    for n=4:8\n        sum2 = sum2 + (logical(A(n)-i(k))>=0)*((-1)^n);\n    end;\n    output(k) = sum1+sum2;\nend;\nOut = output;\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W2FTCFTS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "W3IMONEBS",
    "title": "W3IMONEBS - W3IMONEBS\r",
    "description": "W3IMONEBS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W3IMONEBS\n# Imaging: Object is one bar and a cylindrical lens is used.\n# f#10 is f/2a equal 10    a is \"radius of cylindrical lens\n\nY = np.arange(-0.01, 0.01+0.0001, 0.0001)\nb1 = -0.002\nb2 = 0.002\nLamda = 0.0005\nf = 500\na = 25\nk = (2*np.pi)/Lamda\n# TOL = 0.01\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(Y,Iob(Y)\n)\nplt.xlim(-0.01, 0.01)\nplt.ylim(0, 2)\n\nplt.xlabel('Y')\nplt.legend(['Iob(Y)'])\nplt.subplot(2, 2, 2)\n\nplt.plot(Y,S(Y)\n)\nplt.xlim(-0.01, 0.01)\nplt.ylim(0, 3000)\n\nplt.xlabel('Y')\nplt.legend(['S(Y)'])\n# Unnormalized\nfor j in range(len(Y)):\n    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j))\nplt.subplot(2, 1, 2)\n\nplt.plot(Y,Iim)\n\nplt.xlim(-0.01, 0.01)\nplt.ylim(0, 10)\n\nplt.xlabel('Y')\nplt.legend(['Iim(Y)'])\nOut = (logical(b2-Y)>=0)-(logical(b1-Y)>=0)\nOut = 4*(a**2)*((np.sin((k*a*Y)/f))/(k*a*(Y/f)))**2\nOut = Iob(YY)*4*(a**2)*((np.sin((k*a*(Y-YY))/f)/(k*a*((Y-YY)/f)))**2)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W3IMONEBS\n% Imaging: Object is one bar and a cylindrical lens is used.\n% f#10 is f/2a equal 10    a is \"radius of cylindrical lens\nfunction W3IMONEBS;\nglobal k a f b1 b2;\nY = (-0.01:0.0001:0.01);\nb1 = -0.002;\nb2 = 0.002;\nLamda = 0.0005;\nf = 500;\na = 25;\nk = (2*pi)/Lamda;\n% TOL = 0.01;\n\nfigure(1);\nsubplot(2,2,1);\nplot(Y,Iob(Y));\naxis([-0.01 0.01 0 2]);\nxlabel('Y');\nlegend('Iob(Y)');\n\n\n\nsubplot(2,2,2);\nplot(Y,S(Y));\naxis([-0.01 0.01 0 3000]);\nxlabel('Y');\nlegend('S(Y)');\n\n% Unnormalized\nfor j=1:length(Y)\n    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j));\nend;\n\nsubplot(2,1,2);\nplot(Y,Iim);\naxis([-0.01 0.01 0 10]);\nxlabel('Y');\nlegend('Iim(Y)');\n\nfunction Out=Iob(Y);\nglobal b1 b2;\nOut = (logical(b2-Y)>=0)-(logical(b1-Y)>=0);\n\n\nfunction Out=S(Y);\nglobal k a f;\nOut = 4*(a^2)*((sin((k*a*Y)/f))./(k*a*(Y/f))).^2;\n\nfunction Out=Iimfunct(YY,Y)\nglobal k a f;\nOut = Iob(YY)*4*(a^2).*((sin((k*a*(Y-YY))/f)./(k*a*((Y-YY)/f))).^2);\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W3IMONEBS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "lens"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "W4IMTWOBS",
    "title": "W4IMTWOBS - W4IMTWOBS\r",
    "description": "W4IMTWOBS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W4IMTWOBS\n# Imaging: Object is \"Two bars\" and cylindrical lens is used.\n# f/10= f/2a            a is \"radius\" of cylindrical lens\n\nY = np.arange(-0.02, 0.02+0.0011, 0.0011)\nb1 = -0.008\nb2 = -0.005\nb3 = 0.005\nb4 = 0.008\nLamda = 0.0005\nk = (2*np.pi)/Lamda\nf = 500\na = 25\nIo1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0)\nIo2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0)\nIo = Io1 + Io2\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(Y,Io)\n\nplt.legend(['Io(Y)'])\nplt.xlim(-0.02, 0.02)\nplt.ylim(0, 2)\n\nplt.xlabel('Y')\nfor j in range(len(Y)):\n    Iim1(j) = quad(@Iimf,b1,b2,[],[],Y(j))\n    Iim2(j) = quad(@Iimf,b3,b4,[],[],Y(j))\nIim = Iim1+Iim2\nplt.subplot(2, 1, 2)\n\nplt.plot(Y,Iim)\n\nplt.xlim(-0.02, 0.02)\nplt.ylim(0, 10)\n\nplt.xlabel('Y')\nplt.legend(['Iim(Y)'])\nOut = 4*(a**2)*((np.sin((k*a*(Y-YY))/f))/(k*a*((Y-YY)/f)))**2\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W4IMTWOBS\n% Imaging: Object is \"Two bars\" and cylindrical lens is used.\n% f/10= f/2a            a is \"radius\" of cylindrical lens\nfunction W4IMTWOBS;\nglobal k a f;\nY = (-0.02:0.0011:0.02);\nb1 = -0.008;\nb2 = -0.005;\nb3 = 0.005;\nb4 = 0.008;\nLamda = 0.0005;\nk = (2*pi)/Lamda;\nf = 500;\na = 25;\n\nIo1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0);\nIo2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0);\nIo = Io1 + Io2;\n\nfigure(1);\nsubplot(2,1,1);\nplot(Y,Io);\nlegend('Io(Y)');\n\naxis([-0.02 0.02 0 2]);\nxlabel('Y');\n\nfor j=1:length(Y)\n    Iim1(j) = quad(@Iimf,b1,b2,[],[],Y(j));\n    Iim2(j) = quad(@Iimf,b3,b4,[],[],Y(j));\nend;\nIim = Iim1+Iim2;\n\nsubplot(2,1,2);\nplot(Y,Iim);\naxis([-0.02 0.02 0 10]);\nxlabel('Y');\nlegend('Iim(Y)');\n\nfunction Out=Iimf(YY,Y)\nglobal k a f;\nOut = 4*(a^2)*((sin((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W4IMTWOBS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "lens"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "W5IMONEROS",
    "title": "W5IMONEROS - W5IMONEROS\r",
    "description": "W5IMONEROS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W5IMONEROS\n# Imaging:Object is one round aperture and round lens is\n# used\n# Object:\n# Since we are using circular symmetry, the round aperture is a \"bar\" in the coordinate X,\n# f#10 is f/2a equal 10\n\nY = np.arange(-0.01, 0.01+0.0001, 0.0001)\n# tol = 0.01\nb1 = -0.002\nb2 = 0.002\nLamda = 0.0005\nf = 500\na = 25\nk = (2*np.pi)/Lamda\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(Y,Iob(Y)\n)\nplt.xlim(-0.01, 0.01)\nplt.ylim(0, 1.1)\n\nplt.xlabel('Y')\nplt.legend(['Iob(Y)'])\n# Unnormalized\nfor j in range(len(Y)):\n    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j))\nplt.subplot(2, 1, 2)\n\nplt.plot(Y,Iim)\n\nplt.xlim(-0.01, 0.01)\nplt.ylim(0, 3)\n\nplt.xlabel('Y')\nplt.legend(['Iim(Y)'])\nOut = (logical(b2-Y)>=0) - (logical(b1-Y)>=0)\nOut = Iob(YY)*4*(a**2)*(besselj(1,((k*a*(Y-YY))/f))/(k*a*((Y-YY)/f)))**2\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W5IMONEROS\n% Imaging:Object is one round aperture and round lens is\n% used\n% Object:\n% Since we are using circular symmetry, the round aperture is a \"bar\" in the coordinate X,\n% f#10 is f/2a equal 10\nfunction W5IMONEROS;\nglobal b1 b2 k a f;\nY = (-0.01:0.0001:0.01);\n% tol = 0.01;\nb1 = -0.002;\nb2 = 0.002;\nLamda = 0.0005;\nf = 500;\na = 25;\nk = (2*pi)/Lamda;\n\nfigure(1);\nsubplot(2,1,1);\nplot(Y,Iob(Y));\naxis([-0.01 0.01 0 1.1]);\nxlabel('Y');\nlegend('Iob(Y)');\n\n% Unnormalized\nfor j=1:length(Y)\n    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j));\nend;\n\nsubplot(2,1,2);\nplot(Y,Iim);\naxis([-0.01 0.01 0 3]);\nxlabel('Y');\nlegend('Iim(Y)');\n\nfunction Out=Iob(Y);\nglobal b1 b2;\nOut = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);\n\nfunction Out=Iimfunct(YY,Y)\nglobal k a f;\nOut = Iob(YY)*4*(a^2).*(besselj(1,((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W5IMONEROS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "lens",
      "aperture"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Aperture",
        "url": "https://en.wikipedia.org/wiki/Aperture"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "W6IMTWOROS",
    "title": "W6IMTWOROS - W6IMTWOROS\r",
    "description": "W6IMTWOROS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W6IMTWOROS\n# Imaging: Two round apertures and a round lens, (R' is X)\n\n\nY = np.arange(-0.1, 0.6+0.00111, 0.00111)\nb1 = -0.002\nb2 = 0.002\nb3 = 0.012\nb4 = 0.016\n# tol = 0.1\n# f/10 = f/2a\nLamda = 0.0005\nk = (2*np.pi)/Lamda\nf = 500\na = 25\nIo1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0)\nIo2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0)\nIo = Io1 + Io2\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(Y,Io)\n\nplt.xlim(-0.01, 0.02)\nplt.ylim(0, 2)\n\nplt.xlabel('Y')\nplt.legend(['Io(Y)'])\nfor j in range(len(Y)):\n    Iim(j) = quad(@Iimf,b1,b2,[],[],Y(j))+ quad(@Iimf,b3,b4,[],[],Y(j))\nplt.subplot(2, 1, 2)\n\nplt.plot(Y,Iim)\n\nplt.xlim(-0.01, 0.03)\nplt.ylim(0, 3)\n\nplt.xlabel('Y')\nplt.legend(['Iim(Y)'])\nOut = 4*(a**2)*(besselj(1,((k*a*(Y-YY))/f))/(k*a*((Y-YY)/f)))**2\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W6IMTWOROS\n% Imaging: Two round apertures and a round lens, (R' is X)\n\nfunction W6IMTWOROS;\nglobal k a f;\nY = (-0.1:0.00111:0.6);\nb1 = -0.002;\nb2 = 0.002;\nb3 = 0.012;\nb4 = 0.016;\n% tol = 0.1\n% f/10 = f/2a\nLamda = 0.0005;\nk = (2*pi)/Lamda;\nf = 500;\na = 25;\n\nIo1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0);\nIo2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0);\nIo = Io1 + Io2;\n\nfigure(1);\nsubplot(2,1,1);\nplot(Y,Io);\naxis([-0.01 0.02 0 2]);\nxlabel('Y');\nlegend('Io(Y)');\n\nfor j=1:length(Y)\n    Iim(j) = quad(@Iimf,b1,b2,[],[],Y(j))+ quad(@Iimf,b3,b4,[],[],Y(j));\nend;\n\nsubplot(2,1,2);\nplot(Y,Iim);\naxis([-0.01 0.03 0 3]);\nxlabel('Y');\nlegend('Iim(Y)');\n\nfunction Out=Iimf(YY,Y)\nglobal k a f;\nOut = 4*(a^2).*(besselj(1,((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;\n\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W6IMTWOROS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "lens",
      "aperture"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Aperture",
        "url": "https://en.wikipedia.org/wiki/Aperture"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "W7PUTRAS",
    "title": "W7PUTRAS - W7PUTRAS\r",
    "description": "W7PUTRAS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W7PUTRAS\n# Incoherent case, one dimensional.\n# Object is a pulse y. Lens is cylindrical with spread function (sinx/x)**2.\n# FT of spread Functoin = transfer function.\n\n# The image is FT of ( FT of spread function (transfer function) times FT of object).\n\n\n# Object: Sum of step functions\nk = np.arange(0, 255+1, 1)\nb1 = 100\nb2 = 140\nb = 2\nqq = 14\nLamda = 0.0005\nfn = 10\nyk = (logical(b2-k)>=0)-(logical(b1-k)>=0)\nfig = plt.figure(1)\n\nplt.subplot(3, 2, 1)\n\nplt.plot(k,yk)\n\nplt.xlim(0, 300)\nplt.ylim(0, 1.5)\n\nplt.xlabel('k')\nplt.legend(['yk'])\n\n# FT of the Object y is Omega\n\nOmega = fft(yk)\nN = length(Omega)\nplt.subplot(3, 2, 2)\n\nplt.plot(k,real(Omega)\n/np.sqrt(N))\nplt.xlim(0, 255)\nplt.ylim(-4, 4)\n\nplt.xlabel('k')\nplt.legend(['real(omega)/sqrt(N)'])\n# The spread function is (sinz/z)**2 because of cylindrical lens\n# FT of spread function is transfer function Tau\n# f# = f/2a = fn\nSk = (np.sin((np.pi*k)/(fn*Lamda*255))/((np.pi*k)/(fn*Lamda*255)))**2\nSk(1)=0; # error correction, division by zero at first element\nTau = fft(Sk)\nN = length(Tau)\nplt.subplot(3, 2, 3)\n\nplt.plot(k,real(Tau)\n/np.sqrt(N))\nplt.xlim(0, 300)\nplt.ylim(-0.005, 0.01)\n\nplt.xlabel('k')\nplt.legend(['real(\tau)/sqrt(N)'])\n# Product of FT of object and FT of spread function(transfer function) is Phi\nPhi = (Tau*Omega)\nplt.subplot(3, 2, 4)\n\nplt.plot(k,real(Phi)\n/N)\nplt.xlim(0, 300)\nplt.ylim(-0.1, 0.1)\n\nplt.xlabel('k')\nplt.legend(['real(phi)/N'])\n# Image\n# FT (inverse) of the Product of FT of object and FT of transfer function\nyy= ifft(Phi/np.sqrt(N))\nN2 = length(Phi)\nplt.subplot(3, 1, 3)\n\nplt.plot(k,yy)\n\nplt.xlim(0, 300)\nplt.ylim(0, 0.02)\n\nplt.xlabel('k')\nplt.legend(['yy'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W7PUTRAS\n% Incoherent case, one dimensional.\n% Object is a pulse y. Lens is cylindrical with spread function (sinx/x)^2.\n% FT of spread Functoin = transfer function.\n\n% The image is FT of ( FT of spread function (transfer function) times FT of object).\n\nfunction W7PUTRAS;\n% Object: Sum of step functions\nk = (0:1:255);\nb1 = 100;\nb2 = 140;\nb = 2;\nqq = 14;\nLamda = 0.0005;\nfn = 10;\nyk = (logical(b2-k)>=0)-(logical(b1-k)>=0);\n\nfigure(1);\nsubplot(3,2,1);\nplot(k,yk);\naxis([0 300 0 1.5]);\nxlabel('k');\nlegend('yk');\n\n% FT of the Object y is Omega\n\nOmega = fft(yk);\nN = length(Omega);\n\nsubplot(3,2,2);\nplot(k,real(Omega)/sqrt(N));\naxis([0 255 -4 4]);\nxlabel('k');\nlegend('real(omega)/sqrt(N)');\n% The spread function is (sinz/z)^2 because of cylindrical lens\n% FT of spread function is transfer function Tau\n% f# = f/2a = fn\nSk = (sin((pi*k)/(fn*Lamda*255))./((pi*k)/(fn*Lamda*255))).^2;\nSk(1)=0; % error correction, division by zero at first element\nTau = fft(Sk);\nN = length(Tau);\n\nsubplot(3,2,3);\nplot(k,real(Tau)/sqrt(N));\naxis([0 300 -0.005 0.01]);\nxlabel('k');\nlegend('real(\tau)/sqrt(N)');\n\n% Product of FT of object and FT of spread function(transfer function) is Phi\nPhi = (Tau.*Omega);\n\nsubplot(3,2,4);\nplot(k,real(Phi)/N);\naxis([0 300 -0.1 0.1]);\nxlabel('k');\nlegend('real(phi)/N');\n% Image\n% FT (inverse) of the Product of FT of object and FT of transfer function\nyy= ifft(Phi/sqrt(N));\nN2 = length(Phi);\n\nsubplot(3,1,3);\nplot(k,yy);\naxis([0 300 0 0.02]);\nxlabel('k');\nlegend('yy');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W7PUTRAS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "lens",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "the",
    "title": "the - W8TRASIS\r",
    "description": "W8TRASIS\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W8TRASIS\n# Incoherent case, Fourier transformation of a periodic\n# structure using as transfer function the sinc function\n\n\n\n# Object: Sum of step functions\ni = np.arange(0, 255+1, 1)\nb = 2\nqq = 14\nLamda = 0.0005\nfn = 10\nyi = 0\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)\nfig = plt.figure(1)\n\nplt.subplot(3, 2, 1)\n\nplt.plot(i,yi)\n\nplt.xlim(0, 300)\nplt.ylim(0, 1.5)\n\nplt.xlabel('i')\nplt.legend(['yi'])\n\n# FT of the Object y is c\n\nOmega = fft(yi)\nN = length(Omega)\nplt.subplot(3, 2, 2)\n\nplt.plot(i,real(Omega)\n/np.sqrt(N))\nplt.xlim(0, 255)\nplt.ylim(-4, 4)\n\nplt.xlabel('i')\nplt.legend(['real(omega)/sqrt(N)'])\n# Ft of spread function is transfer function Tau\n# f#=f/2a=fn\n\nSi = 4*(np.sin((np.pi*i)/(fn*Lamda*255))/((np.pi*i)/(fn*Lamda*255)))**2\nSi(1)=0; # error correction, division by zero at first element\nTau = fft(Si)\nN = length(Tau)\nplt.subplot(3, 2, 3)\n\nplt.plot(i,real(Tau)\n/np.sqrt(N))\nplt.xlim(0, 300)\nplt.ylim(-0.01, 0.03)\n\nplt.xlabel('i')\nplt.legend(['real(\tau)/sqrt(N)'])\n# Product of FT of object and FT of spread function(transfer function) is Phi\nPhi = (Tau*Omega)\nplt.subplot(3, 2, 4)\n\nplt.plot(i,real(Phi)\n/N)\nplt.xlim(0, 300)\nplt.ylim(-0.2, 0.2)\n\nplt.xlabel('i')\nplt.legend(['real(phi)/N'])\n# Image\n# FT (inverse) of the Product of FT of object and FT of transfer function\nyy= ifft(Phi/np.sqrt(N))\nN2 = length(Phi)\nplt.subplot(3, 1, 3)\n\nplt.plot(i,yy)\n\nplt.xlim(0, 300)\nplt.ylim(0, 0.04)\n\nplt.xlabel('i')\nplt.legend(['yy'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W8TRASIS\n% Incoherent case, Fourier transformation of a periodic\n% structure using as transfer function the sinc function\n\n\nfunction W8TRASIS;\n% Object: Sum of step functions\ni = (0:1:255);\n\nb = 2;\nqq = 14;\nLamda = 0.0005;\nfn = 10;\nyi = 0;\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    \nend;\n\n\nfigure(1);\nsubplot(3,2,1);\nplot(i,yi);\naxis([0 300 0 1.5]);\nxlabel('i');\nlegend('yi');\n\n% FT of the Object y is c\n\nOmega = fft(yi);\nN = length(Omega);\n\nsubplot(3,2,2);\nplot(i,real(Omega)/sqrt(N));\naxis([0 255 -4 4]);\nxlabel('i');\nlegend('real(omega)/sqrt(N)');\n\n% Ft of spread function is transfer function Tau\n% f#=f/2a=fn\n\nSi = 4*(sin((pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255))).^2;\nSi(1)=0; % error correction, division by zero at first element\nTau = fft(Si);\nN = length(Tau);\n\nsubplot(3,2,3);\nplot(i,real(Tau)/sqrt(N));\naxis([0 300 -0.01 0.03]);\nxlabel('i');\nlegend('real(\tau)/sqrt(N)');\n\n% Product of FT of object and FT of spread function(transfer function) is Phi\nPhi = (Tau.*Omega);\n\nsubplot(3,2,4);\nplot(i,real(Phi)/N);\naxis([0 300 -0.2 0.2]);\nxlabel('i');\nlegend('real(phi)/N');\n\n% Image\n% FT (inverse) of the Product of FT of object and FT of transfer function\nyy= ifft(Phi/sqrt(N));\nN2 = length(Phi);\n\nsubplot(3,1,3);\nplot(i,yy);\naxis([0 300 0 0.04]);\nxlabel('i');\nlegend('yy');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W8TRASIS",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  },
  {
    "id": "W9TRAJ1S",
    "title": "W9TRAJ1S - W9TRAJ1S\r",
    "description": "W9TRAJ1S\r",
    "category": "Optics - Wavefront Analysis",
    "chapter": "10",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# W9TRAJ1S\n# Incoherent case, Fourier transformation of a periodic\n# structure using as transfer function: Bessel\n\n\n\n# Object: Sum of step functions\ni = np.arange(0, 255+1, 1)\nb = 2\nqq = 14\nLamda = 0.0005\nfn = 10\nyi = 0\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)\nfig = plt.figure(1)\n\nplt.subplot(3, 2, 1)\n\nplt.plot(i,yi)\n\nplt.xlim(0, 300)\nplt.ylim(0, 1.5)\n\nplt.xlabel('i')\nplt.legend(['yi'])\n\n# FT of the Object y is c\n\nOmega = fft(yi)\nN = length(Omega)\nplt.subplot(3, 2, 2)\n\nplt.plot(i,real(Omega)\n/np.sqrt(N))\nplt.xlim(0, 255)\nplt.ylim(-2, 4)\n\nplt.xlabel('i')\nplt.legend(['real(omega)/sqrt(N)'])\n# Ft of spread function is transfer function Tau\n# f#=f/2a=fn\n\nSi = 4*(besselj(1,((np.pi*i)/(fn*Lamda*255)))/((np.pi*i)/(fn*Lamda*255)))**2\nSi(1)=0; # error correction, division by zero at first element\nTau = fft(Si)\nN = length(Tau)\nplt.subplot(3, 2, 3)\n\nplt.plot(i,real(Tau)\n/np.sqrt(N))\nplt.xlim(0, 300)\nplt.ylim(-0.01, 0.02)\n\nplt.xlabel('i')\nplt.legend(['real(\tau)/sqrt(N)'])\n# Product of FT of object and FT of spread function(transfer function) is Phi\nPhi = (Tau*Omega)\nplt.subplot(3, 2, 4)\n\nplt.plot(i,real(Phi)\n/N)\nplt.xlim(0, 300)\nplt.ylim(-0.02, 0.06)\n\nplt.xlabel('i')\nplt.legend(['real(phi)/N'])\n# Image\n# FT (inverse) of the Product of FT of object and FT of transfer function\nyy= ifft(Phi/np.sqrt(N))\nN2 = length(Phi)\nplt.subplot(3, 1, 3)\n\nplt.plot(i,yy)\n\nplt.xlim(0, 300)\nplt.ylim(0, 0.01)\n\nplt.xlabel('i')\nplt.legend(['yy'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% W9TRAJ1S\n% Incoherent case, Fourier transformation of a periodic\n% structure using as transfer function: Bessel\n\n\nfunction W9TRAJ1S;\n% Object: Sum of step functions\ni = (0:1:255);\n\nb = 2;\nqq = 14;\nLamda = 0.0005;\nfn = 10;\nyi = 0;\nfor n=0:qq\n    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    \nend;\n\n\nfigure(1);\nsubplot(3,2,1);\nplot(i,yi);\naxis([0 300 0 1.5]);\nxlabel('i');\nlegend('yi');\n\n% FT of the Object y is c\n\nOmega = fft(yi);\nN = length(Omega);\n\nsubplot(3,2,2);\nplot(i,real(Omega)/sqrt(N));\naxis([0 255 -2 4]);\nxlabel('i');\nlegend('real(omega)/sqrt(N)');\n\n% Ft of spread function is transfer function Tau\n% f#=f/2a=fn\n\nSi = 4*(besselj(1,((pi*i)/(fn*Lamda*255)))./((pi*i)/(fn*Lamda*255))).^2;\nSi(1)=0; % error correction, division by zero at first element\nTau = fft(Si);\nN = length(Tau);\n\nsubplot(3,2,3);\nplot(i,real(Tau)/sqrt(N));\naxis([0 300 -0.01 0.02]);\nxlabel('i');\nlegend('real(\tau)/sqrt(N)');\n\n% Product of FT of object and FT of spread function(transfer function) is Phi\nPhi = (Tau.*Omega);\n\nsubplot(3,2,4);\nplot(i,real(Phi)/N);\naxis([0 300 -0.02 0.06]);\nxlabel('i');\nlegend('real(phi)/N');\n\n% Image\n% FT (inverse) of the Product of FT of object and FT of transfer function\nyy= ifft(Phi/sqrt(N));\nN2 = length(Phi);\n\nsubplot(3,1,3);\nplot(i,yy);\naxis([0 300 0 0.01]);\nxlabel('i');\nlegend('yy');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "W9TRAJ1S",
    "tags": [
      "chapter10",
      "wavefront-analysis",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavefront",
        "url": "https://en.wikipedia.org/wiki/Wavefront"
      },
      {
        "title": "Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fourier_transform"
      },
      {
        "title": "Fast Fourier transform",
        "url": "https://en.wikipedia.org/wiki/Fast_Fourier_transform"
      },
      {
        "title": "Wavefront sensor",
        "url": "https://en.wikipedia.org/wiki/Wavefront_sensor"
      }
    ]
  }
];
