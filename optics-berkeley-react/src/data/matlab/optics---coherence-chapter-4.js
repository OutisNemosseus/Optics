// Optics - Coherence - Chapter 4
// 8 programs

export const programs = [
  {
    "id": "C1COH2S",
    "title": "C1COH2S - C1COH2S\r",
    "description": "C1COH2S\r",
    "category": "Optics - Coherence",
    "chapter": "4",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# C1COH2S\n# Intensity of two sources separated by s. Superposition of two double\n# slit pattern.\n# The slits have width d and separation a, one pattern is untilted with ? = 0, the\n# other tilted by ? = s/Z , distance from sources to slit is Z.\n# Distance from slit to screen is X, coordinate on screen is Y, Y/X = ?.\n# By enlarging ?, starting from 0, one finds the first \" fringe disappearence\". If ?\n# is further enlarged, the fringes reappear, but now the minima are not zero.\n# Another point of view: Fringes may disapear for constant s and changing a.\n\n\nTheta = np.arange(-0.006, 0.006+0.00009, 0.00009)\nd = 0.05\na = 1\nZ = 9000\ns1 = 0\ns2 = 1.5\ns3 = 2.25\ns4 = 2.6\nPsi1 = s1/Z\nPsi2 = s2/Z\nPsi3 = s3/Z\nPsi4 = s4/Z\nLamda = 0.0005\nI1= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*np.sin(Theta)))**2\nII1= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi1))))**2\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(Theta,I1+II1)\n\nplt.xlim(-0.006, 0.006)\nplt.ylim(0, 2)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['I1(\theta)+II1(\theta)'])\nII2= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi2))))**2\nplt.subplot(2, 2, 2)\n\nplt.plot(Theta,I1+II2)\n\nplt.xlim(-0.006, 0.006)\nplt.ylim(0, 2)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['I1(\theta)+II2(\theta)'])\nII3= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi3))))**2\nplt.subplot(2, 2, 3)\n\nplt.plot(Theta,I1+II3)\n\nplt.xlim(-0.006, 0.006)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['I1(\theta)+II3(\theta)'])\nII4= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi4))))**2\nplt.subplot(2, 2, 4)\n\nplt.plot(Theta,I1+II4)\n\nplt.xlim(-0.006, 0.006)\nplt.ylim(0, 1.5)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['I1(\theta)+II4(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "%C1COH2S\n%Intensity of two sources separated by s. Superposition of two double\n%slit pattern.\n%The slits have width d and separation a, one pattern is untilted with ? = 0, the\n%other tilted by ? = s/Z , distance from sources to slit is Z.\n%Distance from slit to screen is X, coordinate on screen is Y, Y/X = ?.\n%By enlarging ?, starting from 0, one finds the first \" fringe disappearence\". If ?\n%is further enlarged, the fringes reappear, but now the minima are not zero.\n%Another point of view: Fringes may disapear for constant s and changing a.\n\nfunction C1COH2S;\n\nTheta = (-0.006:0.00009:0.006);\nd = 0.05;\na = 1;\nZ = 9000;\ns1 = 0;\ns2 = 1.5;\ns3 = 2.25;\ns4 = 2.6;\nPsi1 = s1/Z;\nPsi2 = s2/Z;\nPsi3 = s3/Z;\nPsi4 = s4/Z;\nLamda = 0.0005;\n\nI1= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*sin(Theta))).^2;\n\nII1= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi1)))).^2;\n\nfigure(1);\nsubplot(2,2,1);\nplot(Theta,I1+II1);\naxis([-0.006 0.006 0 2]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('I1(\theta)+II1(\theta)'); \n\nII2= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi2)))).^2;\n\nsubplot(2,2,2);\nplot(Theta,I1+II2);\naxis([-0.006 0.006 0 2]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('I1(\theta)+II2(\theta)'); \n\nII3= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi3)))).^2;\n\nsubplot(2,2,3);\nplot(Theta,I1+II3);\naxis([-0.006 0.006 0 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('I1(\theta)+II3(\theta)'); \n\nII4= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi4)))).^2;\n\nsubplot(2,2,4);\nplot(Theta,I1+II4);\naxis([-0.006 0.006 0 1.5]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('I1(\theta)+II4(\theta)'); \n\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "C1COH2S",
    "tags": [
      "chapter4",
      "coherence",
      "slit",
      "intensity",
      "fringe-pattern",
      "pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Coherence (physics)",
        "url": "https://en.wikipedia.org/wiki/Coherence_(physics)"
      },
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
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
        "title": "Coherence length",
        "url": "https://en.wikipedia.org/wiki/Coherence_length"
      }
    ]
  },
  {
    "id": "C2COHEX",
    "title": "C2COHEX - C2COHEX\r",
    "description": "C2COHEX\r",
    "category": "Optics - Coherence",
    "chapter": "4",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# C2COHEX\n\n# Intensity of an extended source of width s and interfernce diffraction on a\n# double slit.\n\n# Slit openings d and separation a. Distance from source to slit Z, from slit to\n# screen X, coordinate on screen is Y, small angle approximation Y/X = ?.\n\n\n\n\na=1\nd=0.05\nLamda = 0.0005\nZ = 9000\ns1 = 1\ns2 = 1.5\ns3 = 4.5\ns4 = 5\nPsi1 = s1/Z\nPsi2 = s2/Z\nPsi3 = s3/Z\nPsi4 = s4/Z\nk=0:1:200\nTheta =0.01-k*0.0001\n nx = length(Theta)\n for r=1:nx\n    I1(r)= quad(@fc,0,Psi1,[],[],Theta(r))\n    I2(r)= quad(@fc,0,Psi2,[],[],Theta(r))\n    I3(r)= quad(@fc,0,Psi3,[],[],Theta(r))\n    I4(r)= quad(@fc,0,Psi4,[],[],Theta(r))\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(Theta,I1)\n\nplt.xlim(-0.01, 0.01)\nplt.ylim(0, 3*10**(-4))\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['I1(\theta)'])\nplt.subplot(2, 2, 2)\n\nplt.plot(Theta,I2)\n\nplt.xlim(-0.01, 0.01)\nplt.ylim(0, 3*10**(-4))\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['I2(\theta)'])\nplt.subplot(2, 2, 3)\n\nplt.plot(Theta,I3)\n\nplt.xlim(-0.01, 0.01)\nplt.ylim(0, 3*10**(-4))\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['I3(\theta)'])\nplt.subplot(2, 2, 4)\n\nplt.plot(Theta,I4)\n\nplt.xlim(-0.01, 0.01)\nplt.ylim(0, 3*10**(-4))\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['I4(\theta)'])\nOut = ((np.sin(np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi)))**2)/((np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi)))**2))*np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi)))**2\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% C2COHEX\n\n% Intensity of an extended source of width s and interfernce diffraction on a\n% double slit.\n\n% Slit openings d and separation a. Distance from source to slit Z, from slit to\n% screen X, coordinate on screen is Y, small angle approximation Y/X = ?.\n\n\n\nfunction C2COHEX;\nglobal a d Lamda Z s1 Psi1 k Theta;\na=1;\nd=0.05;\nLamda = 0.0005;\nZ = 9000;\ns1 = 1;\ns2 = 1.5;\ns3 = 4.5;\ns4 = 5;\n\nPsi1 = s1/Z;\nPsi2 = s2/Z;\nPsi3 = s3/Z;\nPsi4 = s4/Z;\n\nk=0:1:200;\nTheta =0.01-k*0.0001;\n\n\n nx = length(Theta);\n for r=1:nx;\n  \n    I1(r)= quad(@fc,0,Psi1,[],[],Theta(r));\n    I2(r)= quad(@fc,0,Psi2,[],[],Theta(r));\n    I3(r)= quad(@fc,0,Psi3,[],[],Theta(r));\n    I4(r)= quad(@fc,0,Psi4,[],[],Theta(r));\n   \n   \n    \nend;\n\n\nfigure(1);\nsubplot(2,2,1);\nplot(Theta,I1);\naxis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('I1(\theta)');\n\nsubplot(2,2,2);\nplot(Theta,I2);\naxis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('I2(\theta)');\n\nsubplot(2,2,3);\nplot(Theta,I3);\naxis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('I3(\theta)');\n\nsubplot(2,2,4);\nplot(Theta,I4);\naxis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('I4(\theta)');\n\nfunction Out=fc(Psi,Theta)\nglobal a d Lamda Z s1 Psi1;\nOut = ((sin(pi*(d/Lamda)*(sin(Theta)+sin(Psi))).^2)./((pi*(d/Lamda)*(sin(Theta)+sin(Psi))).^2)).*cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi))).^2;\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "C2COHEX",
    "tags": [
      "chapter4",
      "coherence",
      "slit",
      "diffraction",
      "intensity"
    ],
    "wikipediaLinks": [
      {
        "title": "Coherence (physics)",
        "url": "https://en.wikipedia.org/wiki/Coherence_(physics)"
      },
      {
        "title": "Diffraction",
        "url": "https://en.wikipedia.org/wiki/Diffraction"
      },
      {
        "title": "Intensity (physics)",
        "url": "https://en.wikipedia.org/wiki/Intensity_(physics)"
      },
      {
        "title": "Coherence length",
        "url": "https://en.wikipedia.org/wiki/Coherence_length"
      }
    ]
  },
  {
    "id": "C3VIS2S",
    "title": "C3VIS2S - C3VIS2S\r",
    "description": "C3VIS2S\r",
    "category": "Optics - Coherence",
    "chapter": "4",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# C3VIS2S\n\n# Visibility for two point sources.\n# We have set Y'/X equal to s/Z\n\n\na = 1\nLamda = 0.0005\nZ = 9000\ns = np.arange(0.01, 10+0.01, 0.01)\nV = np.cos(np.pi*((a*s)/(Lamda*Z)))\nfig = plt.figure(1)\n\nplt.plot(s,np.abs(V)\n)\nplt.xlim(0, 10)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('s')\nplt.legend(['abs(V(s))'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% C3VIS2S\n\n% Visibility for two point sources.\n% We have set Y'/X equal to s/Z\n\nfunction C3VIS2S;\n\na = 1;\nLamda = 0.0005;\nZ = 9000;\ns = (0.01:0.01:10);\n\nV = cos(pi*((a*s)/(Lamda*Z)));\n\nfigure(1);\nplot(s,abs(V));\naxis([0 10 0 1]);                  % PLOTS LIMITS                    \nxlabel('s');\nlegend('abs(V(s))');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "C3VIS2S",
    "tags": [
      "chapter4",
      "coherence"
    ],
    "wikipediaLinks": [
      {
        "title": "Coherence (physics)",
        "url": "https://en.wikipedia.org/wiki/Coherence_(physics)"
      },
      {
        "title": "Coherence length",
        "url": "https://en.wikipedia.org/wiki/Coherence_length"
      }
    ]
  },
  {
    "id": "C4VISEX",
    "title": "C4VISEX - C4VISEX\r",
    "description": "C4VISEX\r",
    "category": "Optics - Coherence",
    "chapter": "4",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# C4VISEX\n# Visibility for an extended source.\n# We have set Y'/X equal to s/Z\n\na = 1\nLamda = 0.0005\nZ = 9000\ns = 0.01:0.01:10\nVV = np.sin(np.pi*((a*s)/(Lamda*Z)))/(np.pi*((a*s)/(Lamda*Z)))\nfig = plt.figure(1)\n\nplt.plot(s,np.abs(VV)\n)\nplt.xlim(0, 10)\nplt.ylim(0, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('s')\nplt.legend(['abs(VV(s))'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% C4VISEX\n% Visibility for an extended source.\n% We have set Y'/X equal to s/Z\nfunction C4VISEX;\n\na = 1;\nLamda = 0.0005;\nZ = 9000;\ns = 0.01:0.01:10;\n\nVV = sin(pi*((a*s)/(Lamda*Z)))./(pi*((a*s)/(Lamda*Z)));\n\nfigure(1);\nplot(s,abs(VV));\naxis([0 10 0 1]);                  % PLOTS LIMITS                    \nxlabel('s');\nlegend('abs(VV(s))')",
    "cCode": "",
    "defaultParams": {},
    "displayName": "C4VISEX",
    "tags": [
      "chapter4",
      "coherence"
    ],
    "wikipediaLinks": [
      {
        "title": "Coherence (physics)",
        "url": "https://en.wikipedia.org/wiki/Coherence_(physics)"
      },
      {
        "title": "Coherence length",
        "url": "https://en.wikipedia.org/wiki/Coherence_length"
      }
    ]
  },
  {
    "id": "C5MICHSTS",
    "title": "C5MICHSTS - C5MICHSTS\r",
    "description": "C5MICHSTS\r",
    "category": "Optics - Coherence",
    "chapter": "4",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# C5MICHSTS\n# Michelson's Stellar Interferometer\n# Diffraction angle Y/X, wavelength ?, angle to be determined is ?.\n# Interferometer distance of Mirror M1 and M4 is h.\n\n# In the real set-up we change h to go from fringe pattern to no fringe pattern. From the\n# difference of these two values we calculate the angle ?.\n\n# ?n this simulation we choose an angle ? and show that the fringe pattern\n# changes for the two values of h we determine.\n# Example h equal 100 and 95.\n\nPhi = 0.00005\nX = 4000\nLamda = 0.0005\nd = 0.5\nh = 95\nY= np.arange(-30, 30+0.1, 0.1)\nuI = (np.cos(np.pi*d*(Y/(X*Lamda))))**2\nuII = (np.cos(np.pi*((Y/X)*d-h*Phi)/Lamda))**2\n# This is an indication if there are fringes or not:\nfig = plt.figure(1)\n\nplt.plot(Y,uI+uII,Y,uI,Y,uII)\n\nplt.xlim(-30, 30)\nplt.ylim(0, 1.5)\n;                  # PLOTS LIMITS                    \nplt.xlabel('Y')\nplt.legend(['uI(Y)+uII(Y)', 'uI(Y)', 'uII(Y)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% C5MICHSTS\n% Michelson's Stellar Interferometer\n% Diffraction angle Y/X, wavelength ?, angle to be determined is ?.\n% Interferometer distance of Mirror M1 and M4 is h.\n\n% In the real set-up we change h to go from fringe pattern to no fringe pattern. From the\n% difference of these two values we calculate the angle ?.\n\n% ?n this simulation we choose an angle ? and show that the fringe pattern\n% changes for the two values of h we determine.\n% Example h equal 100 and 95.\nfunction C5MICHSTS;\n\nPhi = 0.00005;\nX = 4000;\nLamda = 0.0005;\nd = 0.5;\nh = 95;\nY= (-30:0.1:30);\n\nuI = (cos(pi*d*(Y/(X*Lamda)))).^2;\nuII = (cos(pi*((Y/X)*d-h*Phi)/Lamda)).^2;\n\n%  This is an indication if there are fringes or not\n\nfigure(1);\nplot(Y,uI+uII,Y,uI,Y,uII);\naxis([-30 30 0 1.5]);                  % PLOTS LIMITS                    \nxlabel('Y');\nlegend('uI(Y)+uII(Y)','uI(Y)','uII(Y)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "C5MICHSTS",
    "tags": [
      "chapter4",
      "coherence",
      "mirror",
      "diffraction",
      "wavelength",
      "fringe-pattern",
      "pattern"
    ],
    "wikipediaLinks": [
      {
        "title": "Coherence (physics)",
        "url": "https://en.wikipedia.org/wiki/Coherence_(physics)"
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
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Interference (wave propagation)",
        "url": "https://en.wikipedia.org/wiki/Interference_(wave_propagation)"
      },
      {
        "title": "Coherence length",
        "url": "https://en.wikipedia.org/wiki/Coherence_length"
      }
    ]
  },
  {
    "id": "C6SUPERS",
    "title": "C6SUPERS - C6SUPERS\r",
    "description": "C6SUPERS\r",
    "category": "Optics - Coherence",
    "chapter": "4",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# C6SUPERS\n\n# (i) of four different wavelength and (ii) for the integration over the same wavelength interval.\n# Demonstration of the superposition of waves .\n# The medium wavelength is ?m = 2\n\n# 1. Summation over four waves\n\n\nx = np.arange(-200, 200+0.5, 0.5)\nLamda1=1.85\nLamda2=1.95\nLamda3=2.05\nLamda4=2.15\ny11=np.cos(2*np.pi*x/Lamda1)\ny12=np.cos(2*np.pi*x/Lamda2)\ny13=np.cos(2*np.pi*x/Lamda3)\ny14=np.cos(2*np.pi*x/Lamda4)\ny1=y11+y12+y13+y14\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(x,y1)\n\nplt.xlim(-200, 200)\nplt.ylim(-5, 5)\n;                  # PLOTS LIMITS                    \nplt.xlabel('x')\nplt.legend(['y1(x)'])\n# 2.Integration over the wavelength interval fro the superposition\nnx = length(x)\nfor r=1:nx\n       y41(r)= quad(@y41f,1.85,2.15,[],[],x(r))\n# y41=quad(@y41f,1.85,2.15,0.1)\n# y41 = quad(y41f,1.85,2.15,0.1)\nplt.subplot(2, 1, 2)\n\nplt.plot(x,y41)\n\nplt.xlim(-200, 200)\nplt.ylim(-0.5, 0.5)\n;                  # PLOTS LIMITS                    \nplt.xlabel('x')\nplt.legend(['y41(x)'])\nOut = np.cos(2*np.pi*x/Lamda)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% C6SUPERS\n\n% (i) of four different wavelength and (ii) for the integration over the same wavelength interval.\n% Demonstration of the superposition of waves .\n% The medium wavelength is ?m = 2\n\n% 1. Summation over four waves\n\nfunction C6SUPERS;\n\nx = (-200:0.5:200);\n\nLamda1=1.85;\nLamda2=1.95;\nLamda3=2.05;\nLamda4=2.15;\ny11=cos(2*pi*x/Lamda1);\ny12=cos(2*pi*x/Lamda2);\ny13=cos(2*pi*x/Lamda3);\ny14=cos(2*pi*x/Lamda4);\ny1=y11+y12+y13+y14;\n\nfigure(1);\nsubplot(2,1,1);\nplot(x,y1);\naxis([-200 200 -5 5]);                  % PLOTS LIMITS                    \nxlabel('x');\nlegend('y1(x)');\n\n% 2.Integration over the wavelength interval fro the superposition\nnx = length(x);\nfor r=1:nx;\n       y41(r)= quad(@y41f,1.85,2.15,[],[],x(r));    \nend;\n%y41=quad(@y41f,1.85,2.15,0.1);\n%y41 = quad(y41f,1.85,2.15,0.1);\n\n\n   \n\nsubplot(2,1,2);\nplot(x,y41);\naxis([-200 200 -0.5 0.5]);                  % PLOTS LIMITS                    \nxlabel('x');\nlegend('y41(x)');\n\n\nfunction Out = y41f(Lamda,x) \nOut = cos(2*pi*x./Lamda);",
    "cCode": "",
    "defaultParams": {},
    "displayName": "C6SUPERS",
    "tags": [
      "chapter4",
      "coherence",
      "wavelength"
    ],
    "wikipediaLinks": [
      {
        "title": "Coherence (physics)",
        "url": "https://en.wikipedia.org/wiki/Coherence_(physics)"
      },
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Coherence length",
        "url": "https://en.wikipedia.org/wiki/Coherence_length"
      }
    ]
  },
  {
    "id": "C7COHTEMS",
    "title": "C7COHTEMS - C7COHTEMS\r",
    "description": "C7COHTEMS\r",
    "category": "Optics - Coherence",
    "chapter": "4",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# C7COHTEMS\n\n# Demonstration of the superposition of two waves when integrating over a\n# wavelength interval.\n\n# The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied\n# for 0, 1/2 and 1 medium wavelength.\n\n\nx = np.arange(-200, 200+1, 1)\nLamdaM = 2\na1 = 0\na2 = 0.5\na3 = 1\nDelta1 = LamdaM * a1\nDelta2 = LamdaM * a2\nDelta3 = LamdaM * a3\nnx = length(x)\nfor r=1:nx\n       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r))\n       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r))\n       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r))\n# 1. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two\n# of the waves, no phase difference, using ?1=?m*a1, where ?m is medium wavelength.\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(x,y41)\n\nplt.xlim(-200, 200)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('x')\nplt.legend(['y41(x)'])\n# 2. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two\n# waves, for phase difference, using ?= ??m*a2. The phase difference is (1/2) ?m.\n# We have to use an expanded scale to see the result\nplt.subplot(3, 1, 2)\n\nplt.plot(x,y51)\n\nplt.xlim(-200, 200)\nplt.ylim(-0.05, 0.05)\n;                  # PLOTS LIMITS                    \nplt.xlabel('x')\nplt.legend(['y51(x)'])\n# 3. Integration over the wavelength interval from 1.85 to 2.15 for for the\n# superposition of two waves, for phase difference, using ?3 = ??m*a3.\n# The phase difference is 1 ?m. .\n\nplt.subplot(3, 1, 3)\n\nplt.plot(x,y61)\n\nplt.xlim(-200, 200)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('x')\nplt.legend(['y61(x)'])\nOut = np.cos(2*np.pi*(x-Delta1)/Lamda) + np.cos(2*np.pi*x/Lamda)\nOut = np.cos(2*np.pi*(x-Delta2)/Lamda) + np.cos(2*np.pi*x/Lamda)\nOut = np.cos(2*np.pi*(x-Delta3)/Lamda) + np.cos(2*np.pi*x/Lamda)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% C7COHTEMS\n\n% Demonstration of the superposition of two waves when integrating over a\n% wavelength interval.\n\n% The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied\n% for 0, 1/2 and 1 medium wavelength.\n\nfunction C7COHTEMS;\nglobal Delta1 Delta2 Delta3;\nx = (-200:1:200);\n\nLamdaM = 2;\na1 = 0;\na2 = 0.5;\na3 = 1;\nDelta1 = LamdaM * a1;\nDelta2 = LamdaM * a2;\nDelta3 = LamdaM * a3;\n\nnx = length(x);\nfor r=1:nx;\n       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r));    \n       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r));    \n       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r)); \nend;\n\n\n\n% 1. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two\n% of the waves, no phase difference, using ?1=?m*a1, where ?m is medium wavelength.\nfigure(1);\nsubplot(3,1,1);\nplot(x,y41);\naxis([-200 200 -1 1]);                  % PLOTS LIMITS                    \nxlabel('x');\nlegend('y41(x)');\n\n\n% 2. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two\n% waves, for phase difference, using ?= ??m*a2. The phase difference is (1/2) ?m.\n% We have to use an expanded scale to see the result\nsubplot(3,1,2);\nplot(x,y51);\naxis([-200 200 -0.05 0.05]);                  % PLOTS LIMITS                    \nxlabel('x');\nlegend('y51(x)');\n\n% 3. Integration over the wavelength interval from 1.85 to 2.15 for for the\n% superposition of two waves, for phase difference, using ?3 = ??m*a3.\n% The phase difference is 1 ?m. .\n\nsubplot(3,1,3);\nplot(x,y61);\naxis([-200 200 -1 1]);                  % PLOTS LIMITS                    \nxlabel('x');\nlegend('y61(x)');\n\n\n\n\n\n\nfunction Out = y41f(Lamda,x) \nglobal Delta1;\nOut = cos(2*pi*(x-Delta1)./Lamda) + cos(2*pi*x./Lamda);\n\nfunction Out = y51f(Lamda,x) \nglobal Delta2;\nOut = cos(2*pi*(x-Delta2)./Lamda) + cos(2*pi*x./Lamda);\n\nfunction Out = y61f(Lamda,x) \nglobal Delta3;\nOut = cos(2*pi*(x-Delta3)./Lamda) + cos(2*pi*x./Lamda);",
    "cCode": "",
    "defaultParams": {},
    "displayName": "C7COHTEMS",
    "tags": [
      "chapter4",
      "coherence",
      "grating",
      "wavelength",
      "phase"
    ],
    "wikipediaLinks": [
      {
        "title": "Coherence (physics)",
        "url": "https://en.wikipedia.org/wiki/Coherence_(physics)"
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
        "title": "Phase (waves)",
        "url": "https://en.wikipedia.org/wiki/Phase_(waves)"
      },
      {
        "title": "Coherence length",
        "url": "https://en.wikipedia.org/wiki/Coherence_length"
      }
    ]
  },
  {
    "id": "C8CCOHINTS",
    "title": "C8CCOHINTS - C8COHINTS\r",
    "description": "C8COHINTS\r",
    "category": "Optics - Coherence",
    "chapter": "4",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# C8COHINTS\n\n# Graphs for demonstration of the intensity of the superposition of two waves when\n# integrating over a wavelength interval.\n\n# The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied\n# for 0, 1/2 and 1 medium wavelength.\n\nx = np.arange(-200, 200+0.75, 0.75)\nLamdaM = 2\na1 = 0\na2 = 0.5\na3 = 1\nDelta1 =LamdaM * a1\nDelta2 = LamdaM * a2\nDelta3 = LamdaM * a3\n# 1. Integration over the wavelength interval from 1.85 to 2.15 for the intensity\n# superposition of two of the waves, no phase difference, using ????1 = ????m*a1,\n# where ?m is the medium wavelength .\nnx = length(x)\nfor r=1:nx\n       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r))\n       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r))\n       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r))\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(x,y41**2)\n\nplt.xlim(-200, 200)\nplt.ylim(0, 0.4)\n;                  # PLOTS LIMITS                    \nplt.xlabel('x')\nplt.legend(['y41(x)^2'])\n# 2. Integration over the wavelength interval from 1.85 to 2.15 for the intensity\n# superposition of two waves, for phase difference, using ? = a2.\n# The phase difference is (1/2) ?m\n\n\nplt.subplot(3, 1, 2)\n\nplt.plot(x,y51**2)\n\nplt.xlim(-200, 200)\nplt.ylim(0, 0.01)\n;                  # PLOTS LIMITS                    \nplt.xlabel('x')\nplt.legend(['y51(x)^2'])\n# 3. Integration over the wavelength interval from 1.85 to 2.15 for the intensity superposition\n# of two waves, for phase difference, using ?3 = LamdaM*a3.\n# The phase difference is 1 LamdaM\n\nplt.subplot(3, 1, 3)\n\nplt.plot(x,y61**2)\n\nplt.xlim(-200, 200)\nplt.ylim(0, 0.4)\n;                  # PLOTS LIMITS                    \nplt.xlabel('x')\nplt.legend(['y61(x)^2'])\nOut = np.cos(2*np.pi*(x-Delta1)/Lamda) + np.cos(2*np.pi*x/Lamda)\nOut = np.cos(2*np.pi*(x-Delta2)/Lamda) + np.cos(2*np.pi*x/Lamda)\nOut = np.cos(2*np.pi*(x-Delta3)/Lamda) + np.cos(2*np.pi*x/Lamda)\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% C8COHINTS\n\n% Graphs for demonstration of the intensity of the superposition of two waves when\n% integrating over a wavelength interval.\n\n% The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied\n% for 0, 1/2 and 1 medium wavelength.\nfunction C8CCOHINTS;\nglobal Delta1 Delta2 Delta3;\nx = (-200:0.75:200);\n\nLamdaM = 2;\n\na1 = 0;\na2 = 0.5;\na3 = 1;\n\n\nDelta1 =LamdaM * a1;\nDelta2 = LamdaM * a2;\nDelta3 = LamdaM * a3;\n\n% 1. Integration over the wavelength interval from 1.85 to 2.15 for the intensity\n% superposition of two of the waves, no phase difference, using ????1 = ????m*a1,\n% where ?m is the medium wavelength .\nnx = length(x);\nfor r=1:nx;\n       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r));    \n       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r));    \n       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r)); \nend;\n\nfigure(1);\nsubplot(3,1,1);\nplot(x,y41.^2);\naxis([-200 200 0 0.4]);                  % PLOTS LIMITS                    \nxlabel('x');\nlegend('y41(x)^2');\n\n% 2. Integration over the wavelength interval from 1.85 to 2.15 for the intensity\n% superposition of two waves, for phase difference, using ? = a2.\n% The phase difference is (1/2) ?m\n\n\nsubplot(3,1,2);\nplot(x,y51.^2);\naxis([-200 200 0 0.01]);                  % PLOTS LIMITS                    \nxlabel('x');\nlegend('y51(x)^2');\n\n% 3. Integration over the wavelength interval from 1.85 to 2.15 for the intensity superposition\n% of two waves, for phase difference, using ?3 = LamdaM*a3.\n% The phase difference is 1 LamdaM\n\nsubplot(3,1,3);\nplot(x,y61.^2);\naxis([-200 200 0 0.4]);                  % PLOTS LIMITS                    \nxlabel('x');\nlegend('y61(x)^2');\n\n\n\n\nfunction Out = y41f(Lamda,x) \nglobal Delta1;\nOut = cos(2*pi*(x-Delta1)./Lamda) + cos(2*pi*x./Lamda);\n\nfunction Out = y51f(Lamda,x) \nglobal Delta2;\nOut = cos(2*pi*(x-Delta2)./Lamda) + cos(2*pi*x./Lamda);\n\nfunction Out = y61f(Lamda,x) \nglobal Delta3;\nOut = cos(2*pi*(x-Delta3)./Lamda) + cos(2*pi*x./Lamda);",
    "cCode": "",
    "defaultParams": {},
    "displayName": "C8COHINTS",
    "tags": [
      "chapter4",
      "coherence",
      "grating",
      "wavelength",
      "intensity",
      "phase"
    ],
    "wikipediaLinks": [
      {
        "title": "Coherence (physics)",
        "url": "https://en.wikipedia.org/wiki/Coherence_(physics)"
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
        "title": "Intensity (physics)",
        "url": "https://en.wikipedia.org/wiki/Intensity_(physics)"
      },
      {
        "title": "Phase (waves)",
        "url": "https://en.wikipedia.org/wiki/Phase_(waves)"
      },
      {
        "title": "Coherence length",
        "url": "https://en.wikipedia.org/wiki/Coherence_length"
      }
    ]
  }
];
