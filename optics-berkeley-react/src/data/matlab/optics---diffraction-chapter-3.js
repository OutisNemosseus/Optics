// Optics - Diffraction - Chapter 3
// 23 programs

export const programs = [
  {
    "id": "D10FAGRDSLS",
    "title": "D10FAGRDSLS - D10FAGRDSLS\r",
    "description": "D10FAGRDSLS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D10FAGRDSLS\n# Diffraction on an amplitude grating at normal incidence.\n# Width of openings d, center to center distance of strips a, wavelength ????, distance\n# from grating to screen X and coordinate on Screen Y.\n# All distances and wavelength in mm, number of lines N.\n# All parameters are globally defined above the graph.\n# D(A) is the diffraction factor\n# I(A) is the interference factor, normalized to 1.\n# P(A) is the product of interference and diffraction factor.\n\n\nY = np.arange(-800, 800+0.1, 0.1)\nX = 4000\nd = 0.02\nLamda = 0.0005\na = 0.2\nN = 2\nD = (np.sin(np.pi*(d/Lamda)*(Y/X))/(np.pi*(d/Lamda)*(Y/X)))**2\nI = (np.sin(np.pi*(a/Lamda)*(Y/X)*N)/(N*np.sin(np.pi*(a/Lamda)*(Y/X))))**2\nP = D*I\nfig = plt.figure(1)\n\nplt.plot(Y,D,Y,P)\n\nplt.xlim(-600, 600)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('Y')\nplt.legend(['D(Y)', 'P(Y)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D10FAGRDSLS\n% Diffraction on an amplitude grating at normal incidence.\n% Width of openings d, center to center distance of strips a, wavelength ????, distance\n% from grating to screen X and coordinate on Screen Y.\n% All distances and wavelength in mm, number of lines N.\n% All parameters are globally defined above the graph.\n% D(A) is the diffraction factor\n% I(A) is the interference factor, normalized to 1.\n% P(A) is the product of interference and diffraction factor.\n\nfunction D10FAGRDSLS;\n\nY = (-800:0.1:800);\nX = 4000;\nd = 0.02;\nLamda = 0.0005;\na = 0.2;\nN = 2;\nD = (sin(pi*(d/Lamda)*(Y/X))./(pi*(d/Lamda)*(Y/X))).^2;\nI = (sin(pi*(a/Lamda)*(Y/X)*N)./(N*sin(pi*(a/Lamda)*(Y/X)))).^2;\nP = D.*I;\n\nfigure(1);\nplot(Y,D,Y,P);\naxis([-600 600 0 1]);                  % PLOTS LIMITS                    \nxlabel('Y');\nlegend('D(Y)','P(Y)');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D10FAGRDSLS",
    "tags": [
      "chapter3",
      "diffraction",
      "grating",
      "interference",
      "wavelength",
      "amplitude"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Diffraction grating",
        "url": "https://en.wikipedia.org/wiki/Diffraction_grating"
      },
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
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
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D11FAGRANGS",
    "title": "D11FAGRANGS - D11FAGRANGS\r",
    "description": "D11FAGRANGS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D11FAGRANGS\n# Diffraction on an amplitude grating. Non normal incidence\n# with angle ? with respect to the normal.\n# Width of grating openings d, center to center distance of strips a,\n# wavelength ?, distance from grating to screen X and coordinate on Screen Y.\n# All distances and wavelength in mm, number of lines N .\n# All parameters are globally defined above the graph.\n# D(A) is the diffraction factor\n# I(A) is the interference factor, normalized to 1. The numerator is plotted\n# separately to show where the main maxima are located (0/0).\n# P(A) is the product of interference and diffraction factor.\n\n# The angle y shifts the zeroth order from 0 for y = 0 to .2 for y = -.2\n\n\nTheta = np.arange(-0.5001, 0.5+0.0002, 0.0002)\nd = 0.001\nLamda = 0.0005\na = 0.002\nN = 6\nPsi = -0.2\nD = (np.sin(np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi)))/(np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi))))**2\nI = (np.sin(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi))*N)/(N*np.sin(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi)))))**2\nP = D*I\nfig = plt.figure(1)\n\nplt.plot(Theta,I,Theta,D,Theta,P)\n\nplt.xlim(-0.6, 0.6)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['I(\theta)', 'D(\theta)', 'P(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D11FAGRANGS\n% Diffraction on an amplitude grating. Non normal incidence\n% with angle ? with respect to the normal.\n% Width of grating openings d, center to center distance of strips a,\n% wavelength ?, distance from grating to screen X and coordinate on Screen Y.\n% All distances and wavelength in mm, number of lines N .\n% All parameters are globally defined above the graph.\n% D(A) is the diffraction factor\n% I(A) is the interference factor, normalized to 1. The numerator is plotted\n% separately to show where the main maxima are located (0/0).\n% P(A) is the product of interference and diffraction factor.\n\n% The angle y shifts the zeroth order from 0 for y = 0 to .2 for y = -.2\n\nfunction D11FAGRANGS;\n\nTheta = (-0.5001:0.0002:0.5);\nd = 0.001;\nLamda = 0.0005;\na = 0.002;\nN = 6;\nPsi = -0.2;\n\nD = (sin(pi*(d/Lamda)*(sin(Theta)+sin(Psi)))./(pi*(d/Lamda)*(sin(Theta)+sin(Psi)))).^2;\nI = (sin(pi*(a/Lamda)*(sin(Theta)+sin(Psi))*N)./(N*sin(pi*(a/Lamda)*(sin(Theta)+sin(Psi))))).^2;\nP = D.*I;\n\n\nfigure(1);\nplot(Theta,I,Theta,D,Theta,P);\naxis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('I(\theta)','D(\theta)','P(\theta)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D11FAGRANGS",
    "tags": [
      "chapter3",
      "diffraction",
      "grating",
      "interference",
      "wavelength",
      "amplitude"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Diffraction grating",
        "url": "https://en.wikipedia.org/wiki/Diffraction_grating"
      },
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
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
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D12FAELGRS",
    "title": "D12FAELGRS - D12FAELGRS\r",
    "description": "D12FAELGRS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D12FAELGRS\n\n# Diffraction on an echelette grating.\n# The graphs for three different values of ?.\n\n# D(?) is the diffraction factor, I(?) the interfference factor, and P(?) the product.\n# The angle in radians of the echelle is ?.Diffraction angle ? in radians,\n# wavelength ?, width of openings d, and separation of openings a in mm.\n# N is the number of lines.\n# All parameters are defined globally above the graph.\n\n\nTheta = np.arange(-1.301, 1.3+0.002, 0.002)\nEpsilon1 = -0.25\nEpsilon2 = 0.25\nEpsilon3 = -0.52\nd = 37\nLamda = 10\na = 40\nN = 20\nD1 = (np.sin(np.pi*(d/Lamda)*np.sin(Theta + Epsilon1))/(np.pi*(d/Lamda)*np.sin(Theta+Epsilon1)))**2\nD2 = (np.sin(np.pi*(d/Lamda)*np.sin(Theta + Epsilon2))/(np.pi*(d/Lamda)*np.sin(Theta+Epsilon2)))**2\nD3 = (np.sin(np.pi*(d/Lamda)*np.sin(Theta + Epsilon3))/(np.pi*(d/Lamda)*np.sin(Theta+Epsilon3)))**2\nI = (np.sin(np.pi*a*np.sin(Theta)*N/Lamda)/(N*np.sin(np.pi*a*np.sin(Theta)/Lamda)))**2\nP1 = D1*I\nP2 = D2*I\nP3 = D3*I\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(Theta,D1,Theta,I,Theta,P1)\n\nplt.xlim(-1.5, 1.5)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['D1(\theta)', 'I(\theta)', 'P1(\theta)'])\nplt.subplot(3, 1, 2)\n\nplt.plot(Theta,D2,Theta,I,Theta,P2)\n\nplt.xlim(-1.5, 1.5)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['D2(\theta)', 'I(\theta)', 'P2(\theta)'])\nplt.subplot(3, 1, 3)\n\nplt.plot(Theta,D3,Theta,I,Theta,P3)\n\nplt.xlim(-1.5, 1.5)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['D3(\theta)', 'I(\theta)', 'P3(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D12FAELGRS\n\n% Diffraction on an echelette grating.\n% The graphs for three different values of ?.\n\n% D(?) is the diffraction factor, I(?) the interfference factor, and P(?) the product.\n% The angle in radians of the echelle is ?.Diffraction angle ? in radians,\n% wavelength ?, width of openings d, and separation of openings a in mm.\n% N is the number of lines.\n% All parameters are defined globally above the graph.\n\nfunction D12FAELGRS;\n\nTheta = (-1.301:0.002:1.3);\nEpsilon1 = -0.25;\nEpsilon2 = 0.25;\nEpsilon3 = -0.52;\n\nd = 37;\nLamda = 10;\na = 40;\nN = 20;\n\nD1 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon1))./(pi*(d/Lamda)*sin(Theta+Epsilon1))).^2;\nD2 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon2))./(pi*(d/Lamda)*sin(Theta+Epsilon2))).^2;\nD3 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon3))./(pi*(d/Lamda)*sin(Theta+Epsilon3))).^2;\n\nI = (sin(pi*a*sin(Theta)*N/Lamda)./(N*sin(pi*a*sin(Theta)/Lamda))).^2;\n\nP1 = D1.*I;\nP2 = D2.*I;\nP3 = D3.*I;\n\nfigure(1);\nsubplot(3,1,1);\nplot(Theta,D1,Theta,I,Theta,P1);\naxis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('D1(\theta)','I(\theta)','P1(\theta)');\n\n\nsubplot(3,1,2);\nplot(Theta,D2,Theta,I,Theta,P2);\naxis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('D2(\theta)','I(\theta)','P2(\theta)');\n\n\nsubplot(3,1,3);\nplot(Theta,D3,Theta,I,Theta,P3);\naxis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('D3(\theta)','I(\theta)','P3(\theta)');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D12FAELGRS",
    "tags": [
      "chapter3",
      "diffraction",
      "grating",
      "wavelength"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Diffraction grating",
        "url": "https://en.wikipedia.org/wiki/Diffraction_grating"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D13FAGRRES",
    "title": "D13FAGRRES - D13FAGRRES\r",
    "description": "D13FAGRRES\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D13FAGRRES\n# Two diffraction pattern of a grating to study resolution.\n\n# Diffraction on an amplitude grating with width of openings d, center to center\n# distance of strips a, wavelength ?, distance from grating to screen X and\n# coordinate on screen Y.\n# All distances and wavelength in mm, number of lines N. Normal incidence.\n# All parameters are globally defined above the graph.\n# P(A) is the product of interference and diffraction factor.\n# The resolution is given as ?/?? = N and introduced in the formulas of the\n# second grating.\n\n\nTheta = np.arange(-0.7001, 0.7+0.0002, 0.0002)\nd = 0.0001\nLamda = 0.0005\nLamdaLamda = 0.0006\na = 0.002\nN = 6\nD = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2\nDD = (np.sin(np.pi*(d/LamdaLamda)*np.sin(Theta))/(np.pi*(d/LamdaLamda)*np.sin(Theta)))**2\nI= (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2\nII= (np.sin(np.pi*(a/LamdaLamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/LamdaLamda)*np.sin(Theta))))**2\nP = D*I\nPP = DD*II\nfig = plt.figure(1)\n\nplt.plot(Theta,P,Theta,PP)\n\nplt.xlim(-0.8, 0.8)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['P(\theta)', 'PP(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D13FAGRRES\n% Two diffraction pattern of a grating to study resolution.\n\n% Diffraction on an amplitude grating with width of openings d, center to center\n% distance of strips a, wavelength ?, distance from grating to screen X and\n% coordinate on screen Y.\n% All distances and wavelength in mm, number of lines N. Normal incidence.\n% All parameters are globally defined above the graph.\n% P(A) is the product of interference and diffraction factor.\n% The resolution is given as ?/?? = N and introduced in the formulas of the\n% second grating.\n\nfunction D13FAGRRES;\n\nTheta = (-0.7001:0.0002:0.7);\nd = 0.0001;\nLamda = 0.0005;\nLamdaLamda = 0.0006;\na = 0.002;\nN = 6;\n\n\nD = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;\nDD = (sin(pi*(d/LamdaLamda)*sin(Theta))./(pi*(d/LamdaLamda)*sin(Theta))).^2;\n\nI= (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;\nII= (sin(pi*(a/LamdaLamda)*sin(Theta)*N)./(N*sin(pi*(a/LamdaLamda)*sin(Theta)))).^2;\n\nP = D.*I;\nPP = DD.*II;\n\nfigure(1);\nplot(Theta,P,Theta,PP);\naxis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('P(\theta)','PP(\theta)');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D13FAGRRES",
    "tags": [
      "chapter3",
      "diffraction",
      "grating",
      "interference",
      "wavelength",
      "amplitude",
      "pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Diffraction grating",
        "url": "https://en.wikipedia.org/wiki/Diffraction_grating"
      },
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
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
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D14FAGRRES3DS",
    "title": "D14FAGRRES3DS - D14FAGRRES3DS\r",
    "description": "D14FAGRRES3DS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\nfrom mpl_toolkits.mplot3d import Axes3D\n\n# D14FAGRRES3DS\n# Determination of the wavelength difference for two peaks,\n# resolved according to the Rayleigh criterion\n\n# 1. Determination of Rayleigh distantance.\n# We call the distance between the maxima b. Radius of apertures a, distance\n# between the apertures d, coordinate on the observation screen R,\n# wavelength ?, and distance from aperture to screen X.\n\n\na = 0.05; X = 4000; R=np.arange(0, 50+0.1, 0.1); b = 24.5;%?\nLamda = 0.0005\ng1=(besselj(1,(2*np.pi*a*R/(X*Lamda)))/(2*np.pi*a*R/(X*Lamda)))**2\ngg1=(besselj(1,(2*np.pi*a*(R-b)/(X*Lamda)))/(2*np.pi*a*(R-b)/(X*Lamda)))**2\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(R,g1,R,gg1)\n\nplt.xlim(0, 50)\nplt.ylim(0, 0.3)\n;                  # PLOTS LIMITS                    \nplt.xlabel('R')\nplt.legend(['g1(R)', 'gg1(R)'])\n# 2. 3D Graph of pattern of two round apertures at distance b.\n\n\nX = 4000\nN = 40\nI = 0:N\nJ = 0:N\nnx = length(I)\nny = length(J)\ng2 = zeros(nx,ny)\ngg2 = zeros(nx,ny)\nM = zeros(nx,ny)\nfor r=1:nx\n        for c=1:ny\n            Xi = -30 + 2.0001*r\n            Yi = -30 + 2.0001*c\n            RR = np.sqrt(Xi**2+Yi**2)\n            g2(r,c) = (besselj(1,(2*np.pi*a*RR/(X*Lamda)))/(2*np.pi*a*RR/(X*Lamda)))**2\n            RR = np.sqrt(Xi**2+(Yi-b)**2)\n            gg2(r,c) = (besselj(1,(2*np.pi*a*RR/(X*Lamda)))/(2*np.pi*a*RR/(X*Lamda)))**2\nM = g2 + gg2\nplt.subplot(2, 1, 2)\n\nax = plt.gca()\nif not hasattr(ax, 'plot_surface'):\n    fig = plt.figure()\n    ax = fig.add_subplot(111, projection='3d')\n    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))\n    ax.plot_surface(X, Y, M, cmap='viridis')\n# PLOTS LIMITS                    \naxis([0 40 0 40 0 0.3])\n# 3. Calculation of wavelength difference corresponding to b\n# The diffraction angle is calculated from b/X = ??\n# The grating is made of round apertures of diameter a and spaced at\n# distance d.\n# From the grating formula we have for the wavelength difference\n# ??=d?? or ?? = (d/X)b.\n# # For d := .1\n# ?? := d*b/X\n# ?? = 6.125 * 10 ** (-4)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D14FAGRRES3DS\n% Determination of the wavelength difference for two peaks,\n% resolved according to the Rayleigh criterion\n\n% 1. Determination of Rayleigh distantance.\n% We call the distance between the maxima b. Radius of apertures a, distance\n% between the apertures d, coordinate on the observation screen R,\n% wavelength ?, and distance from aperture to screen X.\n\nfunction D14FAGRRES3DS;\n\na = 0.05; X = 4000; R=(0:0.1:50); b = 24.5;%?\nLamda = 0.0005;\ng1=(besselj(1,(2*pi*a*R/(X*Lamda)))./(2*pi*a*R/(X*Lamda))).^2;\ngg1=(besselj(1,(2*pi*a*(R-b)/(X*Lamda)))./(2*pi*a*(R-b)/(X*Lamda))).^2;\n\nfigure(1);\nsubplot(2,1,1);\nplot(R,g1,R,gg1);\naxis([0 50 0 0.3]);                  % PLOTS LIMITS                    \nxlabel('R');\nlegend('g1(R)','gg1(R)');\n\n\n% 2. 3D Graph of pattern of two round apertures at distance b.\n\n\nX = 4000;\nN = 40;\n\nI = 0:N;\nJ = 0:N;\n\nnx = length(I);\nny = length(J);\ng2 = zeros(nx,ny);\ngg2 = zeros(nx,ny);\nM = zeros(nx,ny);\nfor r=1:nx;\n        for c=1:ny;\n            Xi = -30 + 2.0001*r; \n            Yi = -30 + 2.0001*c;\n            RR = sqrt(Xi^2+Yi^2);               \n            g2(r,c) = (besselj(1,(2*pi*a*RR/(X*Lamda)))/(2*pi*a*RR/(X*Lamda)))^2;\n            RR = sqrt(Xi^2+(Yi-b)^2);\n            gg2(r,c) = (besselj(1,(2*pi*a*RR/(X*Lamda)))/(2*pi*a*RR/(X*Lamda)))^2;\n        end;\nend;\nM = g2 + gg2;\nsubplot(2,1,2);\nmesh(M);\n                 % PLOTS LIMITS                    \naxis([0 40 0 40 0 0.3]);\n\n\n% 3. Calculation of wavelength difference corresponding to b\n% The diffraction angle is calculated from b/X = ??\n% The grating is made of round apertures of diameter a and spaced at\n% distance d.\n% From the grating formula we have for the wavelength difference\n% ??=d?? or ?? = (d/X)b.\n% \n% For d := .1\n%            ?? := d*b/X\n%                       ?? = 6.125 * 10 ^ (-4)",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D14FAGRRES3DS",
    "tags": [
      "chapter3",
      "diffraction",
      "grating",
      "aperture",
      "wavelength",
      "pattern",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Diffraction grating",
        "url": "https://en.wikipedia.org/wiki/Diffraction_grating"
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
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D15FABAGRS",
    "title": "D15FABAGRS - D15FABAGRS\r",
    "description": "D15FABAGRS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D15FABAGRS\n\n# Babinets Theorem. Diffraction on two amplitude gratings, one with width of\n# openings d1, the other with width of opening d2, and both have center to center\n# distance of strips a = d1 +d2.\n\n\n# Diffraction pattern of the two complementary screens, one is a grating of width\n# of opening d1 the other of d2, and the periodicity constant is a = d1 + d2\n# Wavelength ?, distance from gratings to screen X and coordinate on\n# screen Y. All distances and wavelength in mm, both have number of lines N .Normal\n# incidence.\n\n# D1 and D2 are the diffraction factors, I is the interference factor, normalized to 1.\n# P(A) is the product of Interference and diffraction factor.\n\n# We see that the intensity of the diffraction peaks is different for the two\n# complementarypattern, but the position of the peaks is the same, and\n# that is what Babinets Principle tells us.\n\n\nTheta = np.arange(-0.5001, 0.5+0.0002, 0.0002)\nLamda = 0.0005\nN = 6\nd1 = 0.002\nd2 = 0.001\na = d1 + d2\nD1 = (np.sin(np.pi*(d1/Lamda)*np.sin(Theta))/(np.pi*(d1/Lamda)*np.sin(Theta)))**2\nD2 = (np.sin(np.pi*(d2/Lamda)*np.sin(Theta))/(np.pi*(d2/Lamda)*np.sin(Theta)))**2\nI = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2\nP1 = D1*I\nP2 = D2*I\nfig = plt.figure(1)\n\nplt.plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2)\n\nplt.xlim(-0.6, 0.6)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['P1(\theta)', 'P2(\theta)', 'D1(\theta)', 'D2(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D15FABAGRS\n\n% Babinets Theorem. Diffraction on two amplitude gratings, one with width of\n% openings d1, the other with width of opening d2, and both have center to center\n% distance of strips a = d1 +d2.\n\n\n% Diffraction pattern of the two complementary screens, one is a grating of width\n% of opening d1 the other of d2, and the periodicity constant is a = d1 + d2\n% Wavelength ?, distance from gratings to screen X and coordinate on\n% screen Y. All distances and wavelength in mm, both have number of lines N .Normal\n% incidence.\n\n% D1 and D2 are the diffraction factors, I is the interference factor, normalized to 1.\n% P(A) is the product of Interference and diffraction factor.\n\n% We see that the intensity of the diffraction peaks is different for the two\n% complementarypattern, but the position of the peaks is the same, and\n% that is what Babinets Principle tells us.\n\nfunction D15FABAGRS;\n\nTheta = (-0.5001:0.0002:0.5); \nLamda = 0.0005;\nN = 6;\n\nd1 = 0.002;\nd2 = 0.001;\na = d1 + d2;\n\n\nD1 = (sin(pi*(d1/Lamda)*sin(Theta))./(pi*(d1/Lamda)*sin(Theta))).^2;\nD2 = (sin(pi*(d2/Lamda)*sin(Theta))./(pi*(d2/Lamda)*sin(Theta))).^2;\n\nI = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;\n\nP1 = D1.*I;\nP2 = D2.*I;\n\nfigure(1);\nplot(Theta,P1,Theta,P2,Theta,D1,Theta,D2);\naxis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('P1(\theta)','P2(\theta)','D1(\theta)','D2(\theta)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D15FABAGRS",
    "tags": [
      "chapter3",
      "diffraction",
      "grating",
      "interference",
      "wavelength",
      "intensity",
      "amplitude",
      "pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Diffraction grating",
        "url": "https://en.wikipedia.org/wiki/Diffraction_grating"
      },
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
        "title": "Amplitude",
        "url": "https://en.wikipedia.org/wiki/Amplitude"
      },
      {
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D16FAGRRANS",
    "title": "D16FAGRRANS - D16FAGRRANS\r",
    "description": "D16FAGRRANS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D16FAGRRANS\n# One dimensional periodic and random arrangement for interference and\n# diffraction\n# Diffraction on an amplitude grating with width of openings d, center to center\n# distance of strips a, wavelength ?, distance from grating to screen X and coordinate on\n# screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.\n# All parameters are globally defined above the graph.\n# D(?) is the diffraction factor\n# I(?) is the interference factor, normalized to 1.\n# P1(?) is the product of interference and diffraction factor.\n# P2(?) is for the case that the lines are not periodic and the interfernce factor averages\n# to a constant.\n\n\nTheta = np.arange(-1.001, 1.001+0.0011, 0.0011)\nd = 0.002\nLamda = 0.0005\na = 0.008\nN = 20\nC = 0.5\nD = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2\nI = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2\nP1 = D*I\nP2 = D*C\nfig = plt.figure(1)\n\nplt.subplot(1, 2, 1)\n\nplt.plot(Theta,P1)\n\nplt.xlim(-1.5, 1.5)\nplt.ylim(0, 1)\n\nplt.xlabel('\theta')\nplt.legend(['P1(\theta)'])\nplt.subplot(1, 2, 2)\n\nplt.plot(Theta,P2)\n\nplt.xlim(-1.5, 1.5)\nplt.ylim(0, 0.5)\n\nplt.xlabel('\theta')\nplt.legend(['P2(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D16FAGRRANS\n% One dimensional periodic and random arrangement for interference and\n% diffraction\n% Diffraction on an amplitude grating with width of openings d, center to center\n% distance of strips a, wavelength ?, distance from grating to screen X and coordinate on\n% screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.\n% All parameters are globally defined above the graph.\n% D(?) is the diffraction factor\n% I(?) is the interference factor, normalized to 1.\n% P1(?) is the product of interference and diffraction factor.\n% P2(?) is for the case that the lines are not periodic and the interfernce factor averages\n% to a constant.\n\nfunction D16FAGRRANS;\n\nTheta = (-1.001:0.0011:1.001);\n\nd = 0.002;\nLamda = 0.0005;\na = 0.008;\nN = 20;\nC = 0.5;\n\nD = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;\nI = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;\n\nP1 = D.*I;\nP2 = D.*C;\n\nfigure(1);\nsubplot(1,2,1);\nplot(Theta,P1);\naxis([-1.5 1.5 0 1]);\nxlabel('\theta');\nlegend('P1(\theta)');\n\nsubplot(1,2,2);\nplot(Theta,P2);\naxis([-1.5 1.5 0 0.5]);\nxlabel('\theta');\nlegend('P2(\theta)');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D16FAGRRANS",
    "tags": [
      "chapter3",
      "diffraction",
      "grating",
      "interference",
      "wavelength",
      "amplitude"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Diffraction grating",
        "url": "https://en.wikipedia.org/wiki/Diffraction_grating"
      },
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
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
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D17ARAYRA3DS",
    "title": "D17ARAYRA3DS - D17ARAYRA3DS\r",
    "description": "D17ARAYRA3DS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\nfrom mpl_toolkits.mplot3d import Axes3D\n\n# D17ARAYRA3DS\n\n# 3D Graph of diffraction pattern of a periodic array of\n# rectangular apertures.\n# In comparison the diffraction pattern of rectangular\n# apertures in random array.\n\n# 1. Periodic array\n\n\nLamda = 4\np = 6\nd = 2\nd1 =2\na1 = 4\na = 4\nN = 30\nI = 0:N\nJ = 0:N\nnx = length(I)\nny = length(J)\nM = zeros(nx,ny)\nfor r=1:nx\n        for c=1:ny\n            Xi = -2 + 0.20001*r\n            Yj = -3 + 0.20001*c\n            F = ((np.sin(2*np.pi*d*Xi/(2*Lamda))/(2*np.pi*d*Xi/(2*Lamda)))**2)*((np.sin(2*np.pi*d1*Yj/(2*Lamda))/(2*np.pi*d1*Yj/(2*Lamda)))**2)*((np.sin(2*np.pi*a*Xi*p/(2*Lamda))/(p*np.sin(2*np.pi*a*Xi/(2*Lamda))))**2)*((np.sin(2*np.pi*a1*Yj*p/(2*Lamda))/(p*np.sin(2*np.pi*a1*Yj/(2*Lamda))))**2)\n            M(r,c) = F\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nax = plt.gca()\nif not hasattr(ax, 'plot_surface'):\n    fig = plt.figure()\n    ax = fig.add_subplot(111, projection='3d')\n    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))\n    ax.plot_surface(X, Y, M, cmap='viridis')\naxis([0 N 0 N 0 1])\nplt.legend(['M'])\n\n# 2. Random array\n\nMM = zeros(nx,ny)\nfor r=1:nx\n        for c=1:ny\n            Xi = -2 + 0.20001*r\n            Yj = -3 + 0.20001*c\n            F1 = ((np.sin(2*np.pi*d*Xi/(2*Lamda))/(2*np.pi*d*Xi/(2*Lamda)))**2)*((np.sin(2*np.pi*a*Yj/(2*Lamda))/(2*np.pi*a*Yj/(2*Lamda)))**2)\n            MM(r,c) = F1\nplt.subplot(2, 1, 2)\n\nax = plt.gca()\nif not hasattr(ax, 'plot_surface'):\n    fig = plt.figure()\n    ax = fig.add_subplot(111, projection='3d')\n    X, Y = np.meshgrid(np.arange(MM.shape[1]), np.arange(MM.shape[0]))\n    ax.plot_surface(X, Y, MM, cmap='viridis')\naxis([0 N 0 N 0 1])\nplt.legend(['MM'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D17ARAYRA3DS\n\n% 3D Graph of diffraction pattern of a periodic array of\n% rectangular apertures.\n% In comparison the diffraction pattern of rectangular\n% apertures in random array.\n\n% 1. Periodic array\n\nfunction D17ARAYRA3DS;\n\nLamda = 4;\np = 6;\nd = 2;\nd1 =2;\na1 = 4;\na = 4;\nN = 30;\n\nI = 0:N;\nJ = 0:N;\n\nnx = length(I);\nny = length(J);\nM = zeros(nx,ny);\nfor r=1:nx;\n        for c=1:ny;\n            Xi = -2 + 0.20001*r; \n            Yj = -3 + 0.20001*c;\n            F = ((sin(2*pi*d*Xi/(2*Lamda))./(2*pi*d*Xi/(2*Lamda))).^2).*((sin(2*pi*d1*Yj/(2*Lamda))./(2*pi*d1*Yj/(2*Lamda))).^2).*((sin(2*pi*a*Xi*p/(2*Lamda))./(p*sin(2*pi*a*Xi/(2*Lamda)))).^2).*((sin(2*pi*a1*Yj*p/(2*Lamda))./(p*sin(2*pi*a1*Yj/(2*Lamda)))).^2);\n            M(r,c) = F;\n        end;\nend;\n\n\n\nfigure(1);\nsubplot(2,1,1);\nmesh(M);               \naxis([0 N 0 N 0 1]);\nlegend('M');\n\n% 2. Random array\n\nMM = zeros(nx,ny);\nfor r=1:nx;\n        for c=1:ny;\n            Xi = -2 + 0.20001*r; \n            Yj = -3 + 0.20001*c;\n            F1 = ((sin(2*pi*d*Xi/(2*Lamda))./(2*pi*d*Xi/(2*Lamda))).^2).*((sin(2*pi*a*Yj/(2*Lamda))./(2*pi*a*Yj/(2*Lamda))).^2);\n            MM(r,c) = F1;\n        end;\nend;\n\nsubplot(2,1,2);\n\nmesh(MM);               \naxis([0 N 0 N 0 1]);\nlegend('MM');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D17ARAYRA3DS",
    "tags": [
      "chapter3",
      "diffraction",
      "aperture",
      "pattern",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Aperture",
        "url": "https://en.wikipedia.org/wiki/Aperture"
      },
      {
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D18FEFNCS",
    "title": "D18FEFNCS - D18FEFNCS\r",
    "description": "D18FEFNCS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n\n# D18FEFNCS\n# Fresnel's Integrals C(Y) and S(Y).\n\n\nY = np.arange(0, 5+0.01, 0.01)\n[t,cy]=ode45(@D18COS,Y,[0])\n[t,sy]=ode45(@D18SIN,Y,[0])\nfig = plt.figure(1)\n\nplt.subplot(3, 2, 1)\n\nplt.plot(t,cy)\n\nplt.xlim(0, 6)\nplt.ylim(0, 1)\n\nplt.xlabel('Y')\nplt.legend(['C(Y)'])\nplt.subplot(3, 2, 2)\n\nplt.plot(t,sy)\n\nplt.xlim(0, 6)\nplt.ylim(0, 1)\n\nplt.xlabel('Y')\nplt.legend(['S(Y)'])\nplt.subplot(2, 1, 2)\n\nplt.plot(t,cy,t,sy)\n\nplt.xlim(0, 5)\nplt.ylim(0, 0.8)\n\nplt.xlabel('Y')\nplt.legend(['C(Y)', 'S(Y)'])\nOut=[np.cos((np.pi/2)*(T**2))]\nOut=[np.sin((np.pi/2)*(T**2))]\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "\n% D18FEFNCS\n% Fresnel's Integrals C(Y) and S(Y).\n\nfunction D18FEFNCS;\n\n\nY = (0:0.01:5);\n[t,cy]=ode45(@D18COS,Y,[0]);\n[t,sy]=ode45(@D18SIN,Y,[0]);\n\n\n\nfigure(1);\nsubplot(3,2,1);\nplot(t,cy);\naxis([0 6 0 1]);                \nxlabel('Y');\nlegend('C(Y)');\n\nsubplot(3,2,2);\nplot(t,sy);\naxis([0 6 0 1]);                \nxlabel('Y');\nlegend('S(Y)');\n\n\nsubplot(2,1,2);\nplot(t,cy,t,sy);\naxis([0 5 0 0.8]);                \nxlabel('Y');\nlegend('C(Y)','S(Y)');\n\nfunction Out=D18COS(T,X)\nOut=[cos((pi/2)*(T^2))];\n\nfunction Out=D18SIN(T,X)\nOut=[sin((pi/2)*(T^2))];\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D18FEFNCS",
    "tags": [
      "chapter3",
      "diffraction"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D19FESLITS",
    "title": "D19FESLITS - D19FESLITS\r",
    "description": "D19FESLITS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D19FESLITS\n# Fresnel's Integrals for the calculation of the diffraction on a slit.\n# All units in mm, globally definition of parameters.\n\nLamda =  5e-4\nX = 4000\nd = 1.5\nY = np.arange(0, 10+0.1, 0.1)\nnY = length(Y)\nfor k=1:nY\n   I(k) = (Cp(Y(k))-Cq(Y(k)))**2 + (Sp(Y(k))-Sq(Y(k)))**2 \nfig = plt.figure(1)\n\nplt.plot(Y,I)\n\nplt.xlim(0, 7.5)\nplt.ylim(0, 2.5)\n\nplt.xlabel('Y')\nplt.legend(['I(Y)'])\nOut = (Y + d/2)*(np.sqrt(2/(Lamda*X)))\nOut = (Y - d/2)*(np.sqrt(2/(Lamda*X)))\nOut = quad(@sinf,0,p(Y))\nOut = quad(@sinf,0,q(Y))\nOut = quad(@cosf,0,q(Y))\nOut = quad(@cosf,0,p(Y))\nOut = np.sin((np.pi/2)*(mu**2))\nOut = np.cos((np.pi/2)*(mu**2))\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D19FESLITS\n% Fresnel's Integrals for the calculation of the diffraction on a slit.\n% All units in mm, globally definition of parameters.\nfunction D19FESLITS;\nglobal Lamda X d;\nLamda =  5e-4;\nX = 4000;\nd = 1.5;\n\nY = (0:0.1:10);\nnY = length(Y);\nfor k=1:nY;\n   I(k) = (Cp(Y(k))-Cq(Y(k)))^2 + (Sp(Y(k))-Sq(Y(k)))^2 ;    \nend;\n\n\nfigure(1);\nplot(Y,I);\naxis([0 7.5 0 2.5]);\nxlabel('Y');\nlegend('I(Y)');\n\n\n\n\n\n\nfunction Out=q(Y)\nglobal Lamda X d;\nOut = (Y + d/2).*(sqrt(2/(Lamda*X)));\n\nfunction Out=p(Y)\nglobal Lamda X d;\nOut = (Y - d/2).*(sqrt(2/(Lamda*X)));\n\n\nfunction Out=Sp(Y);\nOut = quad(@sinf,0,p(Y));\nfunction Out=Sq(Y);\nOut = quad(@sinf,0,q(Y));\nfunction Out=Cq(Y);\nOut = quad(@cosf,0,q(Y));\nfunction Out=Cp(Y);\nOut = quad(@cosf,0,p(Y));\n\nfunction Out=sinf(mu)\nOut = sin((pi/2)*(mu.^2));\nfunction Out=cosf(mu)\nOut = cos((pi/2)*(mu.^2));",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D19FESLITS",
    "tags": [
      "chapter3",
      "diffraction",
      "slit"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D1CIRS",
    "title": "D1CIRS - D1CIRS\r",
    "description": "D1CIRS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D1CIRS\n\n# Circular Opening, normalized intensity.\n# When making the opening larger and larger,\n# at the center is a change from minima to maxima\n# to minima and so on.\n\n\npo = 4000\nLamda = 0.0005\na=np.arange(0.1, 5+0.01, 0.01)\nk =2*np.pi/Lamda\nI=(Lamda**2)*power((np.sin((k*(power(a,2)))/(2*po))),2)\nfig = plt.figure(1)\n\nplt.plot(a,I)\n\nplt.xlim(0, 5)\nplt.ylim(0, 3*10**(-7))\n;                  # PLOTS LIMITS                    \nplt.xlabel('a')\nplt.legend(['I(a)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D1CIRS\n\n% Circular Opening, normalized intensity.\n% When making the opening larger and larger,\n% at the center is a change from minima to maxima\n% to minima and so on.\n\nfunction D1CIRS;\npo = 4000;\nLamda = 0.0005;\n\na=(0.1:0.01:5);\nk =2*pi/Lamda;\n\n\nI=(Lamda^2)*power((sin((k*(power(a,2)))/(2*po))),2);\n\nfigure(1);\nplot(a,I);\naxis([0 5 0 3*10^(-7)]);                  % PLOTS LIMITS                    \nxlabel('a');\nlegend('I(a)');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D1CIRS",
    "tags": [
      "chapter3",
      "diffraction",
      "intensity"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Intensity (physics)",
        "url": "https://en.wikipedia.org/wiki/Intensity_(physics)"
      },
      {
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D20FEEDGES",
    "title": "D20FEEDGES - D20FEEDGES\r",
    "description": "D20FEEDGES\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D20FEEDGES\n# Fresnel's Integrals for the calculation of the diffractionon an edge.\n# All units in mm, global definition of the parameters.\n\nX = 4000\nLamda = 5*10**(-4)\nY = np.arange(-4, 15+0.05, 0.05)\n# We treat the diffraction at an edge like diffraction on a large slit.\n# One side is set at d = 0, the other at d = -inif. This translates into\n\n# For p(Y) = - infinite  \n# we have Cp(Y) = Sp(Y) = -0.5\n# np.sqrt(2/(Lamda*X))=1\n\nqY = Y*1\n# We take q(Y) equal Y for scaling,\n\nqY = Y\nqY1 = np.arange(0, -4+-0.05, -0.05)\nqY2 = np.arange(0.05, 15+0.05, 0.05)\n[t,Cq1] = ode45(@C,qY1,[0])\n[t,Cq2] = ode45(@C,qY2,[0])\nCq = [flipud(Cq1);Cq2]\n[t,Sq1] = ode45(@S,qY1,[0])\n[t,Sq2] = ode45(@S,qY2,[0])\nSq = [flipud(Sq1);Sq2]\nIY = ((Cq-(-0.5))**2)+((Sq-(-0.5))**2)\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(Y,IY)\n\nplt.xlim(-5, 15)\nplt.ylim(0, 3)\n\nplt.xlabel('Y')\nplt.legend(['IY(Y)'])\npY = Y-10\npY1 = np.arange(0, -14+-0.05, -0.05)\npY2 = np.arange(0.05, 5+0.05, 0.05)\n[t,Cp1] = ode45(@C,pY1,[0])\n[t,Cp2] = ode45(@C,pY2,[0])\nCp = [flipud(Cp1);Cp2]\n[t,Sp1] = ode45(@S,pY1,[0])\n[t,Sp2] = ode45(@S,pY2,[0])\nSp = [flipud(Sp1);Sp2]\nIIY = ((Cq-Cp)**2)+((Sq-Sp)**2)\nplt.subplot(2, 1, 2)\n\nplt.plot(Y,IIY)\n\nplt.xlim(-4, 16)\nplt.ylim(0, 4)\n\nplt.xlabel('Y')\nplt.legend(['IIY(Y)'])\nOut = np.sin((np.pi/2)*T**2)\nOut = np.cos((np.pi/2)*T**2)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D20FEEDGES\n% Fresnel's Integrals for the calculation of the diffractionon an edge.\n% All units in mm, global definition of the parameters.\nfunction D20FEEDGES;\nX = 4000;\nLamda = 5*10^(-4);\n\nY = (-4:0.05:15);\n\n\n% We treat the diffraction at an edge like diffraction on a large slit.\n% One side is set at d = 0, the other at d = -inif. This translates into\n\n% For p(Y) = - infinite  \n%                         we have Cp(Y) = Sp(Y) = -0.5\n% sqrt(2/(Lamda*X))=1\n\nqY = Y*1;\n\n% We take q(Y) equal Y for scaling,\n\nqY = Y;\nqY1 = (0:-0.05:-4);\nqY2 = (0.05:0.05:15);\n\n[t,Cq1] = ode45(@C,qY1,[0]);\n[t,Cq2] = ode45(@C,qY2,[0]);\nCq = [flipud(Cq1);Cq2];\n[t,Sq1] = ode45(@S,qY1,[0]);\n[t,Sq2] = ode45(@S,qY2,[0]);\nSq = [flipud(Sq1);Sq2];\n\nIY = ((Cq-(-0.5)).^2)+((Sq-(-0.5)).^2);\n\nfigure(1);\nsubplot(2,1,1);\nplot(Y,IY);\naxis([-5 15 0 3]);                \nxlabel('Y');\nlegend('IY(Y)');\n\n\npY = Y-10;\npY1 = (0:-0.05:-14);\npY2 = (0.05:0.05:5);\n\n[t,Cp1] = ode45(@C,pY1,[0]);\n[t,Cp2] = ode45(@C,pY2,[0]);\nCp = [flipud(Cp1);Cp2];\n\n[t,Sp1] = ode45(@S,pY1,[0]);\n[t,Sp2] = ode45(@S,pY2,[0]);\nSp = [flipud(Sp1);Sp2];\n\nIIY = ((Cq-Cp).^2)+((Sq-Sp).^2);\n\nsubplot(2,1,2);\nplot(Y,IIY);\naxis([-4 16 0 4]);                \nxlabel('Y');\nlegend('IIY(Y)');\n\n\nfunction Out=S(T,X)\nOut = sin((pi/2)*T^2);\nfunction Out=C(T,X)\nOut = cos((pi/2)*T^2);\n\n\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D20FEEDGES",
    "tags": [
      "chapter3",
      "diffraction",
      "slit"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D2FASLITS",
    "title": "D2FASLITS - D2FASLITS\r",
    "description": "D2FASLITS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D2FASLITS\n# Diffraction on a slit of width d at wavelength ????.\n# X is distance: Slit-Screen,\n# Y is coordinate on Screen.\n# For small angles, Y/X is proportional to the diffraction angle ?.\n# All length in mm.\n# MCAD notice the singularity at 0. for the graph we get around it using\n# the range Y = -100.1, -99.1 to 100.1\n# Three slits with different width d1, d2, and d3\n\n\nd1 = 0.08\nd2 = 0.12\nd3 = 0.16\nX = 4000; # nu\nLamda = 0.0005\nTheta = np.arange(-2, 2+0.01, 0.01)\nI1 = (np.sin(np.pi*(d1/Lamda)*np.sin((2*np.pi/360)*Theta))/(np.pi*(d1/Lamda)*(2*np.pi/360)*Theta) )**2\nI2 = (np.sin(np.pi*(d2/Lamda)*np.sin((2*np.pi/360)*Theta))/(np.pi*(d2/Lamda)*(2*np.pi/360)*Theta) )**2\nI3 = (np.sin(np.pi*(d3/Lamda)*np.sin((2*np.pi/360)*Theta))/(np.pi*(d3/Lamda)*(2*np.pi/360)*Theta) )**2\nfig = plt.figure(1)\n\nplt.plot(Theta,I1,Theta,I2,Theta,I3)\n\nplt.xlim(-1, 1)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['I1(\theta)', 'I2(\theta)', 'I3(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D2FASLITS\n% Diffraction on a slit of width d at wavelength ????.\n% X is distance: Slit-Screen,\n% Y is coordinate on Screen.\n% For small angles, Y/X is proportional to the diffraction angle ?.\n% All length in mm.\n% MCAD notice the singularity at 0. for the graph we get around it using\n% the range Y = -100.1, -99.1 to 100.1\n% Three slits with different width d1, d2, and d3\n\nfunction D2FASLITS;\nd1 = 0.08;\nd2 = 0.12;\nd3 = 0.16;\nX = 4000; %nu\nLamda = 0.0005;\nTheta = (-2:0.01:2);\nI1 = (sin(pi*(d1/Lamda)*sin((2*pi/360)*Theta))./(pi*(d1/Lamda)*(2*pi/360)*Theta) ).^2;\nI2 = (sin(pi*(d2/Lamda)*sin((2*pi/360)*Theta))./(pi*(d2/Lamda)*(2*pi/360)*Theta) ).^2;\nI3 = (sin(pi*(d3/Lamda)*sin((2*pi/360)*Theta))./(pi*(d3/Lamda)*(2*pi/360)*Theta) ).^2;\n\nfigure(1);\nplot(Theta,I1,Theta,I2,Theta,I3);\naxis([-1 1 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('I1(\theta)','I2(\theta)','I3(\theta)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D2FASLITS",
    "tags": [
      "chapter3",
      "diffraction",
      "slit",
      "wavelength"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D3FASLITEXS",
    "title": "D3FASLITEXS - D3FASLITEXS\r",
    "description": "D3FASLITEXS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D3FASLITEXS\n# Study of side maxima and minima of the Slit\n# Diffraction on a slit of width d and wavelength ?.\n# X is distace: Slit-Screen,\n# Y is coordinate on Screen.\n# For small angles, Y/X is proportional to the diffraction angle.\n# All length in mm.\n\n\nLamda = 0.0005\nX = 4000\nY = np.arange(18, 150+1, 1)\nd = 0.08\nI1 = (np.sin(np.pi*(d/Lamda)*(Y/X))/(np.pi*(d/Lamda)*(Y/X)))**2\nfig = plt.figure(1)\n\nplt.plot(Y,real(I1)\n,Y,imag(I1))\nplt.xlim(0, 150)\nplt.ylim(0, 0.12)\n;                  # PLOTS LIMITS                    \nplt.xlabel('Y')\nplt.legend(['I1(Y)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D3FASLITEXS\n% Study of side maxima and minima of the Slit\n% Diffraction on a slit of width d and wavelength ?.\n% X is distace: Slit-Screen,\n% Y is coordinate on Screen.\n% For small angles, Y/X is proportional to the diffraction angle.\n% All length in mm.\n\nfunction D3FASLITEXS;\n\nLamda = 0.0005;\nX = 4000;\nY = (18:1:150);\nd = 0.08;\nI1 = (sin(pi*(d/Lamda)*(Y/X))./(pi*(d/Lamda)*(Y/X))).^2;\n\n\nfigure(1);\nplot(Y,real(I1),Y,imag(I1));\naxis([0 150 0 0.12]);                  % PLOTS LIMITS                    \nxlabel('Y');\nlegend('I1(Y)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D3FASLITEXS",
    "tags": [
      "chapter3",
      "diffraction",
      "slit",
      "wavelength"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - D4FASLITFTS\r",
    "description": "D4FASLITFTS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n\n# D4FASLITFTS\n# Fourier transformation of step function of width 0 to d.\n# The FT of the FT is also shown\n\nI=np.arange(0, 255+1, 1)\nd=20\nX= (logical(I)>0) - (logical(I-d)>0)\nfig = plt.figure(1)\n\nplt.plot(I,real(X)\n,I,imag(X))\nplt.xlim(0, 300)\nplt.ylim(-0.5, 1.5)\n;                  # PLOTS LIMITS                    \nplt.xlabel('i')\nplt.legend(['I1(Y)'])\nC= fft(X)\nN = length(C)\nJ= (0:1:N-1)\nfig = plt.figure(2)\n\nplt.xlim(0, 0.6)\nplt.ylim(0, 1)\n\nplt.plot(J/255,real(C)\n/np.sqrt(N),J/255,-imag(C)/np.sqrt(N))\n                # PLOTS LIMITS        \nplt.xlim(0, 0.6)\nplt.ylim(-1, 2)\n\nplt.xlabel('j/255')\nplt.legend(['real(C)/sqrt(N)', '-imag(C)/sqrt(N)'])\nZ = ifft(C)\nfig = plt.figure(3)\n\nplt.xlim(0, 0.6)\nplt.ylim(0, 1)\n\nplt.plot(I,real(Z)\n,I,imag(Z))\nplt.legend(['real(Z(I))', 'imag(Z(I))'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "\n% D4FASLITFTS\n% Fourier transformation of step function of width 0 to d.\n% The FT of the FT is also shown\nfunction D4FASLITFTS;\n\n\nI=(0:1:255);\nd=20;\n\nX= (logical(I)>0) - (logical(I-d)>0);\n\nfigure(1);\nplot(I,real(X),I,imag(X));\naxis([0 300 -0.5 1.5]);                  % PLOTS LIMITS                    \nxlabel('i');\nlegend('I1(Y)');\n\n\n\n\n\nC= fft(X);\nN = length(C);\nJ= (0:1:N-1);\nfigure(2);\naxis([0 0.6 0 1]);  \n\nplot(J/255,real(C)/sqrt(N),J/255,-imag(C)/sqrt(N));\n                % PLOTS LIMITS        \naxis([0 0.6 -1 2]);\nxlabel('j/255');\nlegend('real(C)/sqrt(N)','-imag(C)/sqrt(N)');\n\n\n\nZ = ifft(C);\nfigure(3);\naxis([0 0.6 0 1]);  \nplot(I,real(Z),I,imag(Z));\nlegend('real(Z(I))','imag(Z(I))');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D4FASLITFTS",
    "tags": [
      "chapter3",
      "diffraction",
      "slit",
      "fourier-transform",
      "fft"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
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
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D5FARECTS",
    "title": "D5FARECTS - D5FARECTS The diffraction pattern of a rectangular aperture.\r",
    "description": "D5FARECTS The diffraction pattern of a rectangular aperture.\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\nfrom mpl_toolkits.mplot3d import Axes3D\n\n# D5FARECTS The diffraction pattern of a rectangular aperture.\n# The width in the x-direction is d, in y-direction a.\n# One may look at the plot from different angles, change colors\n# and make a \"Contour Plot\".\n\n\nN = 40\nD = 4\nA = 2\nLamda = 4\nI = 0:N\nJ = 0:N\nnx = length(I)\nny = length(J)\nZ = zeros(nx,ny)\nfor r=1:nx\n        for c=1:ny\n            Xi = -4 + 0.20001*r\n            Yi = -4 + 0.20001*c\n            Z(r,c)= power(np.sin(2*np.pi*D*(Xi/(2*Lamda)))/(2*np.pi*D*(Xi/(2*Lamda))),2)*power(np.sin(2*np.pi*A*(Yi/(2*Lamda)))/(2*np.pi*A*(Yi/(2*Lamda))),2)\nF= Z\nfig = plt.figure(1)\n\nax = plt.gca()\nif not hasattr(ax, 'plot_surface'):\n    fig = plt.figure()\n    ax = fig.add_subplot(111, projection='3d')\n    X, Y = np.meshgrid(np.arange(F.shape[1]), np.arange(F.shape[0]))\n    ax.plot_surface(X, Y, F, cmap='viridis')\n# PLOTS LIMITS                    \naxis([0 40 0 40 0 1])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D5FARECTS The diffraction pattern of a rectangular aperture.\n% The width in the x-direction is d, in y-direction a.\n% One may look at the plot from different angles, change colors\n% and make a \"Contour Plot\".\n\nfunction D5FARECTS;\n\nN = 40;\nD = 4;\nA = 2;\nLamda = 4;\n\n\nI = 0:N;\nJ = 0:N;\n\nnx = length(I);\nny = length(J);\nZ = zeros(nx,ny);\nfor r=1:nx;\n        for c=1:ny;\n            Xi = -4 + 0.20001*r; \n            Yi = -4 + 0.20001*c;\n            Z(r,c)= power(sin(2*pi*D*(Xi/(2*Lamda)))/(2*pi*D*(Xi/(2*Lamda))),2)*power(sin(2*pi*A*(Yi/(2*Lamda)))/(2*pi*A*(Yi/(2*Lamda))),2);\n        end;\nend;\n\n\n\n\nF= Z;\n\nfigure(1);\n\nmesh(F);\n\n\n\n                 % PLOTS LIMITS                    \naxis([0 40 0 40 0 1]);\n\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D5FARECTS The diffraction pattern of a rectangular aperture.",
    "tags": [
      "chapter3",
      "diffraction",
      "aperture",
      "pattern",
      "contour-plot",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Aperture",
        "url": "https://en.wikipedia.org/wiki/Aperture"
      },
      {
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D6FARONS",
    "title": "D6FARONS - D6FARONS\r",
    "description": "D6FARONS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D6FARONS\n# Diffraction on a round aperture of radius a, using wavelength ?.\n# The graph is not normalized.\n# X is distace:Slit-Screen,\n# R is coordinate on Screen,\n# All length in mm, parameters are globally defined above the graph.\n# Three round apertures with different Radii a1, a2, and a3\n\n\nR = np.arange(-10.01, 10.01+0.1, 0.1)\nX = 1000\nLamda = 0.010\na1 = 1.5\na2 = 3\na3 = 6\nI1 = (besselj(1,(2*np.pi*a1*R/(Lamda*X)))/(2*np.pi*a1*R/(Lamda*X)))**2\nI2 = (besselj(1,(2*np.pi*a2*R/(Lamda*X)))/(2*np.pi*a2*R/(Lamda*X)))**2\nI3 = (besselj(1,(2*np.pi*a3*R/(Lamda*X)))/(2*np.pi*a3*R/(Lamda*X)))**2\nfig = plt.figure(1)\n\nplt.plot(R,I1,R,I2,R,I3)\n\nplt.xlim(-15, 10)\nplt.ylim(0, 0.3)\n;                  # PLOTS LIMITS                    \nplt.xlabel('R')\nplt.legend(['I1(R)', 'I2(R)', 'I3(R)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D6FARONS\n% Diffraction on a round aperture of radius a, using wavelength ?.\n% The graph is not normalized.\n% X is distace:Slit-Screen,\n% R is coordinate on Screen,\n% All length in mm, parameters are globally defined above the graph.\n% Three round apertures with different Radii a1, a2, and a3\n\nfunction D6FARONS;\n\nR = (-10.01:0.1:10.01);\nX = 1000;\nLamda = 0.010;\na1 = 1.5;\na2 = 3;\na3 = 6;\n\nI1 = (besselj(1,(2*pi*a1*R/(Lamda*X)))./(2*pi*a1*R/(Lamda*X))).^2;\nI2 = (besselj(1,(2*pi*a2*R/(Lamda*X)))./(2*pi*a2*R/(Lamda*X))).^2;\nI3 = (besselj(1,(2*pi*a3*R/(Lamda*X)))./(2*pi*a3*R/(Lamda*X))).^2;\n\nfigure(1);\nplot(R,I1,R,I2,R,I3);\naxis([-15 10 0 0.3]);                  % PLOTS LIMITS                    \nxlabel('R');\nlegend('I1(R)','I2(R)','I3(R)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D6FARONS",
    "tags": [
      "chapter3",
      "diffraction",
      "slit",
      "aperture",
      "wavelength"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
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
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D7FARON3DS",
    "title": "D7FARON3DS - D7FARON3DS\r",
    "description": "D7FARON3DS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\nfrom mpl_toolkits.mplot3d import Axes3D\n\n# D7FARON3DS\n# One may look at the plot from different angles, change colors, and make a \"Contour Plot\".\n# Radius of aperture is a\n# The coordinate on the observation screen is R\n# Wavelength ?, distance from aperture to screen is X.\n# 3D diffraction pattern of a round aperture as a circular\n# symmetric plot using two coordinates.\n\n\nN = 30\nD = 2\nA = 0.1\nLamda = 0.0005\nX = 4000\nI = 0:N\nJ = 0:N\nnx = length(I)\nny = length(J)\nG = zeros(nx,ny)\nfor r=1:nx\n        for c=1:ny\n            Xi = -20 + 1.5001*r\n            Yi = -20 + 1.5001*c\n            R = np.sqrt(Xi**2+Yi**2)\n            G(r,c)= (( besselj(1,(2*np.pi*A*R/(X*Lamda)))/(2*np.pi*A*R/(X*Lamda))))**2\nfig = plt.figure(1)\n\nax = plt.gca()\nif not hasattr(ax, 'plot_surface'):\n    fig = plt.figure()\n    ax = fig.add_subplot(111, projection='3d')\n    X, Y = np.meshgrid(np.arange(real(G.shape[1]), np.arange(real(G.shape[0]))\n    ax.plot_surface(X, Y, real(G, cmap='viridis')\n)\n                 # PLOTS LIMITS                    \naxis([0 N 0 N 0 0.3])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D7FARON3DS\n% One may look at the plot from different angles, change colors, and make a \"Contour Plot\".\n% Radius of aperture is a\n% The coordinate on the observation screen is R\n% Wavelength ?, distance from aperture to screen is X.\n% 3D diffraction pattern of a round aperture as a circular\n% symmetric plot using two coordinates.\n\nfunction D7FARON3DS;\n\nN = 30;\nD = 2;\nA = 0.1;\nLamda = 0.0005;\nX = 4000;\n\nI = 0:N;\nJ = 0:N;\n\nnx = length(I);\nny = length(J);\nG = zeros(nx,ny);\nfor r=1:nx;\n        for c=1:ny;\n            Xi = -20 + 1.5001*r;\n            Yi = -20 + 1.5001*c; \n            R = sqrt(Xi^2+Yi^2);\n            G(r,c)= (( besselj(1,(2*pi*A*R/(X*Lamda)))/(2*pi*A*R/(X*Lamda))))^2;\n        end;\nend;\n\n\n\n\n\n\nfigure(1);\n\nmesh(real(G));\n                 % PLOTS LIMITS                    \naxis([0 N 0 N 0 0.3])",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D7FARON3DS",
    "tags": [
      "chapter3",
      "diffraction",
      "aperture",
      "wavelength",
      "pattern",
      "contour-plot",
      "3d-visualization"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
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
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D8FARONEXS",
    "title": "D8FARONEXS - D8FARONEXS\r",
    "description": "D8FARONEXS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D8FARONEXS\n# Graph of part of the diffraction pattern of a round aperture of radius a and\n# wavelength ????.\n# The graph is not normalized.\n# X is distace:Slit-Screen,\n# R is coordinate on Screen,\n# All length in mm, parameters are globally defined above the graph.\n\n\nR = np.arange(3, 10+0.1, 0.1)\nX = 1000\nLamda = 0.010\na = 1.5\nI = (besselj(1,(2*np.pi*a*R/(Lamda*X)))/(2*np.pi*a*R/(Lamda*X)))**2\nfig = plt.figure(1)\n\nplt.plot(R,I)\n\nplt.xlim(3, 10)\nplt.ylim(0, 0.02)\n;                  # PLOTS LIMITS                    \nplt.xlabel('R')\nplt.legend(['I(R)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D8FARONEXS\n% Graph of part of the diffraction pattern of a round aperture of radius a and\n% wavelength ????.\n% The graph is not normalized.\n% X is distace:Slit-Screen,\n% R is coordinate on Screen,\n% All length in mm, parameters are globally defined above the graph.\n\nfunction D8FARONEXS;\nR = (3:0.1:10);\nX = 1000;\nLamda = 0.010;\na = 1.5;\n\nI = (besselj(1,(2*pi*a*R/(Lamda*X)))./(2*pi*a*R/(Lamda*X))).^2;\n\nfigure(1);\nplot(R,I);\naxis([3 10 0 0.02]);                  % PLOTS LIMITS                    \nxlabel('R');\nlegend('I(R)');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D8FARONEXS",
    "tags": [
      "chapter3",
      "diffraction",
      "slit",
      "aperture",
      "wavelength",
      "pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
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
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "D9FAGRAMPS",
    "title": "D9FAGRAMPS - D9FAGRAMPS\r",
    "description": "D9FAGRAMPS\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# D9FAGRAMPS\n# Diffraction on an amplitude grating at normal incidence.\n# Width of openings d, center to center distance of strips a, wavelength ????, distance\n# from grating to screen X and coordinate on Screen Y.\n# All distances and wavelength in mm, number of lines N.\n# All parameters are globally defined above the graph.\n# D(A) is the diffraction factor\n# I(A) is the interference factor, normalized to 1. The numerator is plotted separately to\n# show where the main maxima are located (0/0).\n# P(A) is the product of Interference and diffraction factor.\n\n\nTheta = np.arange(-0.5001, 0.5+0.0002, 0.0002)\nd= 0.001\nLamda = 0.0005\na = 0.002\nN = 6\nD = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2\nI = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2\nY = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N))**2\nP = D*I\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(Theta,I,Theta,Y)\n\nplt.xlim(-0.6, 0.6)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['I(\theta)', 'Y(\theta)'])\nplt.subplot(2, 1, 2)\n\nplt.plot(Theta,I,Theta,D,Theta,P)\n\nplt.xlim(-0.6, 0.6)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['I(\theta)', 'D(\theta)', 'P(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% D9FAGRAMPS\n% Diffraction on an amplitude grating at normal incidence.\n% Width of openings d, center to center distance of strips a, wavelength ????, distance\n% from grating to screen X and coordinate on Screen Y.\n% All distances and wavelength in mm, number of lines N.\n% All parameters are globally defined above the graph.\n% D(A) is the diffraction factor\n% I(A) is the interference factor, normalized to 1. The numerator is plotted separately to\n% show where the main maxima are located (0/0).\n% P(A) is the product of Interference and diffraction factor.\n\nfunction D9FAGRAMPS;\n\nTheta = (-0.5001:0.0002:0.5);\nd= 0.001;\nLamda = 0.0005;\na = 0.002;\nN = 6;\n\nD = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;\nI = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;\nY = (sin(pi*(a/Lamda).*sin(Theta)*N)).^2;\nP = D.*I;\n\n\nfigure(1);\nsubplot(2,1,1);\nplot(Theta,I,Theta,Y);\naxis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('I(\theta)','Y(\theta)');\n\n\nsubplot(2,1,2);\nplot(Theta,I,Theta,D,Theta,P);\naxis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('I(\theta)','D(\theta)','P(\theta)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "D9FAGRAMPS",
    "tags": [
      "chapter3",
      "diffraction",
      "grating",
      "interference",
      "wavelength",
      "amplitude"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Diffraction grating",
        "url": "https://en.wikipedia.org/wiki/Diffraction_grating"
      },
      {
        "title": "Wave interference",
        "url": "https://en.wikipedia.org/wiki/Wave_interference"
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
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "DA1FAGRSTEP1S",
    "title": "DA1FAGRSTEP1S - DA1FAGRSTEP1S\r",
    "description": "DA1FAGRSTEP1S\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# DA1FAGRSTEP1S\n# Diffraction on an step grating with width d, center to center distance of steps a,\n# height H, wavelength ????, distance from grating to screen X and coordinate on\n# Screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.\n# All parameters are globally defined above the graph.\n# D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.\n# II(?) is the interfernce factor of the gratings with respect to the two planes.\n# P(A) is the product of interference and diffraction factors.\n# The intensity of the zeroth order and of the first orders change depending on the heigth H.\n# If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in:\n# the first order.\n\n\nTheta =np.arange(-0.5001, 0.5+0.0002, 0.0002)\nLamda = 0.0005\na = 0.002\nN = 6\nd = 0.001\nn1 = 10.25\nn2 = 10\nn3 = 10.37\nn4 = 10.5\nH1 = n1*Lamda\nH2 = n2*Lamda\nH3 = n3*Lamda\nH4 = n4*Lamda\nD = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2\nI = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2\nII1 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H1)))**2\nII2 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H2)))**2\nII3 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H3)))**2\nII4 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H4)))**2\nP1 = D*I*II1\nP2 = D*I*II2\nP3 = D*I*II3\nP4 = D*I*II4\nfig = plt.figure(1)\n\nplt.plot(Theta,P1,Theta,P2,Theta,P3,Theta,P4,Theta,D)\n\nplt.xlim(-1, 1)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['P1(\theta)', 'P2(\theta)', 'P3(\theta)', 'P4(\theta)', 'D(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% DA1FAGRSTEP1S\n% Diffraction on an step grating with width d, center to center distance of steps a,\n% height H, wavelength ????, distance from grating to screen X and coordinate on\n% Screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.\n% All parameters are globally defined above the graph.\n% D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.\n% II(?) is the interfernce factor of the gratings with respect to the two planes.\n% P(A) is the product of interference and diffraction factors.\n% The intensity of the zeroth order and of the first orders change depending on the heigth H.\n% If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in\n% the first order.\n\nfunction DA1FAGRSTEP1S;\n\nTheta =(-0.5001:0.0002:0.5);\nLamda = 0.0005;\n\na = 0.002;\nN = 6;\nd = 0.001;\nn1 = 10.25;\nn2 = 10;\nn3 = 10.37;\nn4 = 10.5;\nH1 = n1*Lamda;\nH2 = n2*Lamda;\nH3 = n3*Lamda;\nH4 = n4*Lamda;\n\n\nD = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;\nI = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;\nII1 =  (cos((pi/Lamda)*(d*sin(Theta)+H1))).^2;\nII2 =  (cos((pi/Lamda)*(d*sin(Theta)+H2))).^2;\nII3 =  (cos((pi/Lamda)*(d*sin(Theta)+H3))).^2;\nII4 =  (cos((pi/Lamda)*(d*sin(Theta)+H4))).^2;\n\nP1 = D.*I.*II1;\nP2 = D.*I.*II2;\nP3 = D.*I.*II3;\nP4 = D.*I.*II4;\n\nfigure(1);\nplot(Theta,P1,Theta,P2,Theta,P3,Theta,P4,Theta,D);\naxis([-1 1 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('P1(\theta)','P2(\theta)','P3(\theta)','P4(\theta)','D(\theta)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "DA1FAGRSTEP1S",
    "tags": [
      "chapter3",
      "diffraction",
      "grating",
      "interference",
      "wavelength",
      "intensity"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Diffraction grating",
        "url": "https://en.wikipedia.org/wiki/Diffraction_grating"
      },
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
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "DA2FAGRSTEP2S",
    "title": "DA2FAGRSTEP2S - DA2FAGRSTEP2S\r",
    "description": "DA2FAGRSTEP2S\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# DA2FAGRSTEP2S\n# Diffraction on an step grating with width d, center to center distance of steps a,\n# height H, two wavelength ?1 and ????2 for 0th and first order, distance from grating to\n# screen X and coordinate on screen Y.\n# All distances and wavelength in mm, number of lines N .Normal incidence.\n# All parameters are globally defined above the graph.\n# D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.\n# II(?) is the interference factor of the gratings with respect to the two planes.\n# P(A) is the product of Interference and diffraction factors.\n# The intensity of the zeroth order and of the first orders change depending on the heigth H.\n# If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in:\n# the first order.\n\n\nTheta = np.arange(-0.7001, 0.7+0.0002, 0.0002)\nd = 0.001\na = 0.002\nN = 6\nLamda1 = 0.0007\nLamda2 = 0.0005\nn1 = 1\nn2 = 0.5\nH = 0.00035\nH1 = n1*Lamda1\nH2 = n1*Lamda2\nH3 = n2*Lamda1\nH4 = n2*Lamda2\nD1 = (np.sin(np.pi*(d/Lamda1)*np.sin(Theta))/(np.pi*(d/Lamda1)*np.sin(Theta)))**2\nD2 = (np.sin(np.pi*(d/Lamda2)*np.sin(Theta))/(np.pi*(d/Lamda2)*np.sin(Theta)))**2\nD3 = D1\nD4 = D2\nI1 = (np.sin(np.pi*(a/Lamda1)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda1)*np.sin(Theta))))**2\nI2 = (np.sin(np.pi*(a/Lamda2)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda2)*np.sin(Theta))))**2\nI3 = I1\nI4 = I2\nII1 = (np.cos((np.pi/Lamda1)*(d*np.sin(Theta)+H1)))**2\nII2 = (np.cos((np.pi/Lamda2)*(d*np.sin(Theta)+H2)))**2\nII3 = (np.cos((np.pi/Lamda1)*(d*np.sin(Theta)+H3)))**2\nII4 = (np.cos((np.pi/Lamda2)*(d*np.sin(Theta)+H4)))**2\nP1 = D1*I1*II1\nP2 = D2*I2*II2\nP3 = D1*I1*II3\nP4 = D2*I2*II4\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2)\n\nplt.xlim(-0.8, 0.8)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nxlabel('\theta','Fontsize',12)\nplt.legend(['P1(\theta)', 'P2(\theta)', 'D1(\theta)', 'D2(\theta)'])\nplt.subplot(2, 1, 2)\n\nplt.plot(Theta,P3,Theta,P4,Theta,D3,Theta,D4)\n\nplt.xlim(-0.8, 0.8)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nxlabel('\theta','Fontsize',12)\nplt.legend(['P3(\theta)', 'P4(\theta)', 'D3(\theta)', 'D4(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% DA2FAGRSTEP2S\n% Diffraction on an step grating with width d, center to center distance of steps a,\n% height H, two wavelength ?1 and ????2 for 0th and first order, distance from grating to\n% screen X and coordinate on screen Y.\n% All distances and wavelength in mm, number of lines N .Normal incidence.\n% All parameters are globally defined above the graph.\n% D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.\n% II(?) is the interference factor of the gratings with respect to the two planes.\n% P(A) is the product of Interference and diffraction factors.\n% The intensity of the zeroth order and of the first orders change depending on the heigth H.\n% If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in\n% the first order.\n\nfunction DA2FAGRSTEP2S;\n\nTheta = (-0.7001:0.0002:0.7);\nd = 0.001;\na = 0.002;\nN = 6;\nLamda1 = 0.0007;\nLamda2 = 0.0005;\nn1 = 1;\nn2 = 0.5;\nH = 0.00035;\nH1 = n1*Lamda1;\nH2 = n1*Lamda2;\nH3 = n2*Lamda1;\nH4 = n2*Lamda2;\n\n\nD1 = (sin(pi*(d/Lamda1)*sin(Theta))./(pi*(d/Lamda1)*sin(Theta))).^2;\nD2 = (sin(pi*(d/Lamda2)*sin(Theta))./(pi*(d/Lamda2)*sin(Theta))).^2;\nD3 = D1;\nD4 = D2;\n\nI1 = (sin(pi*(a/Lamda1)*sin(Theta)*N)./(N*sin(pi*(a/Lamda1)*sin(Theta)))).^2;\nI2 = (sin(pi*(a/Lamda2)*sin(Theta)*N)./(N*sin(pi*(a/Lamda2)*sin(Theta)))).^2;\nI3 = I1;\nI4 = I2;\n\nII1 = (cos((pi/Lamda1)*(d*sin(Theta)+H1))).^2;\nII2 = (cos((pi/Lamda2)*(d*sin(Theta)+H2))).^2;\nII3 = (cos((pi/Lamda1)*(d*sin(Theta)+H3))).^2;\nII4 = (cos((pi/Lamda2)*(d*sin(Theta)+H4))).^2;\n\nP1 = D1.*I1.*II1;\nP2 = D2.*I2.*II2;\nP3 = D1.*I1.*II3;\nP4 = D2.*I2.*II4;\n\nfigure(1);\nsubplot(2,1,1);\nplot(Theta,P1,Theta,P2,Theta,D1,Theta,D2);\naxis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta','Fontsize',12);\nlegend('P1(\theta)','P2(\theta)','D1(\theta)','D2(\theta)');\n\nsubplot(2,1,2);\nplot(Theta,P3,Theta,P4,Theta,D3,Theta,D4);\naxis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta','Fontsize',12);\nlegend('P3(\theta)','P4(\theta)','D3(\theta)','D4(\theta)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "DA2FAGRSTEP2S",
    "tags": [
      "chapter3",
      "diffraction",
      "grating",
      "interference",
      "wavelength",
      "intensity"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Diffraction grating",
        "url": "https://en.wikipedia.org/wiki/Diffraction_grating"
      },
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
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  },
  {
    "id": "DA3FECOR",
    "title": "DA3FECOR - DA3FECOR\r",
    "description": "DA3FECOR\r",
    "category": "Optics - Diffraction",
    "chapter": "3",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# DA3FECOR\n# Cornu's spiral is obtained by plotting Fresnel's Integrals C(Y) and S(Y) on x and y\n# axis, respectively.\n# The highest value f of Y is globally defined\n\n\nf=5\nY=(0:0.01:f)\n[t,SY] = ode45(@Sf,Y,[0])\n[t,CY] = ode45(@Cf,Y,[0])\nfig = plt.figure(1)\n\nplt.plot(CY,SY)\n\nplt.xlim(0, 0.8)\nplt.ylim(0, 0.8)\n\nxlabel('C(Y)','Fontsize',12)\nplt.legend(['S(Y)'])\nOut = np.sin((np.pi/2)*T**2)\nOut = np.cos((np.pi/2)*T**2)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% DA3FECOR\n% Cornu's spiral is obtained by plotting Fresnel's Integrals C(Y) and S(Y) on x and y\n% axis, respectively.\n% The highest value f of Y is globally defined\nfunction DA3FECOR()\n\nf=5;\nY=(0:0.01:f);\n\n[t,SY] = ode45(@Sf,Y,[0]);\n[t,CY] = ode45(@Cf,Y,[0]);\n\n\nfigure(1);\nplot(CY,SY);\naxis([0 0.8 0 0.8]);                \nxlabel('C(Y)','Fontsize',12);\nlegend('S(Y)');\n\n\n\n\n\nfunction Out=Sf(T,X)\nOut = sin((pi/2)*T^2);\nfunction Out=Cf(T,X)\nOut = cos((pi/2)*T^2);\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "DA3FECOR",
    "tags": [
      "chapter3",
      "diffraction"
    ],
    "wikipediaLinks": [
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Fraunhofer diffraction",
        "url": "https://en.wikipedia.org/wiki/Fraunhofer_diffraction"
      },
      {
        "title": "Fresnel diffraction",
        "url": "https://en.wikipedia.org/wiki/Fresnel_diffraction"
      }
    ]
  }
];
