// Optics - Interference - Chapter 2
// 21 programs

export const programs = [
  {
    "id": "I10WEDGES",
    "title": "I10WEDGES - I10WEDGES\r",
    "description": "I10WEDGES\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I10WEDGES\n# Fringes of a wedge given by y.\n\n# The distance is given by yy\nAlpha = 0.002\nLamda1 = 0.0005\nLamda2 = 0.0008\nLamda3 = 0.0012\nx = np.arange(0, 1+0.01, 0.01)\ny1 = y(x,Lamda1)\ny2 = y(x,Lamda2)\ny3 = y(x,Lamda3)\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(x,y1,x,y2,x,y3)\n\nplt.xlim(0, 1)\nplt.ylim(0, 1)\n\nplt.xlabel('x')\nplt.legend(['y1(x,lambda1)', 'y2(x,lambda2)', 'y3(x,lambda3)'])\n\n# Height at x\nh = x*np.tan(Alpha)\nplt.subplot(3, 2, 5)\n\nplt.plot(x,h)\n\nplt.xlim(0, 1)\nplt.ylim(0, 0.003)\n\nplt.xlabel('x')\nplt.legend(['h(x)'])\n# Distance between two Maxima depending on ? xx = ?/(2 tan ?)\n\nLamda = np.arange(0.0001, 0.0015+0.0001, 0.0001)\nxx = Lamda/(2*np.tan(Alpha))\nplt.subplot(3, 2, 6)\n\nplt.plot(Lamda,xx)\n\nplt.xlim(0, 0.0015)\nplt.ylim(0, 0.4)\n\nplt.xlabel('lambda')\nplt.legend(['xx(lambda)'])\nOut = np.cos(2*np.pi*x*(np.tan(Alpha)/Lamda)+np.pi/2)**2\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I10WEDGES\n% Fringes of a wedge given by y.\nfunction I10WEDGES;\n% The distance is given by yy;\nglobal Alpha;\nAlpha = 0.002;\nLamda1 = 0.0005;\nLamda2 = 0.0008;\nLamda3 = 0.0012;\nx = (0:0.01:1);\ny1 = y(x,Lamda1);\ny2 = y(x,Lamda2);\ny3 = y(x,Lamda3);\n\nfigure(1);\nsubplot(2,1,1);\nplot(x,y1,x,y2,x,y3);\naxis([0 1 0 1]);\nxlabel('x');\nlegend('y1(x,lambda1)','y2(x,lambda2)','y3(x,lambda3)')\n\n% Height at x\nh = x*tan(Alpha);\n\nsubplot(3,2,5);\nplot(x,h);\naxis([0 1 0 0.003]);\nxlabel('x');\nlegend('h(x)');\n\n% Distance between two Maxima depending on ? xx = ?/(2 tan ?)\n\nLamda = (0.0001:0.0001:0.0015);\nxx = Lamda/(2*tan(Alpha));\n\nsubplot(3,2,6);\nplot(Lamda,xx);\naxis([0 0.0015 0 0.4]);\nxlabel('lambda');\nlegend('xx(lambda)');\n\n\nfunction Out=y(x,Lamda)\nglobal Alpha;\nOut = cos(2*pi*x*(tan(Alpha)/Lamda)+pi/2).^2;\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I10WEDGES",
    "tags": [
      "chapter2",
      "interference",
      "fringe-pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Interference (wave propagation)",
        "url": "https://en.wikipedia.org/wiki/Interference_(wave_propagation)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I11NEWTONS",
    "title": "I11NEWTONS - I11NEWTONS\r",
    "description": "I11NEWTONS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I11NEWTONS\n# Newton's rings\n# Path difference d=(R -SQ(R**2-r**2))\n\n# R is radius of curvature of the lens in mm\n# r is the distance from the center in mm\n\n\nr = np.arange(0, 4+0.01, 0.01)\nR = 2000\nLamda = 0.0005\nd = R-np.sqrt(R**2-r**2)\nINR = np.cos(2*np.pi*(d/Lamda)+np.pi/2)**2\nINT = np.cos(2*np.pi*(d/Lamda))**2\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(r,INT)\n\nplt.xlim(0, 4)\nplt.ylim(0, 1)\n\nplt.xlabel('r')\nplt.legend(['INT(r)'])\nplt.subplot(2, 1, 2)\n\nplt.plot(r,INR)\n\nplt.xlim(0, 4)\nplt.ylim(0, 1)\n\nplt.xlabel('r')\nplt.legend(['INR(r)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I11NEWTONS\n% Newton's rings\n% Path difference d=(R -SQ(R^2-r^2))\n\n% R is radius of curvature of the lens in mm\n% r is the distance from the center in mm\n\nfunction I11NEWTONS;\nr = (0:0.01:4);\nR = 2000;\nLamda = 0.0005;\nd = R-sqrt(R^2-r.^2);\nINR = cos(2*pi*(d/Lamda)+pi/2).^2;\nINT = cos(2*pi*(d/Lamda)).^2;\n\nfigure(1);\nsubplot(2,1,1);\nplot(r,INT);\naxis([0 4 0 1]);\nxlabel('r');\nlegend('INT(r)');\n\nsubplot(2,1,2);\nplot(r,INR);\naxis([0 4 0 1]);\nxlabel('r');\nlegend('INR(r)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I11NEWTONS",
    "tags": [
      "chapter2",
      "interference",
      "lens"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Lens (optics)",
        "url": "https://en.wikipedia.org/wiki/Lens_(optics)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I12MICHDLS",
    "title": "I12MICHDLS - I12MICHDLS\r",
    "description": "I12MICHDLS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I12MICHDLS\n\n# Michelson interferometer\n# Beamsplitter is assumed to be a plane parallel plate\n# Fringe pattern depending on D for wavelength ? = .0005, and depending on wavelength\n# ? for D = .003. The angle ? = 0.\n# All length in mm.\n\n\n# 1. Dependence on D\nTheta = 0\nLamda = 0.0005\nD = np.arange(0.027, 0.0325+0.00001, 0.00001)\nI1 = np.cos((2*np.pi*D*np.cos(Theta))/Lamda)**2\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(D,I1)\n\nplt.xlim(0.026, 0.033)\nplt.ylim(0, 1)\n\nplt.xlabel('D')\nplt.legend(['I1(D)'])\n# 2. Dependence on Lamda\nLamda = np.arange(0.0004, 0.0008+0.000001, 0.000001)\nD = 0.003\nI2 = np.cos((2*np.pi*D*np.cos(Theta))/Lamda)**2\nplt.subplot(2, 1, 2)\n\nplt.plot(Lamda,I2)\n\nplt.xlim(3e-4, 8e-4)\nplt.ylim(0, 1)\n\nplt.xlabel('lambda')\nplt.legend(['I2(lambda)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I12MICHDLS\n\n% Michelson interferometer\n% Beamsplitter is assumed to be a plane parallel plate\n% Fringe pattern depending on D for wavelength ? = .0005, and depending on wavelength\n% ? for D = .003. The angle ? = 0.\n% All length in mm.\n\nfunction I12MICHDLS;\n% 1. Dependence on D\nTheta = 0;\nLamda = 0.0005;\nD = (0.027:0.00001:0.0325);\nI1 = cos((2*pi*D*cos(Theta))/Lamda).^2;\n\nfigure(1);\nsubplot(2,1,1);\nplot(D,I1);\naxis([0.026 0.033 0 1]);\nxlabel('D');\nlegend('I1(D)');\n\n%2. Dependence on Lamda\nLamda = (0.0004:0.000001:0.0008);\nD = 0.003;\nI2 = cos((2*pi*D*cos(Theta))./Lamda).^2;\nsubplot(2,1,2);\nplot(Lamda,I2);\naxis([3e-4 8e-4 0 1]);\nxlabel('lambda');\nlegend('I2(lambda)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I12MICHDLS",
    "tags": [
      "chapter2",
      "interference",
      "wavelength",
      "fringe-pattern",
      "pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Interference (wave propagation)",
        "url": "https://en.wikipedia.org/wiki/Interference_(wave_propagation)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I13MICHANS",
    "title": "I13MICHANS - I13MICHANS\r",
    "description": "I13MICHANS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I13MICHANS\n\n# Michelson interferometer, Dependence on ?.\n# (Beamsplitter is assumed to be a dialectric plate)\n# Fringe pattern depending on angle ? for two fixed wavelength ? and ?? and fixed\n# displacement D.\n# All length in mm.\n\n\nLamda = 0.0005\nD = 0.05\nLamdaLamda = 0.00052\nTheta = np.arange(-0.301, 0.3+0.001, 0.001)\nIM1 = np.cos((2*np.pi*D*np.cos(Theta))/Lamda)**2\nIM2 = np.cos((2*np.pi*D*np.cos(Theta))/LamdaLamda)**2\nfig = plt.figure(1)\n\nplt.plot(Theta,IM1,Theta,IM2)\n\nplt.xlim(-0.4, 0.3)\nplt.ylim(0, 1)\n\nplt.xlabel('\theta')\nplt.legend(['IM1(\theta,D)', 'IM2(\theta,D)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I13MICHANS\n\n% Michelson interferometer, Dependence on ?.\n% (Beamsplitter is assumed to be a dialectric plate)\n% Fringe pattern depending on angle ? for two fixed wavelength ? and ?? and fixed\n% displacement D.\n% All length in mm.\n\nfunction I13MICHANS;\nLamda = 0.0005;\nD = 0.05;\nLamdaLamda = 0.00052;\nTheta = (-0.301:0.001:0.3);\n\nIM1 = cos((2*pi*D*cos(Theta))/Lamda).^2;\nIM2 = cos((2*pi*D*cos(Theta))/LamdaLamda).^2;\n\nfigure(1);\nplot(Theta,IM1,Theta,IM2);\naxis([-0.4 0.3 0 1]);\nxlabel('\theta');\nlegend('IM1(\theta,D)','IM2(\theta,D)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I13MICHANS",
    "tags": [
      "chapter2",
      "interference",
      "wavelength",
      "fringe-pattern",
      "pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Interference (wave propagation)",
        "url": "https://en.wikipedia.org/wiki/Interference_(wave_propagation)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I14PLANIDS",
    "title": "I14PLANIDS - I14PLANIDS\r",
    "description": "I14PLANIDS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I14PLANIDS\n\n# Normal incidence. Plane parallel plate, reflected and transmitted intensity\n# depending on thickness for fixed wavelength.\n# The reflection coefficients are calculated from Fresnels formulas for ? = 0\n# Refractive indices n1, n2 and n3 may all be different and the reflection coefficient\n# for both surfaces are calculated.\n# The calculation of the fringe pattern is done depending on D for fixed ?, .\n\n\n# Delta = 2*np.pi/Lamda   2dn2\nTheta1 = 1\nn1 = 1\nn2 = 1.5\nn3 = 1\n# Delta = 2*np.pi/Lamda   2dn2\nr12 = (n2 - n1)/(n2+n1) # r12 = 0.2\nr23 = (n3 - n2)/(n3+n2) # r23 = -0.2\nLamda = 0.0005\nD = np.arange(0.0002, 0.002+0.00001, 0.00001)\nIT = ((1-r12**2)*(1-r23**2))/(1+(r12*r23)**2-(2*r12*r23)*np.cos(4*np.pi*(D/Lamda)*n2))\nIR = 1 - IT\nfig = plt.figure(1)\n\nplt.subplot(1, 2, 1)\n\nplt.plot(D,IT)\n\nplt.xlim(0, 0.002)\nplt.ylim(0, 1)\n\nplt.xlabel('D')\nplt.legend(['IT(D)'])\nplt.title('Transmitted Pattern')\nplt.subplot(1, 2, 2)\n\nplt.plot(D,IR)\n\nplt.xlim(0, 0.002)\nplt.ylim(0, 1)\n\nplt.xlabel('D')\nplt.legend(['IR(D)'])\nplt.title('Reflected Pattern')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I14PLANIDS\n\n% Normal incidence. Plane parallel plate, reflected and transmitted intensity\n% depending on thickness for fixed wavelength.\n% The reflection coefficients are calculated from Fresnels formulas for ? = 0\n% Refractive indices n1, n2 and n3 may all be different and the reflection coefficient\n% for both surfaces are calculated.\n% The calculation of the fringe pattern is done depending on D for fixed ?, .\n\nfunction I14PLANIDS;\n% Delta = 2*pi/Lamda   2dn2\nTheta1 = 1;\nn1 = 1;\nn2 = 1.5;\nn3 = 1;\n% Delta = 2*pi/Lamda   2dn2\nr12 = (n2 - n1)/(n2+n1) %r12 = 0.2;\nr23 = (n3 - n2)/(n3+n2) %r23 = -0.2\nLamda = 0.0005;\nD = (0.0002:0.00001:0.002);\nIT = ((1-r12^2)*(1-r23^2))./(1+(r12*r23)^2-(2*r12*r23)*cos(4*pi*(D/Lamda)*n2));\nIR = 1 - IT;\n\nfigure(1);\nsubplot(1,2,1);\nplot(D,IT);\naxis([0 0.002 0 1]);\nxlabel('D');\nlegend('IT(D)');\ntitle('Transmitted Pattern');\nsubplot(1,2,2);\nplot(D,IR);\naxis([0 0.002 0 1]);\nxlabel('D');\nlegend('IR(D)');\ntitle('Reflected Pattern');\n\n\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I14PLANIDS",
    "tags": [
      "chapter2",
      "interference",
      "reflection",
      "wavelength",
      "intensity",
      "fringe-pattern",
      "pattern",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Intensity (physics)",
        "url": "https://en.wikipedia.org/wiki/Intensity_(physics)"
      },
      {
        "title": "Interference (wave propagation)",
        "url": "https://en.wikipedia.org/wiki/Interference_(wave_propagation)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I15PLANIDS",
    "title": "I15PLANIDS - I15PLANIDS\r",
    "description": "I15PLANIDS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I15PLANIDS\n# Normal incidence. Plane parallel plate, reflected and transmitted intensity\n# depending on wavelength for fisec thickness.\n# The reflection coefficients are calculated from Fresnels formulas for ? = 0\n# Refractive indices n1, n2 and n3 may all be different and the reflection coefficient\n# for both surfaces are calculated.\n# The calculation of the fringe pattern is done depending on ? for fixed D.\n\n# Delta = 2*np.pi/Lamda   2dn2\nn1 = 1\nn2 = 1.5\nn3 = 1\nr12 = (n2-n1)/(n2+n1)   # r12 = 0.2\nr23 = (n3-n2)/(n3+n2)   # r23 = -0.2\n# Delta = 2*np.pi/Lamda   2dn2\nLamda = np.arange(0.021, 1+0.001, 0.001)\nD = 0.2\nIT = ((1-r12**2)*(1-r23**2))/(1+(r12*r23)**2-(2*r12*r23)*np.cos(4*np.pi*(D/Lamda)*n2))\nIR = 1 - IT\nfig = plt.figure(1)\n\nplt.subplot(1, 2, 1)\n\nplt.plot(Lamda,IT)\n\nplt.xlim(0, 1)\nplt.ylim(0, 1)\n\nplt.xlabel('lambda')\nplt.legend(['IT(lambda)'])\nplt.title('Transmitted Pattern')\nplt.subplot(1, 2, 2)\n\nplt.plot(Lamda,IR)\n\nplt.xlim(0, 1)\nplt.ylim(0, 1)\n\nplt.xlabel('lambda')\nplt.legend(['IR(lambda)'])\nplt.title('Reflected Pattern')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I15PLANIDS\n% Normal incidence. Plane parallel plate, reflected and transmitted intensity\n% depending on wavelength for fisec thickness.\n% The reflection coefficients are calculated from Fresnels formulas for ? = 0\n% Refractive indices n1, n2 and n3 may all be different and the reflection coefficient\n% for both surfaces are calculated.\n% The calculation of the fringe pattern is done depending on ? for fixed D.\nfunction I15PLANIDS;\n% Delta = 2*pi/Lamda   2dn2\nn1 = 1;\nn2 = 1.5;\nn3 = 1;\nr12 = (n2-n1)/(n2+n1)   % r12 = 0.2;\nr23 = (n3-n2)/(n3+n2)   % r23 = -0.2\n% Delta = 2*pi/Lamda   2dn2\nLamda = (0.021:0.001:1);\nD = 0.2;\nIT = ((1-r12^2)*(1-r23^2))./(1+(r12*r23)^2-(2*r12*r23)*cos(4*pi*(D./Lamda)*n2));\nIR = 1 - IT;\n\nfigure(1);\nsubplot(1,2,1);\nplot(Lamda,IT);\naxis([0 1 0 1]);\nxlabel('lambda');\nlegend('IT(lambda)');\ntitle('Transmitted Pattern');\nsubplot(1,2,2);\nplot(Lamda,IR);\naxis([0 1 0 1]);\nxlabel('lambda');\nlegend('IR(lambda)');\ntitle('Reflected Pattern');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I15PLANIDS",
    "tags": [
      "chapter2",
      "interference",
      "reflection",
      "wavelength",
      "intensity",
      "fringe-pattern",
      "pattern",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Intensity (physics)",
        "url": "https://en.wikipedia.org/wiki/Intensity_(physics)"
      },
      {
        "title": "Interference (wave propagation)",
        "url": "https://en.wikipedia.org/wiki/Interference_(wave_propagation)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I16FABRYS",
    "title": "I16FABRYS - I16FABRYS\r",
    "description": "I16FABRYS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I16FABRYS\n# Fabry-Perot Transmission depending on D.\n# ?ormal incidence. Parameters: reflection coefficient, wavelength ?, refractive index.\n# See for global definition.The finess ?g/2 is ?/ ??. All length in mm.\n\n# Delta = 2*np.pi/Lamda   2D (n2) np.cos(Theta2)\nD = np.arange(0, 0.11+0.001, 0.001)\nn2 = 1\nLamda = 0.1\nr1 = 0.7\nr2 = 0.9\nr3 = 0.97\ng1 = (2*r1)/(1-r1**2)\ng2 = (2*r2)/(1-r2**2)\ng3 = (2*r1)/(1-r3**2)\nIT1 = 1/(1+(g1**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))\nIT2 = 1/(1+(g2**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))\nIT3 = 1/(1+(g3**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))\nfig = plt.figure(1)\n\nplt.plot(D,IT1,D,IT2,D,IT3)\n\nplt.xlim(0, 0.12)\nplt.ylim(0, 1)\n\nplt.xlabel('D')\nplt.legend(['IT1(D)', 'IT2(D)', 'IT3(D)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I16FABRYS\n% Fabry-Perot Transmission depending on D.\n% ?ormal incidence. Parameters: reflection coefficient, wavelength ?, refractive index.\n% See for global definition.The finess ?g/2 is ?/ ??. All length in mm.\nfunction I16FABRYS;\n% Delta = 2*pi/Lamda   2D (n2) cos(Theta2)\nD = (0:0.001:0.11);\nn2 = 1;\nLamda = 0.1;\nr1 = 0.7\nr2 = 0.9\nr3 = 0.97;\ng1 = (2*r1)/(1-r1^2);\ng2 = (2*r2)/(1-r2^2);\ng3 = (2*r1)/(1-r3^2);\n\nIT1 = 1./(1+(g1^2)*((sin(2*(pi/Lamda)*D*n2)).^2));\nIT2 = 1./(1+(g2^2)*((sin(2*(pi/Lamda)*D*n2)).^2));\nIT3 = 1./(1+(g3^2)*((sin(2*(pi/Lamda)*D*n2)).^2));\n\nfigure(1);\nplot(D,IT1,D,IT2,D,IT3);\naxis([0 0.12 0 1]);\nxlabel('D');\nlegend('IT1(D)','IT2(D)','IT3(D)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I16FABRYS",
    "tags": [
      "chapter2",
      "interference",
      "reflection",
      "wavelength"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I17FABRYLS",
    "title": "I17FABRYLS - I17FABRYLS\r",
    "description": "I17FABRYLS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I17FABRYLS\n\n# Fabry-Perot Transmission depending on wavelength. \n# ?ormal incidence. Parameters: reflection coefficient, thickness D, refractive index.\n# All length in mm.\n# See for global definition.The finess ?g/2 is ?/ ??.\n\n# Delta = 2*np.pi/Lamda   2D (n2) np.cos(Theta2)\nn2 = 1\nr1 = 0.7\nr2 = 0.9\nr3 = 0.97\nD = 0.0025\nLamda = np.arange(0.0004, 0.0008+0.000001, 0.000001)\ng1 = (2*r1)/(1-r1**2)\ng2 = (2*r2)/(1-r2**2)\ng3 = (2*r1)/(1-r3**2)\nIT1 = 1/(1+(g1**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))\nIT2 = 1/(1+(g2**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))\nIT3 = 1/(1+(g3**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))\nfig = plt.figure(1)\n\nplt.plot(Lamda,IT1,Lamda,IT2,Lamda,IT3)\n\nplt.xlim(3.5e-4, 8e-4)\nplt.ylim(0, 1)\n\nplt.xlabel('lambda')\nplt.legend(['IT1(lambda)', 'IT2(lambda)', 'IT3(lambda)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I17FABRYLS\n\n% Fabry-Perot Transmission depending on wavelength. \n% ?ormal incidence. Parameters: reflection coefficient, thickness D, refractive index.\n% All length in mm.\n% See for global definition.The finess ?g/2 is ?/ ??.\nfunction I17FABRYLS;\n% Delta = 2*pi/Lamda   2D (n2) cos(Theta2)\nn2 = 1;\nr1 = 0.7;\nr2 = 0.9;\nr3 = 0.97;\nD = 0.0025;\nLamda = (0.0004:0.000001:0.0008);\n\n\ng1 = (2*r1)/(1-r1^2);\ng2 = (2*r2)/(1-r2^2);\ng3 = (2*r1)/(1-r3^2);\n\nIT1 = 1./(1+(g1^2)*((sin(2*(pi./Lamda)*D*n2)).^2));\nIT2 = 1./(1+(g2^2)*((sin(2*(pi./Lamda)*D*n2)).^2));\nIT3 = 1./(1+(g3^2)*((sin(2*(pi./Lamda)*D*n2)).^2));\n\nfigure(1);\nplot(Lamda,IT1,Lamda,IT2,Lamda,IT3);\naxis([3.5e-4 8e-4 0 1]);\nxlabel('lambda');\nlegend('IT1(lambda)','IT2(lambda)','IT3(lambda)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I17FABRYLS",
    "tags": [
      "chapter2",
      "interference",
      "reflection",
      "wavelength"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I18FABRYRDS",
    "title": "I18FABRYRDS - I18FABRYRDS\r",
    "description": "I18FABRYRDS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I18FABRYRDS\n\n# Fabry-Perot Ring pattern in Transmission and Reflection depending on\n# angle.\n\n# ?ear normal incidence. Parameters: reflection coefficient, thickness d,\n# refractive index\n# and range of angles in Rad. All length in mm.\n\n\nr = 0.7\nLamda1 = 0.0005\nLamda2 = 0.0006\ng = (2*r)/(1-r**2)\nD = np.arange(0, 0.001+0.00001, 0.00001)\nIT = 1/(1+(g**2)*(np.sin(2*(np.pi/Lamda1)*D)**2))\nIIT = 1/(1+(g**2)*(np.sin(2*(np.pi/Lamda2)*D)**2))\n# Graph for transmission depending on angle for fixed ratio of D/l\nfig = plt.figure(1)\n\nplt.plot(D,IT,D,IIT)\n\nplt.xlim(0, 0.001)\nplt.ylim(0, 1)\n\nplt.xlabel('D')\nplt.legend(['IT(D)', 'IIT(D)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I18FABRYRDS\n\n% Fabry-Perot Ring pattern in Transmission and Reflection depending on\n% angle.\n\n% ?ear normal incidence. Parameters: reflection coefficient, thickness d,\n% refractive index\n% and range of angles in Rad. All length in mm.\n\nfunction I18FABRYRDS;\nr = 0.7;\nLamda1 = 0.0005;\nLamda2 = 0.0006;\ng = (2*r)/(1-r^2);\nD = (0:0.00001:0.001);\nIT = 1./(1+(g^2)*(sin(2*(pi/Lamda1)*D).^2));\nIIT = 1./(1+(g^2)*(sin(2*(pi/Lamda2)*D).^2));\n\n% Graph for transmission depending on angle for fixed ratio of D/l\nfigure(1);\nplot(D,IT,D,IIT);\naxis([0 0.001 0 1]);\nxlabel('D');\nlegend('IT(D)','IIT(D)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I18FABRYRDS",
    "tags": [
      "chapter2",
      "interference",
      "reflection",
      "pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I19FABRYAS",
    "title": "I19FABRYAS - I19FABRYAS\r",
    "description": "I19FABRYAS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I19FABRYAS\n\n# Fabry-Perot Ring pattern in Transmission and Reflection depending on angle.\n\n# ?ear normal incidence. Parameters: reflection coefficient, thickness d, refractive index\n# and range of angles in Rad. All length in mm.\n\n\n# Delta = 2*np.pi/Lamda   2dn2 np.cos(Theta)\nn2 = 1\nr = 0.9\nD = 0.01\nLamda1 = 0.0005\nLamda2=0.0005025\nTheta=np.arange(0, 40+0.01, 0.01)\ng = (2*r)/(1-r**2)\nIT = 1/(1+(g**2)*np.sin(2*(np.pi/Lamda1)*D*n2*np.cos(2*(np.pi/360)*Theta))**2)\nIIT = 1/(1+(g**2)*np.sin(2*(np.pi/Lamda2)*D*n2*np.cos(2*(np.pi/360)*Theta))**2)\n# Graph for transmission depending on angle for fixed ratio of D/Lamda\nfig = plt.figure(1)\n\nplt.plot(Theta,IT,Theta,IIT)\n\nplt.xlim(0, 40)\nplt.ylim(0, 1)\n\nplt.xlabel('\theta')\nplt.legend(['IT(\theta)', 'IIT(\theta)'])\nplt.title('Graph for transmission depending on angle for fixed ratio of D/lambda')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I19FABRYAS\n\n% Fabry-Perot Ring pattern in Transmission and Reflection depending on angle.\n\n% ?ear normal incidence. Parameters: reflection coefficient, thickness d, refractive index\n% and range of angles in Rad. All length in mm.\n\nfunction I19FABRYAS;\n% Delta = 2*pi/Lamda   2dn2 cos(Theta)\nn2 = 1;\nr = 0.9;\nD = 0.01;\nLamda1 = 0.0005;\nLamda2=0.0005025;\nTheta=(0:0.01:40);\n\ng = (2*r)/(1-r^2);\n\nIT = 1./(1+(g^2)*sin(2*(pi/Lamda1)*D*n2*cos(2*(pi/360)*Theta)).^2);\nIIT = 1./(1+(g^2)*sin(2*(pi/Lamda2)*D*n2*cos(2*(pi/360)*Theta)).^2);\n\n% Graph for transmission depending on angle for fixed ratio of D/Lamda\nfigure(1);\nplot(Theta,IT,Theta,IIT);\naxis([0 40 0 1]);\nxlabel('\theta');\nlegend('IT(\theta)','IIT(\theta)');\ntitle('Graph for transmission depending on angle for fixed ratio of D/lambda');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I19FABRYAS",
    "tags": [
      "chapter2",
      "interference",
      "reflection",
      "pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "depending",
    "title": "depending - I1COSWS\r",
    "description": "I1COSWS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I1COSWS\n\n# Cosine function depending on x, t, and a phase constant.\n# Interchanging x/? with t/T in the phase factor 2?(x/? -t/T) has no effect on the\n# cosine function.We see an equivalent dependence of the cos-function on x/?\n# and t/T.\n# Two sets of each three functions are shown, they give the same graphs\n# when changing the dependence on x or t, using the same range, and leaving\n# the other corresponding parameters the same.\n# In the way the cosine functions are written, an additional phase factor may\n# have its origin in the space or time part, we do not know.\n\n\nx1=(0:.1:10); Lamda=1; T=10\nA1=1; t1=1; theta1=0.5\nA2=1; t2=2; theta2=0.2\nA3=1; t3=3; theta3=0.1\nua1=A1*np.cos(2*np.pi*((x1/Lamda)-t1/T+theta1))\nua2=A2*np.cos(2*np.pi*((x1/Lamda)-t2/T+theta2))\nua3=A3*np.cos(2*np.pi*((x1/Lamda)-t3/T+theta3))\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(x1,ua1,x1,ua2,x1,ua3)\n\nplt.xlim(0, 10)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nxlabel('x1','Fontsize',12)\nplt.legend(['ua1(x1)', 'ua2(x1)', 'ua3(x1)'])\nt1=(0:.1:10); LamdaLamda=10; TT=1\nB1=1; x1=1; psi1=1\nB2=1; x2=2; psi2=1\nB3=1; x3=3; psi3=1\nub1=B1*np.cos(2*np.pi*((x1/LamdaLamda)-t1/TT+psi1))\nub2=B2*np.cos(2*np.pi*((x2/LamdaLamda)-t1/TT+psi2))\nub3=B3*np.cos(2*np.pi*((x3/LamdaLamda)-t1/TT+psi3))\nplt.subplot(2, 1, 2)\n\nplt.plot(t1,ub1,t1,ub2,t1,ub3)\n\nplt.xlim(0, 10)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nxlabel('t1','Fontsize',12)\nplt.legend(['ub1(t1)', 'ub2(t1)', 'ub3(t1)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "%I1COSWS\n\n% Cosine function depending on x, t, and a phase constant.\n% Interchanging x/? with t/T in the phase factor 2?(x/? -t/T) has no effect on the\n% cosine function.We see an equivalent dependence of the cos-function on x/?\n% and t/T.\n% Two sets of each three functions are shown, they give the same graphs\n% when changing the dependence on x or t, using the same range, and leaving\n% the other corresponding parameters the same.\n% In the way the cosine functions are written, an additional phase factor may\n% have its origin in the space or time part, we do not know.\n\nfunction I1COSWS;\nx1=(0:.1:10); Lamda=1; T=10;\nA1=1; t1=1; theta1=0.5;\nA2=1; t2=2; theta2=0.2;\nA3=1; t3=3; theta3=0.1;\nua1=A1*cos(2*pi*((x1./Lamda)-t1/T+theta1));\nua2=A2*cos(2*pi*((x1./Lamda)-t2/T+theta2));\nua3=A3*cos(2*pi*((x1./Lamda)-t3/T+theta3));\n\nfigure(1);\nsubplot(2,1,1);\nplot(x1,ua1,x1,ua2,x1,ua3);\naxis([0 10 -1 1]);                  % PLOTS LIMITS                    \nxlabel('x1','Fontsize',12);\nlegend('ua1(x1)','ua2(x1)','ua3(x1)');\n\n\nt1=(0:.1:10); LamdaLamda=10; TT=1;\nB1=1; x1=1; psi1=1;\nB2=1; x2=2; psi2=1;\nB3=1; x3=3; psi3=1;\nub1=B1*cos(2*pi*((x1/LamdaLamda)-t1./TT+psi1));\nub2=B2*cos(2*pi*((x2/LamdaLamda)-t1./TT+psi2));\nub3=B3*cos(2*pi*((x3/LamdaLamda)-t1./TT+psi3));\n\nsubplot(2,1,2);\nplot(t1,ub1,t1,ub2,t1,ub3);\naxis([0 10 -1 1]);                  % PLOTS LIMITS                    \nxlabel('t1','Fontsize',12);\nlegend('ub1(t1)','ub2(t1)','ub3(t1)');\n\n\n\n\n\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I1COSWS",
    "tags": [
      "chapter2",
      "interference",
      "phase"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Phase (waves)",
        "url": "https://en.wikipedia.org/wiki/Phase_(waves)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - I20ARRAYS\r",
    "description": "I20ARRAYS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I20ARRAYS\n# Interference pattern of N sources \n\n# Parameters: Opening a, Wavelength ? , Number of lines N.\n# Graph as function of ?, because of small angle ? = Y/X. Normalization to 1.\n# For comparison of maxima, the numerator is plotted separately.\n\n\nTheta = np.arange(0, 0.5+0.001, 0.001)\nLamda = 0.0005\na = 0.1\naa = 0.2\nN = 5\nNN = 5\nIA1 = (np.sin(np.pi*N*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))/(N*np.sin(np.pi*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))))**2\ny = np.sin(np.pi*N*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))**2\ny1 = np.sin(np.pi*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))**2\nIA2 = (np.sin(np.pi*NN*(aa/Lamda)*np.sin(2*(np.pi/360)*Theta))/(NN*np.sin(np.pi*(aa/Lamda)*np.sin(2*(np.pi/360)*Theta))))**2\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(Theta,IA1,Theta,y,Theta,y1)\n\nplt.xlim(0, 0.5)\nplt.ylim(0, 1)\n\nplt.xlabel('\theta')\nplt.legend(['IA1(\theta)', 'y(\theta)', 'y1(\theta)'])\nplt.subplot(2, 1, 2)\n\nplt.plot(Theta,IA2)\n\nplt.xlim(0, 0.5)\nplt.ylim(0, 1)\n\nplt.xlabel('\theta')\nplt.legend(['IA2(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I20ARRAYS\n% Interference pattern of N sources \n\n% Parameters: Opening a, Wavelength ? , Number of lines N.\n% Graph as function of ?, because of small angle ? = Y/X. Normalization to 1.\n% For comparison of maxima, the numerator is plotted separately.\n\nfunction I20ARRAYS;\nTheta = (0:0.001:0.5);\nLamda = 0.0005;\na = 0.1;\naa = 0.2;\nN = 5;\nNN = 5;\nIA1 = (sin(pi*N*(a/Lamda)*sin(2*(pi/360)*Theta))./(N*sin(pi*(a/Lamda)*sin(2*(pi/360)*Theta)))).^2;\ny = sin(pi*N*(a/Lamda)*sin(2*(pi/360)*Theta)).^2;\ny1 = sin(pi*(a/Lamda)*sin(2*(pi/360)*Theta)).^2;\nIA2 = (sin(pi*NN*(aa/Lamda)*sin(2*(pi/360)*Theta))./(NN*sin(pi*(aa/Lamda)*sin(2*(pi/360)*Theta)))).^2;\n\nfigure(1);\nsubplot(2,1,1);\nplot(Theta,IA1,Theta,y,Theta,y1);\naxis([0 0.5 0 1]);\nxlabel('\theta');\nlegend('IA1(\theta)','y(\theta)','y1(\theta)');\n\nsubplot(2,1,2);\nplot(Theta,IA2);\naxis([0 0.5 0 1]);\nxlabel('\theta');\nlegend('IA2(\theta)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I20ARRAYS",
    "tags": [
      "chapter2",
      "interference",
      "wavelength",
      "pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I21RANDS",
    "title": "I21RANDS - I21RANDS\r",
    "description": "I21RANDS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I21RANDS\n\n# Addition of exponential-functions with random angles\n\n# The real part of the sum of exp i Theta is plotted.\nf = np.arange(1, 100+1, 1)\nN = f\nk = np.arange(1, 1000+1, 1)\n# i = np.sqrt(-1)\nTheta = rand(size(k))*2*np.pi\nfor ind in range(len(f)):\n    y(ind)=0\n    for k=1:N(ind)\n        y(ind) = y(ind) + np.exp(i*(Theta(k)))\n    y(ind) = (1/N(ind))*(y(ind))\nfig = plt.figure(1)\n\nplt.plot(f,real(y)\n)\nplt.xlabel('f')\nplt.legend(['real(y(f))'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I21RANDS\n\n% Addition of exponential-functions with random angles\nfunction I21RANDS;\n% The real part of the sum of exp i Theta is plotted.\nf = (1:1:100);\nN = f;\nk = (1:1:1000);\n% i = sqrt(-1);\n\nTheta = rand(size(k)).*2*pi;\n\nfor ind=1:length(f)\n    y(ind)=0;\n    for k=1:N(ind)\n        y(ind) = y(ind) + exp(i*(Theta(k)));\n    end;\n    y(ind) = (1/N(ind))*(y(ind));\nend;\nfigure(1);\nplot(f,real(y));\nxlabel('f');\nlegend('real(y(f))');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I21RANDS",
    "tags": [
      "chapter2",
      "interference"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I2COSSUPS",
    "title": "I2COSSUPS - I2COSSUPS\r",
    "description": "I2COSSUPS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I2COSSUPS\n\n# Superposition of two cosine waves, one having an optical path differnce ? with respect to the\n# other. The sum is squared to result in the intensity.\n\n# We are looking at a time instance and graphs are shown for six different path differences.\n\n\nX = np.arange(0, 4+0.05, 0.05)\nLamda = 1\nA = 1\nt1 = 0.1\nT = 1\ndelta1 = 0\ndelta2 = 0.1\ndelta3 = 0.2\ndelta4 = 0.3\ndelta5 = 0.4\ndelta6 = 0.5\nu1 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta1)/Lamda)-(t1/T)))\nu2 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta2)/Lamda)-(t1/T)))\nu3 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta3)/Lamda)-(t1/T)))\nu4 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta4)/Lamda)-(t1/T)))\nu5 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta5)/Lamda)-(t1/T)))\nu6 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta6)/Lamda)-(t1/T)))\nfig = plt.figure(1)\n\nplt.plot(X,u1**2,X,u2**2,X,u3**2,X,u4**2,X,u5**2,X,u6**2)\n\nplt.xlim(0, 4)\nplt.ylim(0, 4)\n;                  # PLOTS LIMITS                    \nxlabel('x','Fontsize',12)\ntitle('Figure 1','FontSize',12)\nplt.legend(['(u1(x))^2', '(u2(x))^2', '(u3(x))^2', '(u4(x))^2', '(u5(x))^2', '(u6(x))^2'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I2COSSUPS\n\n% Superposition of two cosine waves, one having an optical path differnce ? with respect to the\n% other. The sum is squared to result in the intensity.\n\n% We are looking at a time instance and graphs are shown for six different path differences.\n\nfunction I2COSSUPS;\n\nX = (0:0.05:4);\nLamda = 1;\nA = 1;\nt1 = 0.1;\nT = 1;\ndelta1 = 0;\ndelta2 = 0.1;\ndelta3 = 0.2;\ndelta4 = 0.3;\ndelta5 = 0.4;\ndelta6 = 0.5;\n\nu1 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta1)/Lamda)-(t1/T)));\nu2 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta2)/Lamda)-(t1/T)));\nu3 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta3)/Lamda)-(t1/T)));\nu4 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta4)/Lamda)-(t1/T)));\nu5 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta5)/Lamda)-(t1/T)));\nu6 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta6)/Lamda)-(t1/T)));\n\nfigure(1);\nplot(X,u1.^2,X,u2.^2,X,u3.^2,X,u4.^2,X,u5.^2,X,u6.^2);\naxis([0 4 0 4]);                  % PLOTS LIMITS                    \nxlabel('x','Fontsize',12);\ntitle('Figure 1','FontSize',12);\nlegend('(u1(x))^2','(u2(x))^2','(u3(x))^2','(u4(x))^2','(u5(x))^2','(u6(x))^2');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I2COSSUPS",
    "tags": [
      "chapter2",
      "interference",
      "intensity"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Intensity (physics)",
        "url": "https://en.wikipedia.org/wiki/Intensity_(physics)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I3COSGRA",
    "title": "I3COSGRA - I3COSGRA\r",
    "description": "I3COSGRA\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\nfrom mpl_toolkits.mplot3d import Axes3D\n\n# I3COSGRA\n\n# Superposition of two cosine waves, one having an optical path differnce ? with respect to the\n# other. The sum is squared to result in the intensity.\n\n# We are looking at the time dependence, the graphs are plots in space x and time t.\n# Period T, path difference ? , wavelength ?.\n\n\n# 1. Graph for optical path difference corresponding to a maximum\nLamda = 1\nA = 1\nN = 15\nT = 1\nDelta1 = 1\ni = (0:1:N)\nj = (0:1:N)\nx = -0.2 + 0.05*i\nt1 = -0.2 + 0.05*j\nfor r in range(len(x)):\n    for c in range(len(t1)):\n        uc(r,c) = ((2*A*np.cos(2*np.pi*(Delta1/(2*Lamda))))*(np.cos(2*np.pi*(x(r)/Lamda-t1(c)/T)-2*np.pi*(Delta1/(2*Lamda)))))**2\nM = uc\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nax = plt.gca()\nif not hasattr(ax, 'plot_surface'):\n    fig = plt.figure()\n    ax = fig.add_subplot(111, projection='3d')\n    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))\n    ax.plot_surface(X, Y, M, cmap='viridis')\n# 2. Graph for optical path difference corresponding to a minimum\nN = 40\ni = (0:1:N)\nj = (0:1:N)\nxx = -0.2+ 0.04*i\nt1 = -0.2 + 0.02*j\nDelta2 = 0.5\nT = 1\nfor r in range(len(xx)):\n    for c in range(len(t1)):\n        ud(r,c) = ((2*A*np.cos(2*np.pi*(Delta2/(2*Lamda))))*(np.cos(2*np.pi*(xx(r)/Lamda-t1(c)/T)-2*np.pi*(Delta2/(2*Lamda)))))**2\nMM = ud\nplt.subplot(2, 1, 2)\n\nax = plt.gca()\nif not hasattr(ax, 'plot_surface'):\n    fig = plt.figure()\n    ax = fig.add_subplot(111, projection='3d')\n    X, Y = np.meshgrid(np.arange(MM.shape[1]), np.arange(MM.shape[0]))\n    ax.plot_surface(X, Y, MM, cmap='viridis')\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I3COSGRA\n\n% Superposition of two cosine waves, one having an optical path differnce ? with respect to the\n% other. The sum is squared to result in the intensity.\n\n% We are looking at the time dependence, the graphs are plots in space x and time t.\n% Period T, path difference ? , wavelength ?.\n\nfunction I3COSGRA;\n% 1. Graph for optical path difference corresponding to a maximum\nLamda = 1;\nA = 1;\nN = 15;\nT = 1;\nDelta1 = 1;\n\ni = (0:1:N);\nj = (0:1:N);\nx = -0.2 + 0.05*i;\nt1 = -0.2 + 0.05*j;\n\nfor r=1:length(x);\n    for c=1:length(t1);\n        uc(r,c) = ((2*A*cos(2*pi*(Delta1/(2*Lamda))))*(cos(2*pi*(x(r)/Lamda-t1(c)/T)-2*pi*(Delta1/(2*Lamda)))))^2;\n    end;\nend;\n\nM = uc;\n\nfigure(1);\nsubplot(2,1,1);\nmesh(M);\n\n% 2. Graph for optical path difference corresponding to a minimum\nN = 40;\ni = (0:1:N);\nj = (0:1:N);\n\nxx = -0.2+ 0.04*i;\nt1 = -0.2 + 0.02*j;\nDelta2 = 0.5;\nT = 1;\n\nfor r=1:length(xx);\n    for c=1:length(t1);\n        ud(r,c) = ((2*A*cos(2*pi*(Delta2/(2*Lamda))))*(cos(2*pi*(xx(r)/Lamda-t1(c)/T)-2*pi*(Delta2/(2*Lamda)))))^2;\n    end;\nend;\nMM = ud;\n\nsubplot(2,1,2);\nmesh(MM);",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I3COSGRA",
    "tags": [
      "chapter2",
      "interference",
      "wavelength",
      "intensity",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Intensity (physics)",
        "url": "https://en.wikipedia.org/wiki/Intensity_(physics)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I4COSINTS",
    "title": "I4COSINTS - I4COSINTS\r",
    "description": "I4COSINTS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I4COSINTS\n# Intensity in real and complex notation\n# Real notation for maxima\n\nx = np.arange(0, 4+0.01, 0.01)\nLamda = 1\nA = 1\nt = 1\nT = 10\nDelta = 0\nu = A*np.cos(2*np.pi*(x/Lamda-t/T)) +A*np.cos(2*np.pi*((x-Delta)/Lamda-t/T))\nfig = plt.figure(1)\n\nplt.subplot(3, 2, 1)\n\nplt.plot(x,u)\n\nplt.xlim(0, 4)\nplt.ylim(-2, 2)\n\nplt.xlabel('x')\nplt.legend(['u(x)'])\nplt.subplot(3, 2, 2)\n\nplt.plot(x,u**2)\n\nplt.xlim(0, 4)\nplt.ylim(0, 4)\n\nplt.xlabel('x')\nplt.legend(['(u(x))^2'])\n# The time average of the intensity is 1/2 of the maximum value 4\nt = 1\n# Complex notation\n# i = np.sqrt(-1)\nz = np.exp(i*2*np.pi*(x/Lamda-t/T))+A*np.exp(i*2*np.pi*((x-Delta)/Lamda-t/T))\n# The real part of z(x) is real(z(x))\nplt.subplot(3, 2, 3)\n\nplt.plot(x,real(z)\n)\nplt.xlim(0, 4)\nplt.ylim(-2, 2)\n\nplt.xlabel('x')\nplt.legend(['real(z(x))'])\n# The real part squared is (real(z(x)))**2\n\nplt.subplot(3, 2, 4)\n\nplt.plot(x,real(z)\n**2)\nplt.xlim(0, 4)\nplt.ylim(0, 4)\n\nplt.xlabel('x')\nplt.legend(['real(z(x))^2'])\n# When taking z time z*, the time dependence is automatically eliminated and we get\n# twice of the average value.\n\nplt.subplot(3, 2, 5)\n\nplt.plot(x,z*conj(z)\n)\nplt.xlim(0, 4)\nplt.ylim(3.995, 4.005)\n\nplt.xlabel('x')\nplt.legend(['z(x)*conj(z(x))'])\n# Complex notation and dependance on the optical path difference DeltaDelta\nx = 1\nDeltaDelta = np.arange(0, 5+0.01, 0.01)\nzz = np.exp(i*2*np.pi*(x/Lamda-t/T))+A*np.exp(i*2*np.pi*((x-DeltaDelta)/Lamda-t/T))\nplt.subplot(3, 2, 6)\n\nplt.plot(DeltaDelta,zz*conj(zz)\n)\nplt.xlim(0, 6)\nplt.ylim(0, 4)\n\nplt.xlabel('deltadelta')\nplt.legend(['zz(deltadelta)*conj(zz(deltadelta))'])\n# We see the \"fringe pattern\"\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I4COSINTS\n% Intensity in real and complex notation\n% Real notation for maxima\nfunction I4COSINTS;\nx = (0:0.01:4);\nLamda = 1;\nA = 1;\nt = 1;\nT = 10;\nDelta = 0;\nu = A*cos(2*pi*(x/Lamda-t/T)) +A*cos(2*pi*((x-Delta)/Lamda-t/T));\n\nfigure(1);\nsubplot(3,2,1);\nplot(x,u);\naxis([0 4 -2 2]);\nxlabel('x');\nlegend('u(x)');\n\nsubplot(3,2,2);\nplot(x,u.^2);\naxis([0 4 0 4]);\nxlabel('x');\nlegend('(u(x))^2');\n\n\n% The time average of the intensity is 1/2 of the maximum value 4\nt = 1;\n\n% Complex notation\n% i = sqrt(-1)\nz = exp(i*2*pi*(x/Lamda-t/T))+A*exp(i*2*pi*((x-Delta)/Lamda-t/T));\n% The real part of z(x) is real(z(x))\nsubplot(3,2,3);\nplot(x,real(z));\naxis([0 4 -2 2]);\nxlabel('x');\nlegend('real(z(x))');\n\n% The real part squared is (real(z(x)))^2\n\nsubplot(3,2,4);\nplot(x,real(z).^2);\naxis([0 4 0 4]);\nxlabel('x');\nlegend('real(z(x))^2');\n\n% When taking z time z*, the time dependence is automatically eliminated and we get\n% twice of the average value.\n\nsubplot(3,2,5);\nplot(x,z.*conj(z));\naxis([0 4 3.995 4.005]);\nxlabel('x');\nlegend('z(x)*conj(z(x))');\n\n% Complex notation and dependance on the optical path difference DeltaDelta\nx = 1;\nDeltaDelta = (0:0.01:5);\nzz = exp(i*2*pi*(x/Lamda-t/T))+A*exp(i*2*pi*((x-DeltaDelta)/Lamda-t/T));\n\nsubplot(3,2,6);\nplot(DeltaDelta,zz.*conj(zz));\naxis([0 6 0 4]);\nxlabel('deltadelta');\nlegend('zz(deltadelta)*conj(zz(deltadelta))');\n% We see the \"fringe pattern\"",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I4COSINTS",
    "tags": [
      "chapter2",
      "interference",
      "intensity",
      "fringe-pattern",
      "pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Intensity (physics)",
        "url": "https://en.wikipedia.org/wiki/Intensity_(physics)"
      },
      {
        "title": "Interference (wave propagation)",
        "url": "https://en.wikipedia.org/wiki/Interference_(wave_propagation)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I5YOUNGS",
    "title": "I5YOUNGS - I5YOUNGS\r",
    "description": "I5YOUNGS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I5YOUNGS\n# Young's Experiment\n\n\nCon = 1\nLamda = 0.0005\na = 0.4\nX = 4000\nY = np.arange(-10, 10+0.1, 0.1); # All length in mm\nI = Con*(np.cos(np.pi*((Y*a)/(Lamda*X)))**2)\nfig = plt.figure(1)\n\nplt.plot(Y,I)\n\nplt.xlim(-10, 10)\nplt.ylim(0, 1)\n\nplt.xlabel('Y')\nplt.legend(['I(Y)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I5YOUNGS\n% Young's Experiment\n\nfunction I5YOUNGS;\n\nCon = 1;\nLamda = 0.0005;\na = 0.4;\nX = 4000;\nY = (-10:0.1:10); % All length in mm\nI = Con*(cos(pi*((Y*a)/(Lamda*X))).^2);\n\nfigure(1);\nplot(Y,I);\naxis([-10 10 0 1]);\nxlabel('Y');\nlegend('I(Y)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I5YOUNGS",
    "tags": [
      "chapter2",
      "interference"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I6LOYDS",
    "title": "I6LOYDS - I6LOYDS\r",
    "description": "I6LOYDS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I6LOYDS\n# Lloyd's mirror experiment\n\n\nCon = 1\n# All length in mm\na = 0.4\nX = 4000\nLamda = 0.0005\nY = np.arange(-10, 10+0.1, 0.1)\nI = Con*(np.cos(np.pi*((Y*a)/(Lamda*X)+np.pi/2))**2)\nfig = plt.figure(1)\n\nplt.plot(Y,I)\n\nplt.xlim(-10, 10)\nplt.ylim(0, 1)\n\nplt.xlabel('Y')\nplt.legend(['I(Y)'])\n# We see that at Y=0 Young's experiment has a maximum, Lloyd's a minimum.\n# For Young and Lloyd: The position of maxima are changed by changing d and ?, X is\n# considered fixed.\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I6LOYDS\n% Lloyd's mirror experiment\n\nfunction I6LOYDS;\nCon = 1;\n% All length in mm\na = 0.4;\nX = 4000;\nLamda = 0.0005;\nY = (-10:0.1:10);\n\nI = Con*(cos(pi*((Y*a)/(Lamda*X)+pi/2)).^2);\n\nfigure(1);\nplot(Y,I);\naxis([-10 10 0 1]);\nxlabel('Y');\nlegend('I(Y)');\n\n% We see that at Y=0 Young's experiment has a maximum, Lloyd's a minimum.\n% For Young and Lloyd: The position of maxima are changed by changing d and ?, X is\n% considered fixed.",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I6LOYDS",
    "tags": [
      "chapter2",
      "interference",
      "mirror"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Mirror",
        "url": "https://en.wikipedia.org/wiki/Mirror"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I7FREMIRS",
    "title": "I7FREMIRS - I7FREMIRS\r",
    "description": "I7FREMIRS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I7FREMIRS\n# Fresnel's mirror\n\n# 1. Fresnel's Mirror\n# Y, c, f, b, and ? in mm, ? in Radc\n# is about b for calculation of X = c + f\n# All length in mm\nCon = 1\nb = 1000\nf = 5000\nBeta = 0.0002\nLamda = 0.0005\nc = b * np.cos(Beta)\nY = np.arange(-10, 10+0.1, 0.1)\nI = Con*(np.cos(np.pi*((Y*2*(b/(c+f))*np.sin(Beta))/Lamda))**2)\nfig = plt.figure(1)\n\nplt.plot(Y,I)\n\nplt.xlim(-10, 10)\nplt.ylim(0, 1)\n\nplt.xlabel('Y')\nplt.legend(['I(Y)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I7FREMIRS\n% Fresnel's mirror\nfunction I7FREMIRS;\n% 1. Fresnel's Mirror\n% Y, c, f, b, and ? in mm, ? in Radc\n% is about b for calculation of X = c + f\n% All length in mm\nCon = 1;\nb = 1000;\nf = 5000;\nBeta = 0.0002;\nLamda = 0.0005;\nc = b * cos(Beta);\nY = (-10:0.1:10);\nI = Con*(cos(pi*((Y*2*(b/(c+f))*sin(Beta))/Lamda)).^2);\n\nfigure(1);\nplot(Y,I);\naxis([-10 10 0 1]);\nxlabel('Y');\nlegend('I(Y)');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I7FREMIRS",
    "tags": [
      "chapter2",
      "interference",
      "mirror"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Mirror",
        "url": "https://en.wikipedia.org/wiki/Mirror"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I8FRYOLOS",
    "title": "I8FRYOLOS - I8FRYOLOS\r",
    "description": "I8FRYOLOS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I8FRYOLOS\n# Fresnel's mirror, Young's double slit, and Lloyd's mirror,\n\n# 1. Fresnel's Mirror  \n# Y, c, f, b, and ? in mm, ? in Radc\n# is about b for calculation of X = c + f\n# All length in mm\nCon = 1\nb = 1000\nf = 5000\nBeta = 0.0002\nLamda = 0.0005\nc = b*np.cos(Beta)\nY = np.arange(-10, 10+0.1, 0.1)\nIF = Con*(np.cos(np.pi*((Y*2*(b/(c+f))*np.sin(Beta))/Lamda))**2)\n# 2. Young's Experiment\na = 0.4\nX = 4000\nIY = Con*(np.cos(np.pi*((Y*a)/(Lamda*X)))**2)\n# 3. Lloyd's Mirror (same as Yound, phase term is added)\nIL = Con*(np.cos(np.pi*((Y*a)/(Lamda*X))+np.pi/2)**2)\nfig = plt.figure(1)\n\nplt.plot(Y,IF,Y,IY,Y,IL)\n\nplt.xlim(-10, 10)\nplt.ylim(0, 1)\n\nplt.xlabel('Y')\nplt.legend(['IF(Y)', 'IY(Y)', 'IL(Y)'])\n# We see that at Y=0 Young has a maximum, Lloyd a minimum\n# For Young and Lloyd: The position of maxima are changed by changing d and ?, X is\n# considered fixed.\n\n# For Fresnel, a,b are fixed, position of fringes changes with ? and ?.\n\n\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I8FRYOLOS\n% Fresnel's mirror, Young's double slit, and Lloyd's mirror,\nfunction I8FRYOLOS;\n% 1. Fresnel's Mirror  \n% Y, c, f, b, and ? in mm, ? in Radc\n% is about b for calculation of X = c + f\n% All length in mm\nCon = 1;\nb = 1000;\nf = 5000;\nBeta = 0.0002;\nLamda = 0.0005;\nc = b*cos(Beta);\nY = (-10:0.1:10);\n\nIF = Con*(cos(pi*((Y*2*(b/(c+f))*sin(Beta))/Lamda)).^2);\n\n% 2. Young's Experiment\na = 0.4;\nX = 4000;\nIY = Con*(cos(pi*((Y*a)/(Lamda*X))).^2);\n\n% 3. Lloyd's Mirror (same as Yound, phase term is added)\nIL = Con*(cos(pi*((Y*a)/(Lamda*X))+pi/2).^2);\n\nfigure(1);\nplot(Y,IF,Y,IY,Y,IL);\naxis([-10 10 0 1]);\nxlabel('Y');\nlegend('IF(Y)','IY(Y)','IL(Y)');\n\n\n% We see that at Y=0 Young has a maximum, Lloyd a minimum\n% For Young and Lloyd: The position of maxima are changed by changing d and ?, X is\n% considered fixed.\n\n% For Fresnel, a,b are fixed, position of fringes changes with ? and ?.\n\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I8FRYOLOS",
    "tags": [
      "chapter2",
      "interference",
      "mirror",
      "slit",
      "phase",
      "fringe-pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Mirror",
        "url": "https://en.wikipedia.org/wiki/Mirror"
      },
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Phase (waves)",
        "url": "https://en.wikipedia.org/wiki/Phase_(waves)"
      },
      {
        "title": "Interference (wave propagation)",
        "url": "https://en.wikipedia.org/wiki/Interference_(wave_propagation)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  },
  {
    "id": "I9PLANS",
    "title": "I9PLANS - I9PLANS\r",
    "description": "I9PLANS\r",
    "category": "Optics - Interference",
    "chapter": "2",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# I9PLANS\n\n# Fringes of plane parallel plate produced by two waves\n\n\n# 1.For normal incidence depending on D\nLamda = 0.0005\nn2 = 1.5\nD = np.arange(-0.00051, 0.005+0.00001, 0.00001)\nI1 = np.cos((2*np.pi*D*n2)/Lamda + np.pi/2)**2\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(D,I1)\n\nplt.xlim(-0.001, 0.005)\nplt.ylim(0, 1)\n\nplt.xlabel('D')\nplt.legend(['I1(D)'])\n# 2. For normal incidence depending on Lamda\n\nLamdaLamda = np.arange(0.05, 0.5+0.001, 0.001)\nDD = 0.05\nI2 = np.cos((2*np.pi*DD*(n2))/LamdaLamda + np.pi/2)**2\nplt.subplot(2, 1, 2)\n\nplt.plot(LamdaLamda,I2)\n\nplt.xlim(0, 0.5)\nplt.ylim(0, 1)\n\nplt.xlabel('lambdalambda')\nplt.legend(['I2(lambdalambda)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% I9PLANS\n\n% Fringes of plane parallel plate produced by two waves\n\nfunction I9PLANS;\n% 1.For normal incidence depending on D\nLamda = 0.0005;\nn2 = 1.5;\nD = (-0.00051:0.00001:0.005);\nI1 = cos((2*pi*D*n2)/Lamda + pi/2).^2;\n\nfigure(1);\nsubplot(2,1,1);\nplot(D,I1);\naxis([-0.001 0.005 0 1]);\nxlabel('D');\nlegend('I1(D)');\n\n% 2. For normal incidence depending on Lamda\n\nLamdaLamda = (0.05:0.001:0.5);\nDD = 0.05;\nI2 = cos((2*pi*DD*(n2))./LamdaLamda + pi/2).^2;\n\nsubplot(2,1,2);\nplot(LamdaLamda,I2);\naxis([0 0.5 0 1]);\nxlabel('lambdalambda');\nlegend('I2(lambdalambda)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "I9PLANS",
    "tags": [
      "chapter2",
      "interference",
      "fringe-pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
      },
      {
        "title": "Interference (wave propagation)",
        "url": "https://en.wikipedia.org/wiki/Interference_(wave_propagation)"
      },
      {
        "title": "Young's double-slit experiment",
        "url": "https://en.wikipedia.org/wiki/Double-slit_experiment"
      }
    ]
  }
];
