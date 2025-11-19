// Optics - Optical Materials - Chapter 8
// 10 programs

export const programs = [
  {
    "id": "of",
    "title": "of - O1FRNKPSS\r",
    "description": "O1FRNKPSS\r",
    "category": "Optics - Optical Materials",
    "chapter": "8",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# O1FRNKPSS\n# Complex reflection coefficients of Fresnel' formulas as function of angle\n# of incidence for values of n2 and K.\n\n# Absolute value and imaginary parts are plotted.\n\n# n1, n2, K and ? are globally defined at the graphs.\n# Complex reflection coefficients zrp for parallel and zrs for perpendicular case.\n\n\nTheta = np.arange(0, 90+1, 1)\nK = 2\nn1 = 1\nn2 = 1.5\nzrp = (((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))\nzrs = (np.cos(2*(np.pi/360)*Theta)-((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(Theta,np.abs(zrp)\n,Theta,np.abs(zrs))\nplt.xlim(0, 100)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['abs(zrp(\theta))', 'abs(zrs(\theta))'])\nplt.subplot(2, 1, 2)\n\nplt.plot(Theta,angle(zrp)\n,Theta,angle(zrs))\nplt.xlim(0, 100)\nplt.ylim(-3.5, 3.5)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['angle(zrp(\theta))', 'angle(zrs(\theta))'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% O1FRNKPSS\n% Complex reflection coefficients of Fresnel' formulas as function of angle\n% of incidence for values of n2 and K.\n\n% Absolute value and imaginary parts are plotted.\n\n% n1, n2, K and ? are globally defined at the graphs.\n% Complex reflection coefficients zrp for parallel and zrs for perpendicular case.\n\nfunction O1FRNKPSS;\nTheta = (0:1:90);\nK = 2;\nn1 = 1;\nn2 = 1.5;\n\nzrp = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));\nzrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));\n\n\nfigure(1);\nsubplot(2,1,1);\nplot(Theta,abs(zrp),Theta,abs(zrs));\naxis([0 100 -1 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('abs(zrp(\theta))','abs(zrs(\theta))');\n\nsubplot(2,1,2);\nplot(Theta,angle(zrp),Theta,angle(zrs));\naxis([0 100 -3.5 3.5]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('angle(zrp(\theta))','angle(zrs(\theta))');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "O1FRNKPSS",
    "tags": [
      "chapter8",
      "optical-materials",
      "reflection"
    ],
    "wikipediaLinks": [
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Optical materials",
        "url": "https://en.wikipedia.org/wiki/Optical_materials"
      },
      {
        "title": "Refractive index",
        "url": "https://en.wikipedia.org/wiki/Refractive_index"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - O2FRSOPS Graphs of Ratios of reflection coefficients\r",
    "description": "O2FRSOPS Graphs of Ratios of reflection coefficients\r",
    "category": "Optics - Optical Materials",
    "chapter": "8",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# O2FRSOPS Graphs of Ratios of reflection coefficients\n# Reflection coefficients of Fresnel's formulas as function of angle\n# of incidence for n and K. Real part and ratios of real parts are plotted.\n# Refractive indices, K values, and ? are globally defined at the graphs.\n\n# Complex zrp, zzrp, zzzrp for parallel and\n# zrs, zzrs, zzzrs for perpendicular case.\n\n\nK = 0.1\nKK = 0.5\nKKK = 2\nn1 = 1\nn2 = 1.5\nnn2 = 3\nTheta = np.arange(0, 90+1, 1)\n# K = 0\n\n\nzrp0 = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\nzrs0 = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))\n# K not 0\n\nzrp = (((n2 -i*K)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2 -i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))\nzrs = (np.cos(2*(np.pi/360)*Theta)-((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))\n# For differen n and K\n\nzzrp = (((nn2 -i*KK)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))/(((nn2 -i*KK)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))\nzzrs = (np.cos(2*(np.pi/360)*Theta)-((nn2-i*KK)/n1)*np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((nn2-i*KK)/n1)*np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))\nzzzrp = (((nn2 -i*KKK)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))/(((nn2 -i*KKK)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))\nzzzrs = (np.cos(2*(np.pi/360)*Theta)-((nn2-i*KKK)/n1)*np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((nn2-i*KKK)/n1)*np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))\nfig = plt.figure(1)\n\nplt.subplot(3, 2, 1)\n\nplt.plot(Theta,real(zrp0)\n,Theta,real(zrp),Theta,real(zzrp),Theta,real(zzzrp))\nplt.xlim(0, 100)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['real(zrp0(\theta))', 'real(zrp(\theta))', 'real(zzrp(\theta))', 'real(zzzrp(\theta))'])\nplt.subplot(3, 2, 2)\n\nplt.plot(Theta,real(zrs0)\n,Theta,real(zrs),Theta,real(zzrs),Theta,real(zzzrs))\nplt.xlim(0, 100)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['real(zrs0(\theta))', 'real(zrs(\theta))', 'real(zzrs(\theta))', 'real(zzzrs(\theta))'])\n# Ratio: p/s\n\nplt.subplot(3, 1, 2)\n\nplt.plot(Theta,real(zrp0)\n/real(zrs0),Theta,real(zrp)/real(zrs),Theta,real(zzrp)/real(zzrs),Theta,real(zzzrp)/real(zzzrs))\nplt.xlim(0, 100)\nplt.ylim(-1, 1)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['real(zrp0(\theta))/real(zrs0(\theta))', 'real(zrp(\theta))/real(zrs(\theta))', 'real(zzrp(\theta))/real(zzrs(\theta))', 'real(zzzrp(\theta))/real(zzzrs(\theta))'])\n# Ratio: s/p\n\nplt.subplot(3, 1, 3)\n\nplt.plot(Theta,real(zrs0)\n/real(zrp0),Theta,real(zrs)/real(zrp),Theta,real(zzrs)/real(zzrp),Theta,real(zzzrs)/real(zzzrp))\nplt.xlim(0, 100)\nplt.ylim(-300, 200)\n;                  # PLOTS LIMITS                    \nplt.xlabel('\theta')\nplt.legend(['real(zrs0(\theta))/real(zrp0(\theta))', 'real(zrs(\theta))/real(zrp(\theta))', 'real(zzrs(\theta))/real(zzrp(\theta))', 'real(zzzrs(\theta))/real(zzzrp(\theta))'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% O2FRSOPS Graphs of Ratios of reflection coefficients\n% Reflection coefficients of Fresnel's formulas as function of angle\n% of incidence for n and K. Real part and ratios of real parts are plotted.\n% Refractive indices, K values, and ? are globally defined at the graphs.\n\n% Complex zrp, zzrp, zzzrp for parallel and\n% zrs, zzrs, zzzrs for perpendicular case.\n\nfunction O2FRSOPS;\nK = 0.1;\nKK = 0.5;\nKKK = 2;\nn1 = 1;\nn2 = 1.5;\nnn2 = 3;\nTheta = (0:1:90);\n% K = 0\n\n\nzrp0 = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\nzrs0 = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));\n\n% K not 0\n\nzrp = (((n2 -i*K)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2 -i*K)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));\nzrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));\n\n% For differen n and K\n\nzzrp = (((nn2 -i*KK)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2))./(((nn2 -i*KK)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2));\nzzrs = (cos(2*(pi/360)*Theta)-((nn2-i*KK)/n1)*sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((nn2-i*KK)/n1)*sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2));\nzzzrp = (((nn2 -i*KKK)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2))./(((nn2 -i*KKK)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2));\nzzzrs = (cos(2*(pi/360)*Theta)-((nn2-i*KKK)/n1)*sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((nn2-i*KKK)/n1)*sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2));\n\nfigure(1);\nsubplot(3,2,1);\nplot(Theta,real(zrp0),Theta,real(zrp),Theta,real(zzrp),Theta,real(zzzrp));\naxis([0 100 -1 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('real(zrp0(\theta))','real(zrp(\theta))','real(zzrp(\theta))','real(zzzrp(\theta))');\n\nsubplot(3,2,2);\nplot(Theta,real(zrs0),Theta,real(zrs),Theta,real(zzrs),Theta,real(zzzrs));\naxis([0 100 -1 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\nlegend('real(zrs0(\theta))','real(zrs(\theta))','real(zzrs(\theta))','real(zzzrs(\theta))');\n\n% Ratio: p/s\n\nsubplot(3,1,2);\nplot(Theta,real(zrp0)./real(zrs0),Theta,real(zrp)./real(zrs),Theta,real(zzrp)./real(zzrs),Theta,real(zzzrp)./real(zzzrs));\naxis([0 100 -1 1]);                  % PLOTS LIMITS                    \nxlabel('\theta');\n\nlegend('real(zrp0(\theta))/real(zrs0(\theta))','real(zrp(\theta))/real(zrs(\theta))','real(zzrp(\theta))/real(zzrs(\theta))','real(zzzrp(\theta))/real(zzzrs(\theta))');\n\n% Ratio: s/p\n\nsubplot(3,1,3);\nplot(Theta,real(zrs0)./real(zrp0),Theta,real(zrs)./real(zrp),Theta,real(zzrs)./real(zzrp),Theta,real(zzzrs)./real(zzzrp));\naxis([0 100 -300 200]);                  % PLOTS LIMITS                    \nxlabel('\theta');\n\nlegend('real(zrs0(\theta))/real(zrp0(\theta))','real(zrs(\theta))/real(zrp(\theta))','real(zzrs(\theta))/real(zzrp(\theta))','real(zzzrs(\theta))/real(zzzrp(\theta))');\n\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "O2FRSOPS Graphs of Ratios of reflection coefficients",
    "tags": [
      "chapter8",
      "optical-materials",
      "reflection"
    ],
    "wikipediaLinks": [
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Optical materials",
        "url": "https://en.wikipedia.org/wiki/Optical_materials"
      },
      {
        "title": "Refractive index",
        "url": "https://en.wikipedia.org/wiki/Refractive_index"
      }
    ]
  },
  {
    "id": "O3OSTINS",
    "title": "O3OSTINS - O3OSTINS Graphs of n and K\r",
    "description": "O3OSTINS Graphs of n and K\r",
    "category": "Optics - Optical Materials",
    "chapter": "8",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# O3OSTINS Graphs of n and K\n# 1. Dielectric Function for models with one oscillator in the infrared spectral\n# region.\n# The dielectric constant for high frequencies is set arbitrarily to ?inf = 20.\n# The model parameters are S, ?1, ?o. We set z = n - iK\n# S and ?1 are dimensionless,\n# ?o in cm**-1 i\n\nv = np.arange(900, 1200+1, 1)\nS1 = 0.09\nGamma1 = 0.02\nEpsiloninf = 20\nvo1 = 1050\nz1 = np.sqrt(Epsiloninf+ S1/(1-(v/vo1)**2-(Gamma1*v)/vo1))\nfig = plt.figure(1)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(v,real(z1)\n)\nplt.xlim(900, 1200)\nplt.ylim(-2, 15)\n;                  # PLOTS LIMITS                    \nplt.xlabel('v')\nplt.legend(['real(z1(v))'])\nplt.subplot(3, 1, 2)\n\nplt.plot(v,imag(z1)\n)\nplt.xlim(900, 1200)\nplt.ylim(-2, 22)\n;                  # PLOTS LIMITS                    \nplt.xlabel('v')\nplt.legend(['imag(z1(v))'])\n# 2. For an optical thin medium with little absorption we have the following\n# approximations. The parameters must be chosen such that n is close to\n# 1 and K is small.\n\nvv = np.arange(0, 2+0.1, 0.1)\na = 0.5e-5\nc = 1e-3\nn = 1 + a*((1-vv**2)/((1-vv**2)**2+(vv**2)*c**2))\nk = (a*(vv*c))/((1-vv**2)**2+(vv**2)*c**2)\nplt.subplot(3, 2, 5)\n\nplt.plot(vv,n)\n\nplt.xlim(0, 2)\nplt.ylim(0.99995, 1.00005)\n;                  # PLOTS LIMITS                    \nplt.xlabel('vv')\nplt.legend(['n(vv)'])\nplt.subplot(3, 2, 6)\n\nplt.plot(vv,k)\n\nplt.xlim(0, 2)\nplt.ylim(0, 0.006)\n;                  # PLOTS LIMITS                    \nplt.xlabel('vv')\nplt.legend(['k(vv)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% O3OSTINS Graphs of n and K\n% 1. Dielectric Function for models with one oscillator in the infrared spectral\n% region.\n% The dielectric constant for high frequencies is set arbitrarily to ?inf = 20.\n% The model parameters are S, ?1, ?o. We set z = n - iK\n% S and ?1 are dimensionless,\n% ?o in cm^-1 i\nfunction O3OSTINS;\nv = (900:1:1200);\nS1 = 0.09;\nGamma1 = 0.02;\nEpsiloninf = 20;\nvo1 = 1050;\nz1 = sqrt(Epsiloninf+ S1./(1-(v/vo1).^2-(Gamma1*v)/vo1));\n\n\nfigure(1);\nsubplot(3,1,1);\nplot(v,real(z1));\naxis([900 1200 -2 15]);                  % PLOTS LIMITS                    \nxlabel('v');\nlegend('real(z1(v))');\n\nsubplot(3,1,2);\nplot(v,imag(z1));\naxis([900 1200 -2 22]);                  % PLOTS LIMITS                    \nxlabel('v');\nlegend('imag(z1(v))');\n\n% 2. For an optical thin medium with little absorption we have the following\n% approximations. The parameters must be chosen such that n is close to\n% 1 and K is small.\n\nvv = (0:0.1:2);\na = 0.5e-5;\nc = 1e-3;\nn = 1 + a*((1-vv.^2)./((1-vv.^2).^2+(vv.^2)*c^2));\nk = (a*(vv*c))./((1-vv.^2).^2+(vv.^2)*c^2);\n\nsubplot(3,2,5);\nplot(vv,n);\naxis([0 2 0.99995 1.00005]);                  % PLOTS LIMITS                    \nxlabel('vv');\nlegend('n(vv)');\n\nsubplot(3,2,6);\nplot(vv,k);\naxis([0 2 0 0.006]);                  % PLOTS LIMITS                    \nxlabel('vv');\nlegend('k(vv)');\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "O3OSTINS Graphs of n and K",
    "tags": [
      "chapter8",
      "optical-materials"
    ],
    "wikipediaLinks": [
      {
        "title": "Optical materials",
        "url": "https://en.wikipedia.org/wiki/Optical_materials"
      },
      {
        "title": "Refractive index",
        "url": "https://en.wikipedia.org/wiki/Refractive_index"
      }
    ]
  },
  {
    "id": "O4SELMRS",
    "title": "O4SELMRS - O4SELMRS\r",
    "description": "O4SELMRS\r",
    "category": "Optics - Optical Materials",
    "chapter": "8",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# O4SELMRS\n# Graph for a demonstration of the \"Sellmeir\" presentation of the refractive index.\n\n# For fused quartz we have\nc1 = 1.448\nc2 = 3.3e5\nc3 = 1.23e11\nLamda = np.arange(4000, 8000+1, 1)\nn = c1 + c2/(Lamda**2) + c3/(Lamda**4)\nfig = plt.figure(1)\n\nplt.plot(Lamda,n)\n\nplt.xlim(4000, 8000)\nplt.ylim(1.45, 1.47)\n;                  # PLOTS LIMITS                    \nxlabel('lambda','Fontsize',12)\nplt.legend(['n(lambda)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% O4SELMRS\n% Graph for a demonstration of the \"Sellmeir\" presentation of the refractive index.\nfunction O4SELMRS;\n% For fused quartz we have\nc1 = 1.448;\nc2 = 3.3e5;\nc3 = 1.23e11;\nLamda = (4000:1:8000);\nn = c1 + c2./(Lamda.^2) + c3./(Lamda.^4);\n\nfigure(1);\nplot(Lamda,n);\naxis([4000 8000 1.45 1.47]);                  % PLOTS LIMITS                    \nxlabel('lambda','Fontsize',12);\nlegend('n(lambda)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "O4SELMRS",
    "tags": [
      "chapter8",
      "optical-materials"
    ],
    "wikipediaLinks": [
      {
        "title": "Optical materials",
        "url": "https://en.wikipedia.org/wiki/Optical_materials"
      },
      {
        "title": "Refractive index",
        "url": "https://en.wikipedia.org/wiki/Refractive_index"
      }
    ]
  },
  {
    "id": "O5METALS",
    "title": "O5METALS - O5METALS Calculation of n and K for Copper using the Drude model. \r",
    "description": "O5METALS Calculation of n and K for Copper using the Drude model. \r",
    "category": "Optics - Optical Materials",
    "chapter": "8",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# O5METALS Calculation of n and K for Copper using the Drude model. \n# Calculation of real and imaginary part.\n# Expression for low and high frequencies depending on angular frequency.\n# 1. General Expression\n\nc = 3e8\nSigma = 6e7; # (OHM m)**-1\nEpsilono = 8.85e-12; # C**2/Nm\nTau = 1/4.1e11; # sec\n\n# Angular frequency for 1mm wavelength is 2pi*300*10**9 see below\nOmega = linspace(1e11,1e18,5000)\n# Omega = (1e11:1e11:1e18)\n# The general expression for n+iK=zM(Omega)\nzm = np.sqrt(1+((i*Sigma)/(Epsilono*Omega))*(1/(1-i*Omega*Tau)))\nfig = plt.figure(1)\n\nplt.subplot(4, 1, 1)\n\nloglog(Omega,real(zm))\nplt.xlim(1e11, 1e18)\nplt.ylim(1e-4, 1e5)\n\nplt.xlabel('omega')\nplt.legend(['real(zm(omega))'])\nplt.subplot(4, 1, 2)\n\nloglog(Omega,imag(zm))\nplt.xlim(1e11, 1e18)\nplt.ylim(1e-13, 1e5)\n\nplt.xlabel('omega')\nplt.legend(['imag(zm(omega))'])\n# 2. High frequency limit\n\nnh = 1 - Sigma/(Epsilono*(Omega**2)*Tau)\nplt.subplot(4, 1, 3)\n\nsemilogx(Omega,nh,Omega,real(zm))\nplt.xlim(1e14, 1e18)\nplt.ylim(-1, 1.1)\n\nplt.xlabel('omega')\nplt.legend(['nh(omega)', 'real(zm(omega))'])\n# 3. Low frequency limit\n\nn1 = np.sqrt(Sigma/(2*Epsilono*Omega))\nplt.subplot(4, 1, 4)\n\nsemilogx(Omega,n1,Omega,real(zm))\nplt.xlim(1e11, 1e14)\nplt.ylim(0, 6e3)\n\nplt.xlabel('omega')\nplt.legend(['n1(omega)', 'real(zm(omega))'])\n# frequency\n# 3e11 is 1mm\n# 3e14 is 1micron\n# 3e17 is 1nm is 10A\n# 1e11 is 3mm\n# 1e14 is 3micron\n# 1e17 is 3nm is 30A\n\n# angular frequency\n# 1e11 is 3/(2pi) =0.477 mm\n# 1e14 is 0.477 micron\n# 1e17 is 0.477 nm is 47A\n\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% O5METALS Calculation of n and K for Copper using the Drude model. \n% Calculation of real and imaginary part.\n% Expression for low and high frequencies depending on angular frequency.\n% 1. General Expression\nfunction O5METALS;\nc = 3e8; \nSigma = 6e7; % (OHM m)^-1\nEpsilono = 8.85e-12; %C^2/Nm\nTau = 1/4.1e11; %sec\n\n% Angular frequency for 1mm wavelength is 2pi*300*10^9 see below\nOmega = linspace(1e11,1e18,5000);\n%Omega = (1e11:1e11:1e18);\n\n% The general expression for n+iK=zM(Omega)\nzm = sqrt(1+((i*Sigma)./(Epsilono*Omega)).*(1./(1-i*Omega*Tau)));\n\nfigure(1);\nsubplot(4,1,1);\nloglog(Omega,real(zm))\naxis([1e11 1e18 1e-4 1e5]);\nxlabel('omega');\nlegend('real(zm(omega))');\n\nsubplot(4,1,2);\nloglog(Omega,imag(zm))\naxis([1e11 1e18 1e-13 1e5]);\nxlabel('omega');\nlegend('imag(zm(omega))');\n\n%2. High frequency limit\n\nnh = 1 - Sigma./(Epsilono*(Omega.^2)*Tau);\n\nsubplot(4,1,3);\nsemilogx(Omega,nh,Omega,real(zm))\naxis([1e14 1e18 -1 1.1]);\nxlabel('omega');\nlegend('nh(omega)','real(zm(omega))');\n\n% 3. Low frequency limit\n\nn1 = sqrt(Sigma./(2*Epsilono*Omega));\n\nsubplot(4,1,4);\nsemilogx(Omega,n1,Omega,real(zm));\naxis([1e11 1e14 0 6e3]);\nxlabel('omega');\nlegend('n1(omega)','real(zm(omega))');\n\n\n% frequency\n% 3e11 is 1mm\n% 3e14 is 1micron\n% 3e17 is 1nm is 10A\n% 1e11 is 3mm\n% 1e14 is 3micron\n% 1e17 is 3nm is 30A\n\n% angular frequency\n% 1e11 is 3/(2pi) =0.477 mm\n% 1e14 is 0.477 micron\n% 1e17 is 0.477 nm is 47A\n",
    "cCode": "",
    "defaultParams": {},
    "displayName": "O5METALS Calculation of n and K for Copper using the Drude model.",
    "tags": [
      "chapter8",
      "optical-materials",
      "wavelength",
      "frequency"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Frequency",
        "url": "https://en.wikipedia.org/wiki/Frequency"
      },
      {
        "title": "Optical materials",
        "url": "https://en.wikipedia.org/wiki/Optical_materials"
      },
      {
        "title": "Refractive index",
        "url": "https://en.wikipedia.org/wiki/Refractive_index"
      }
    ]
  },
  {
    "id": "O6SKINS",
    "title": "O6SKINS - O6SKINS Skin Depth\r",
    "description": "O6SKINS Skin Depth\r",
    "category": "Optics - Optical Materials",
    "chapter": "8",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# O6SKINS Skin Depth\n# 1. Skin depth (in meters) for intensity depending on frequency\n\n\nEpsilono = 8.85e-12 # C**2/Nm\nc = 3e8\nOmega = logspace(10,14,100)\nSigma = 6e7\nOne = np.sqrt((Epsilono*c**2)/(2*Omega*Sigma)); # in meter\n\nfig = plt.figure(1)\n\nplt.subplot(2, 1, 1)\n\nplt.plot(Omega,One)\nplt.xlim(0, 1e14)\nplt.ylim(0, 10e-8)\n\nplt.xlabel('omega')\nplt.legend(['I(omega)'])\n# 2. Skin depth (in meters) for intensity depending on wavelength\n# ( for checking:For 1 mm wavelength angular frequency is 2?*300* 10**9)\n\nLamda = logspace(-9,-3,100)\nOne = np.sqrt((Epsilono*c*Lamda)/(4*np.pi*Sigma))\nplt.subplot(2, 1, 2)\n\nsemilogx(Lamda,One)\nplt.xlim(1e-7, 1e-3)\nplt.ylim(0, 6e-8)\n\nplt.xlabel('lambda')\nplt.legend(['I(lambda)'])\n# 1 10**-9 meter is 1 nm =.001 microns= 10A\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% O6SKINS Skin Depth\n% 1. Skin depth (in meters) for intensity depending on frequency\n\nfunction O6SKINS;\n\nEpsilono = 8.85e-12 % C^2/Nm\nc = 3e8;\nOmega = logspace(10,14,100);\nSigma = 6e7;\n\nOne = sqrt((Epsilono*c^2)./(2*Omega*Sigma)); % in meter\n\nfigure(1);\nsubplot(2,1,1);\nplot(Omega,One)\naxis([0 1e14 0 10e-8]);\nxlabel('omega');\nlegend('I(omega)');\n\n% 2. Skin depth (in meters) for intensity depending on wavelength\n% ( for checking:For 1 mm wavelength angular frequency is 2?*300* 10^9)\n\nLamda = logspace(-9,-3,100);\nOne = sqrt((Epsilono*c*Lamda)/(4*pi*Sigma));\n\nsubplot(2,1,2);\nsemilogx(Lamda,One)\naxis([1e-7 1e-3 0 6e-8]);\nxlabel('lambda');\nlegend('I(lambda)');\n\n% 1 10^-9 meter is 1 nm =.001 microns= 10A",
    "cCode": "",
    "defaultParams": {},
    "displayName": "O6SKINS Skin Depth",
    "tags": [
      "chapter8",
      "optical-materials",
      "wavelength",
      "intensity",
      "frequency"
    ],
    "wikipediaLinks": [
      {
        "title": "Wavelength",
        "url": "https://en.wikipedia.org/wiki/Wavelength"
      },
      {
        "title": "Intensity (physics)",
        "url": "https://en.wikipedia.org/wiki/Intensity_(physics)"
      },
      {
        "title": "Frequency",
        "url": "https://en.wikipedia.org/wiki/Frequency"
      },
      {
        "title": "Optical materials",
        "url": "https://en.wikipedia.org/wiki/Optical_materials"
      },
      {
        "title": "Refractive index",
        "url": "https://en.wikipedia.org/wiki/Refractive_index"
      }
    ]
  },
  {
    "id": "O7REFNKS",
    "title": "O7REFNKS - O7REFNKS\r",
    "description": "O7REFNKS\r",
    "category": "Optics - Optical Materials",
    "chapter": "8",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# O7REFNKS\n# The reflectance R is plotted for normal incidence for fixed\n# n depending on K.\n\nTheta = 0\nn1 = 1\nn2 = 10\nK = logspace(-3,2,100)\nz = (((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)- np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+ np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))\nR = z*conj(z)\nfig = plt.figure(1)\n\nplt.plot(K,R)\n\nplt.xlim(0, 100)\nplt.ylim(0.6, 1)\n\nplt.xlabel('K')\nplt.legend(['R(K)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% O7REFNKS\n% The reflectance R is plotted for normal incidence for fixed\n% n depending on K.\nfunction O7REFNKS;\n\nTheta = 0;\nn1 = 1;\nn2 = 10;\nK = logspace(-3,2,100);\nz = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)- sqrt(1-((n1./(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+ sqrt(1-((n1./(n2-i*K))*sin(2*(pi/360)*Theta)).^2));\n\nR = z.*conj(z);\nfigure(1);\nplot(K,R);\naxis([0 100 0.6 1]);\nxlabel('K');\nlegend('R(K)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "O7REFNKS",
    "tags": [
      "chapter8",
      "optical-materials"
    ],
    "wikipediaLinks": [
      {
        "title": "Optical materials",
        "url": "https://en.wikipedia.org/wiki/Optical_materials"
      },
      {
        "title": "Refractive index",
        "url": "https://en.wikipedia.org/wiki/Refractive_index"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - O8ARDELS Fresnel's Formulas with Absorption\r",
    "description": "O8ARDELS Fresnel's Formulas with Absorption\r",
    "category": "Optics - Optical Materials",
    "chapter": "8",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# O8ARDELS Fresnel's Formulas with Absorption\n\n# Calculation of real part and argument of parallel zrp and perpendicular zrs case\n# of Fresnel's formulas with absorption. We assume zrs = rs exp ids and zrp = rp exp idp\n# and the argument as function of q.\n# The difference of the angle of the two components of the reflected light is plotted.\n# This angle is the angle discussed in chapter 5 for light elliptically polarized by reflection.\n\n\nn1 = 1\nn2 = 3\nK = 5\nTheta = np.arange(0, 89.9+1, 1)\nzrp = (((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)- np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+ np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))\nzrs = (np.cos(2*(np.pi/360)*Theta)-((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))\nargDelta = angle(zrs)-angle(zrp)-np.pi\nfig = plt.figure(1)\n\nplt.plot(Theta,argDelta)\n\nplt.xlim(0, 100)\nplt.ylim(-0.1, 6.5)\n\nplt.xlabel('\theta')\nplt.legend(['argDelta(\theta)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% O8ARDELS Fresnel's Formulas with Absorption\n\n% Calculation of real part and argument of parallel zrp and perpendicular zrs case\n% of Fresnel's formulas with absorption. We assume zrs = rs exp ids and zrp = rp exp idp\n% and the argument as function of q.\n% The difference of the angle of the two components of the reflected light is plotted.\n% This angle is the angle discussed in chapter 5 for light elliptically polarized by reflection.\n\nfunction O8ARDELS;\nn1 = 1;\nn2 = 3;\nK = 5;\n\nTheta = (0:1:89.9);\nzrp = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)- sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+ sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));\nzrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));\n\nargDelta = angle(zrs)-angle(zrp)-pi;\n\nfigure(1);\nplot(Theta,argDelta);\naxis([0 100 -0.1 6.5]);\nxlabel('\theta');\nlegend('argDelta(\theta)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "O8ARDELS Fresnel's Formulas with Absorption",
    "tags": [
      "chapter8",
      "optical-materials",
      "reflection"
    ],
    "wikipediaLinks": [
      {
        "title": "Reflection (physics)",
        "url": "https://en.wikipedia.org/wiki/Reflection_(physics)"
      },
      {
        "title": "Optical materials",
        "url": "https://en.wikipedia.org/wiki/Optical_materials"
      },
      {
        "title": "Refractive index",
        "url": "https://en.wikipedia.org/wiki/Refractive_index"
      }
    ]
  },
  {
    "id": "of",
    "title": "of - OA1DELTAFfS\r",
    "description": "OA1DELTAFfS\r",
    "category": "Optics - Optical Materials",
    "chapter": "8",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# OA1DELTAFfS\n# Calculation of ratio of real part r of the parallel (p) and perpendicular (s) case,\n# and the difference of the arguments of Fresnel's formulas with absorption.\n# For values of K we calculate the absolute values of zp = rp exp i?p and\n# zs = rs exp i?s and the argument as function of ?.\n\nn = 2\nK = 2\nTheta = np.arange(0, 90+1, 1)\nzp = ((n-i*K)*np.cos(2*np.pi*(Theta/360))-np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))/((n-i*K)*np.cos(2*np.pi*(Theta/360))+np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))\nzs = (np.cos(2*np.pi*(Theta/360))-(n-i*K)*np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))/(np.cos(2*np.pi*(Theta/360))+(n-i*K)*np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))\nfig = plt.figure(1)\n\nplt.subplot(2, 2, 1)\n\nplt.plot(Theta,np.abs(zp)\n)\nplt.xlim(0, 90)\nplt.ylim(0.2, 1)\n\nplt.xlabel('\theta')\nplt.legend(['abs(zp(\theta))'])\nplt.subplot(2, 2, 2)\n\nplt.plot(Theta,angle(zp)\n)\nplt.xlim(0, 90)\nplt.ylim(-4, 0)\n\nplt.xlabel('\theta')\nplt.legend(['angle(zp(\theta))'])\nplt.subplot(2, 2, 3)\n\nplt.plot(Theta,np.abs(zs)\n)\nplt.xlim(0, 90)\nplt.ylim(0.6, 1)\n\nplt.xlabel('\theta')\nplt.legend(['abs(zs(\theta))'])\nplt.subplot(2, 2, 4)\n\nplt.plot(Theta,angle(zs)\n)\nplt.xlim(0, 100)\nplt.ylim(0, 4)\n\nplt.xlabel('\theta')\nplt.legend(['angle(zs(\theta))'])\n# The ratio of the absolute value of zs/zp, that is P = tan? and the difference of the\n# arguments of zs and zp, that is ?. (parallel (p), perpendicular (s))\nfig = plt.figure(2)\n\nplt.subplot(3, 1, 1)\n\nplt.plot(Theta,np.abs(zs)\n/np.abs(zp))\nplt.xlim(0, 100)\nplt.ylim(1, 3)\n\nplt.xlabel('\theta')\nplt.legend(['abs(zs(\theta))/abs(zp(\theta))'])\nDelta = angle(zs)-angle(zp)\nplt.subplot(3, 1, 2)\n\nplt.plot(Theta,-Delta)\n\nplt.xlim(0, 90)\nplt.ylim(-8, 0)\n\nplt.xlabel('\theta')\nplt.legend(['-Delta'])\nPsi = atan(np.abs(zs)/np.abs(zp))\nplt.subplot(3, 1, 3)\n\nplt.plot(Theta,Psi)\n\nplt.xlim(0, 90)\nplt.ylim(0.7, 1.2)\n\nplt.xlabel('\theta')\nplt.legend(['psi'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% OA1DELTAFfS\n% Calculation of ratio of real part r of the parallel (p) and perpendicular (s) case,\n% and the difference of the arguments of Fresnel's formulas with absorption.\n% For values of K we calculate the absolute values of zp = rp exp i?p and\n% zs = rs exp i?s and the argument as function of ?.\nfunction OA1DELTAFFS;\nn = 2;\nK = 2;\nTheta = (0:1:90);\n\nzp = ((n-i*K)*cos(2*pi*(Theta/360))-sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))))./((n-i*K)*cos(2*pi*(Theta/360))+sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))));\n\nzs = (cos(2*pi*(Theta/360))-(n-i*K)*sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))))./(cos(2*pi*(Theta/360))+(n-i*K)*sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))));\n\nfigure(1);\nsubplot(2,2,1);\nplot(Theta,abs(zp));\naxis([0 90 0.2 1]);\nxlabel('\theta');\nlegend('abs(zp(\theta))');\n\nsubplot(2,2,2);\nplot(Theta,angle(zp));\naxis([0 90 -4 0]);\nxlabel('\theta');\nlegend('angle(zp(\theta))');\n\nsubplot(2,2,3);\nplot(Theta,abs(zs));\naxis([0 90 0.6 1]);\nxlabel('\theta');\nlegend('abs(zs(\theta))');\n\nsubplot(2,2,4);\nplot(Theta,angle(zs));\naxis([0 100 0 4]);\nxlabel('\theta');\nlegend('angle(zs(\theta))');\n\n% The ratio of the absolute value of zs/zp, that is P = tan? and the difference of the\n% arguments of zs and zp, that is ?. (parallel (p), perpendicular (s))\nfigure(2);\nsubplot(3,1,1);\nplot(Theta,abs(zs)./abs(zp));\naxis([0 100 1 3]);\nxlabel('\theta');\nlegend('abs(zs(\theta))/abs(zp(\theta))');\n\nDelta = angle(zs)-angle(zp);\n\nsubplot(3,1,2);\nplot(Theta,-Delta);\naxis([0 90 -8 0]);\nxlabel('\theta');\nlegend('-Delta');\nPsi = atan(abs(zs)./abs(zp));\n\nsubplot(3,1,3);\nplot(Theta,Psi);\naxis([0 90 0.7 1.2]);\nxlabel('\theta');\nlegend('psi');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "OA1DELTAFfS",
    "tags": [
      "chapter8",
      "optical-materials"
    ],
    "wikipediaLinks": [
      {
        "title": "Optical materials",
        "url": "https://en.wikipedia.org/wiki/Optical_materials"
      },
      {
        "title": "Refractive index",
        "url": "https://en.wikipedia.org/wiki/Refractive_index"
      }
    ]
  },
  {
    "id": "OA2METPDS",
    "title": "OA2METPDS - OA2METPDS\r",
    "description": "OA2METPDS\r",
    "category": "Optics - Optical Materials",
    "chapter": "8",
    "source": "matlab",
    "pythonCode": "import matplotlib.pyplot as plt\nimport numpy as np\nimport io\nimport base64\n\n# OA2METPDS\n# Calculation of n and K from input values P and ? for\n# exact and approximate expressions\n\nDelta = 114\nP = 0.50\nPsi = atan(P)\nk = np.arange(1, 40+1, 1)\nThetak = k * 2\n# 1.Exact Expression\n\nzk = np.sqrt((np.sin((2*np.pi*Thetak)/360)**2)+(((np.cos(2*Psi)+i*np.sin((2*np.pi*Delta)/360)*np.sin(2*Psi))*(np.sin((2*np.pi*Thetak)/360)**2))/(np.cos((2*np.pi*Thetak)/360)*(np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)+1)))**2)\nnk = real(zk)\nKk = imag(zk)\n# 2.For the approximation one disregards the sin**2 term\nz1k =(((np.cos(2*Psi)+i*np.sin((2*np.pi*Delta)/360)*np.sin(2*Psi))*(np.sin((2*np.pi*Thetak)/360)**2))/(np.cos((2*np.pi*Thetak)/360)*(np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)+1)))\nnnk = real(z1k)\nKKk = imag(z1k)\n# 3.Comparison\nfig = plt.figure(1)\n\nplt.subplot(3, 2, 1)\n\nplt.plot(Thetak,real(zk)\n,Thetak,real(z1k))\nplt.xlim(0, 100)\nplt.ylim(0, 4)\n\nplt.xlabel('\thetak')\nplt.legend(['real(zk)', 'real(z1k)'])\nplt.subplot(3, 2, 2)\n\nplt.plot(Thetak,imag(zk)\n,Thetak,imag(z1k))\nplt.xlim(0, 100)\nplt.ylim(0, 8)\n\nplt.xlabel('\thetak')\nplt.legend(['imag(zk)', 'imag(z1k)'])\n# 4. The approximation can be written as two real expressions\n\nnnk = ((np.sin((2*np.pi*Thetak)/360)**2)*np.cos(2*Psi))/(np.cos((2*np.pi*Thetak)/360)*(1+np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)))\nKKk = ((np.sin((2*np.pi*Thetak)/360)**2)*(np.sin(Delta)*np.sin(2*Psi)))/(np.cos((2*np.pi*Thetak)/360)*(1+np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)))\nplt.subplot(3, 1, 2)\n\nplt.plot(Thetak,nnk,Thetak,real(zk)\n,Thetak,real(z1k))\nplt.xlim(0, 80)\nplt.ylim(0, 2)\n\nplt.xlabel('\thetak')\nplt.legend(['nnk', 'real(zk)', 'real(z1k)'])\nplt.subplot(3, 1, 3)\n\nplt.plot(Thetak,KKk,Thetak,imag(zk)\n,Thetak,imag(z1k))\nplt.xlim(0, 80)\nplt.ylim(0, 8)\n\nplt.xlabel('\thetak')\nplt.legend(['KKk', 'imag(zk)', 'imag(z1k)'])\n# Save plot to base64\nbuf = io.BytesIO()\nplt.tight_layout()\nplt.savefig(buf, format='png', dpi=100, bbox_inches='tight')\nbuf.seek(0)\nimg_base64 = base64.b64encode(buf.read()).decode('utf-8')\nplt.close()\nprint(f\"data:image/png;base64,{img_base64}\")\n",
    "matlabCode": "% OA2METPDS\n% Calculation of n and K from input values P and ? for\n% exact and approximate expressions\nfunction OA2METPDS;\nDelta = 114;\nP = 0.50;\nPsi = atan(P);\nk = (1:1:40);\nThetak = k * 2;\n% 1.Exact Expression\n\nzk = sqrt((sin((2*pi*Thetak)/360).^2)+(((cos(2*Psi)+i*sin((2*pi*Delta)/360)*sin(2*Psi))*(sin((2*pi*Thetak)/360).^2))./(cos((2*pi*Thetak)/360)*(cos((2*pi*Delta)/360)*sin(2*Psi)+1))).^2);\nnk = real(zk);\nKk = imag(zk);\n% 2.For the approximation one disregards the sin^2 term\nz1k =(((cos(2*Psi)+i*sin((2*pi*Delta)/360)*sin(2*Psi))*(sin((2*pi*Thetak)/360).^2))./(cos((2*pi*Thetak)/360)*(cos((2*pi*Delta)/360)*sin(2*Psi)+1)));\nnnk = real(z1k);\nKKk = imag(z1k);\n% 3.Comparison\nfigure(1);\nsubplot(3,2,1);\nplot(Thetak,real(zk),Thetak,real(z1k));\naxis([0 100 0 4]);\nxlabel('\thetak');\nlegend('real(zk)','real(z1k)');\n\nsubplot(3,2,2);\nplot(Thetak,imag(zk),Thetak,imag(z1k));\naxis([0 100 0 8]);\nxlabel('\thetak');\nlegend('imag(zk)','imag(z1k)');\n\n%4. The approximation can be written as two real expressions\n\nnnk = ((sin((2*pi*Thetak)/360).^2)*cos(2*Psi))./(cos((2*pi*Thetak)/360)*(1+cos((2*pi*Delta)/360)*sin(2*Psi)));\n\nKKk = ((sin((2*pi*Thetak)/360).^2)*(sin(Delta)*sin(2*Psi)))./(cos((2*pi*Thetak)/360)*(1+cos((2*pi*Delta)/360)*sin(2*Psi)));\n\nsubplot(3,1,2);\nplot(Thetak,nnk,Thetak,real(zk),Thetak,real(z1k));\naxis([0 80 0 2]);\nxlabel('\thetak');\nlegend('nnk','real(zk)','real(z1k)');\n\nsubplot(3,1,3);\nplot(Thetak,KKk,Thetak,imag(zk),Thetak,imag(z1k));\naxis([0 80 0 8]);\nxlabel('\thetak');\nlegend('KKk','imag(zk)','imag(z1k)');",
    "cCode": "",
    "defaultParams": {},
    "displayName": "OA2METPDS",
    "tags": [
      "chapter8",
      "optical-materials"
    ],
    "wikipediaLinks": [
      {
        "title": "Optical materials",
        "url": "https://en.wikipedia.org/wiki/Optical_materials"
      },
      {
        "title": "Refractive index",
        "url": "https://en.wikipedia.org/wiki/Refractive_index"
      }
    ]
  }
];
